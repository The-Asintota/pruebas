import sys

if len(sys.argv) < 2:
    print("Uso: python update_project_version.py <nueva_version>")
    sys.exit(1)

new_version = sys.argv[1]
pyproject_file = "pyproject.toml"

with open(file=pyproject_file, encoding="utf-8") as f:
    lines = f.readlines()

in_poetry_section = False
version_updated = False

for i, line in enumerate(lines):
    # Detectamos la entrada a la sección de poetry
    if line.strip() == "[tool.poetry]":
        in_poetry_section = True
        continue

    # Si estamos dentro de la sección
    if in_poetry_section:
        # Si llegamos a otra sección (empieza por "["), abortamos la búsqueda
        if line.strip().startswith("["):
            break

        # Encontramos la línea de la versión y la reemplazamos
        if line.startswith("version =") or line.startswith("version="):
            lines[i] = f'version = "{new_version}"\n'
            version_updated = True
            break

if not version_updated:
    print("Error: No se encontró la variable 'version' bajo [tool.poetry]")
    sys.exit(1)

with open(file=pyproject_file, mode="w", encoding="utf-8") as f:
    f.writelines(lines)

print(f"Versión del proyecto actualizada a {new_version} conservando el formato.")
