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
