## 4.0.0 (2026-10-07)

# ✨ Nuevas Funcionalidades

## Nuevo servicio GET api/v1/auth/ ([5e89c36](https://github.com/The-Asintota/pruebas/commit/5e89c369a36ac7ae347fab8c41a0e77886930fa0))

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.
## Nuevo servicio GET api/v1/auth/ ([24797c8](https://github.com/The-Asintota/pruebas/commit/24797c8fbf82234fd51472839d27f27ba09d2910))

El sistema ahora utiliza UUIDv4 en lugar de enteros autoincrementables para mayor seguridad.


### 🚨 Cambios Importantes (Breaking Changes)

* La propiedad `userId` en las respuestas JSON ahora es un string (UUID) en lugar de un number. Debes actualizar tus interfaces de TypeScript.

## 3.0.0 (2026-10-07)

# ✨ Nuevas Funcionalidades

## Nuevo servicio GET api/v1/auth/ ([a9e9de1](https://github.com/The-Asintota/pruebas/commit/a9e9de19edc14123c123685b582bd3a41fb0b9c4))

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.
## Nuevo servicio GET api/v1/auth/ ([37f42dc](https://github.com/The-Asintota/pruebas/commit/37f42dc20dceef1b50af3a2d12e978cb7dcb4937))

El sistema ahora utiliza UUIDv4 en lugar de enteros autoincrementables para mayor seguridad.


### 🚨 Cambios Importantes (Breaking Changes)

* La propiedad `userId` en las respuestas JSON ahora es un string (UUID) en lugar de un number. Debes actualizar tus interfaces de TypeScript.

## 2.0.0 (2026-10-07)

## Feat(users)!: nuevo servicio GET api/v1/user/ ([49e2ae8](https://github.com/The-Asintota/pruebas/commit/49e2ae8de6facfa41d8852b1d9a426d555c6969a))

El sistema ahora utiliza UUIDv4 en lugar de enteros autoincrementables para mayor seguridad.
# ✨ Nuevas Funcionalidades

## Nuevo servicio GET api/v1/user/ ([a225798](https://github.com/The-Asintota/pruebas/commit/a225798cd09071c0e98968a3c208b907b0f49005))

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.


### 🚨 Cambios Importantes (Breaking Changes)

* La propiedad `userId` en las respuestas JSON ahora es un string (UUID) en lugar de un number. Debes actualizar tus interfaces de TypeScript.

## 1.0.0 (2026-10-07)

## Feat(users)!: nuevo servicio GET api/v1/user/ ([cb24a0e](https://github.com/The-Asintota/pruebas/commit/cb24a0ef1aaf1e4c6278870c5d6a9f97218df96b))

El sistema ahora utiliza UUIDv4 en lugar de enteros autoincrementables para mayor seguridad.
# ✨ Nuevas Funcionalidades

## Nuevo servicio GET api/v1/auth/ ([8befa27](https://github.com/The-Asintota/pruebas/commit/8befa2757e93a0a6ee45d30001976e7ef4e9f893))

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.
## Nuevo servicio GET api/v1/user/ ([bf3dd12](https://github.com/The-Asintota/pruebas/commit/bf3dd122ffd4bfb162725b83a32f670c74c9c612))

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.
## Nuevo servicio GET api/v1/user/ ([cab684c](https://github.com/The-Asintota/pruebas/commit/cab684c416661ddedcfad8936dcd880454bbdeba))

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.


### 🚨 Cambios Importantes (Breaking Changes)

* La propiedad `userId` en las respuestas JSON ahora es un string (UUID) en lugar de un number. Debes actualizar tus interfaces de TypeScript.

## 0.5.0 (2026-10-07)

# ✨ Nuevas Funcionalidades

## Nuevo servicio GET api/v1/user/

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.

---
## Nuevo servicio GET api/v1/user/

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.

---
## Nuevo servicio GET api/v1/user/

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.

---
## Nuevo servicio GET api/v1/user/

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.

## 0.4.0 (2026-10-07)

# ✨ Nuevas Funcionalidades

## Nuevo servicio `GET api/v1/user/`

Permite crear una cuenta de usuario con rol de cliente. Ejecuta validaciones sintácticas y comprobaciones de unicidad en la base de datos para prevenir duplicados.

### Requisitos de Acceso
- **Acceso Público:** Endpoint abierto. No requiere autenticación previa.

### Flujo de Ejecución
1. **Validación Sintáctica (DTO):**
    - Valida el formato de correo electrónico, longitud de contraseña, límites de texto y tipos de documento permitidos.
2. **Validaciones de Reglas de Negocio:**
    - **Unicidad de Correo:** Comprueba que el correo electrónico no esté registrado.
    - **Unicidad de Teléfono:** Comprueba que el número de teléfono no esté en uso.
    - **Unicidad de Documento:** Comprueba que el número de documento no esté registrado.
3. **Creación de Cuenta Base de Usuario:**
    - Asigna el rol de cliente (`customer`).
    - Encripta la contraseña mediante hashing seguro (bcrypt).
    - Asocia el grupo y los permisos correspondientes.
4. **Creación del Perfil de Cliente:**
    - Registra los datos personales y de identificación, vinculándolos mediante clave foránea (`user_id`) a la cuenta de usuario creada.
5. **Persistencia:**
    - Guarda el registro en la base de datos.

---

## 0.3.0 (2026-10-07)

## ✨ Nuevas Funcionalidades

### Auth
  - Nuevo servicio `POST api/v1/auth/logout/` ([19b127d](https://github.com/The-Asintota/pruebas/commits/main/19b127d5f838ed55d50fbfe34c392c0984eb29fd))

## 0.2.0 (2026-10-07)

### Auth
  - Nuevo servicio `POST api/v1/auth/` ([6c4e0de](https://github.com/The-Asintota/pruebas/commits/main/6c4e0de088d34d7798769bc27f0a9bf68d9187dd))
### Users
  - Nuevo servicio `DELETE api/v1/user/` ([02c455c](https://github.com/The-Asintota/pruebas/commits/main/02c455cada05644fcc91e7c7266bc6f4c8c3aabd))
  - Nuevo servicio `POST api/v1/user/` ([c39f547](https://github.com/The-Asintota/pruebas/commits/main/c39f5470cbded820a47569f589e4a6fc71d183f4))
  - Nuevo servicio PATCH api/v1/user/ ([9727339](https://github.com/The-Asintota/pruebas/commits/main/9727339420c2046c9a6301319cf8160a23c0494b))
