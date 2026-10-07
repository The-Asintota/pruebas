const types = [
  { type: "feat", section: "✨ Nuevas Funcionalidades", hidden: false },
  { type: "fix", section: "🐛 Corrección de Errores", hidden: false },
  { type: "docs", hidden: true },
  { type: "style", hidden: true },
  { type: "refactor", hidden: true },
  { type: "test", hidden: true },
  { type: "wip", hidden: true },
  { type: "add", hidden: true },
  { type: "perf", section: "⚡️ Mejoras de Rendimiento", hidden: false },
  { type: "chore", hidden: true }
];

const repositoryUrl = "git@github.com:The-Asintota/pruebas.git";
const repositoryUrlCommit = "https://github.com/The-Asintota/pruebas/commit/";
const repositoryUrlMergeRequests = "https://github.com/The-Asintota/pruebas/pulls/";

module.exports = {
  branches: ['main'],
  repositoryUrl: repositoryUrl,
  tagFormat: 'v${version}',
  plugins: [
    ['@semantic-release/commit-analyzer', { preset: 'conventionalcommits' }],
    [
      '@semantic-release/release-notes-generator',
      { 
        preset: 'conventionalcommits',
        presetConfig: {
          types
        },
        writerOpts: {
          mainTemplate: `{{> header}}

{{#each commitGroups}}
{{#if title}}
# {{title}}

{{/if}}
{{#each commits}}
{{> commit root=@root}}
{{/each}}
{{/each}}

{{> footer}}`,
          transform: (commit, context) => {
            let discard = true;
            
            const mutableCommit = { ...commit };
            mutableCommit.notes = commit.notes.map(note => ({ ...note }));

            if (!mutableCommit.type && mutableCommit.header) {
              const match = mutableCommit.header.match(/^(\w+)(?:\(([^)]+)\))?(!?):\s*(.*)$/);
              if (match) {
                mutableCommit.type = match[1];
                mutableCommit.scope = match[2];
                mutableCommit.subject = match[4];
              }
            }

            mutableCommit.notes.forEach(note => {
              note.title = '🚨 Cambios Importantes (Breaking Changes)';
              discard = false;
            });

            if (mutableCommit.type === `release`) {
              discard = true;
            }

            if (mutableCommit.subject && typeof mutableCommit.subject === 'string') {
              mutableCommit.subject = mutableCommit.subject.charAt(0).toUpperCase() + mutableCommit.subject.slice(1);
            }

            const definition = types.find(t => t.type === mutableCommit.type);

            if (definition) {
              if (definition.hidden && mutableCommit.notes.length === 0) return;
              mutableCommit.type = definition.section;
              discard = false;
            } else if (mutableCommit.notes.length === 0) {
              return;
            }

            if (discard) return;

            if (mutableCommit.hash) {
              mutableCommit.shortHash = mutableCommit.hash.substring(0, 7);
            }

            return mutableCommit;
          },
          finalizeContext: (context, options, commits, keyCommit) => {
            const baseUrl = repositoryUrlCommit;
            const prUrl = repositoryUrlMergeRequests;
            
            context.commitGroups.forEach(group => {
              group.commits.sort((a, b) => {
                const scopeA = a.scope ? a.scope.toLowerCase() : '';
                const scopeB = b.scope ? b.scope.toLowerCase() : '';
                return scopeA.localeCompare(scopeB);
              });

              group.commits.forEach(commit => {
                commit.link = `${baseUrl}${commit.hash}`;
                
                if (commit.subject) {
                  commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
                    return `[#${issue}](${prUrl}${issue})`;
                  });
                }
              });
            });

            return context;
          },
          commitPartial: `## {{subject}} ([{{shortHash}}]({{link}}))
{{#if body}}

{{{body}}}
{{/if}}`
        }
      }
    ],
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md', 'pyproject.toml'],
      message: 'chore(release): se actualizan referencias de las versiones [skip ci]'
    }],
    ['@semantic-release/github', { githubUrl: 'https://github.com' }]
  ]
};
