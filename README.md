### Participantes: 

| Nombre | Correo |
|-------------------|-------------|
| Cesar Hernan Garcia Afanador | ch.garciaa1@uniandes.edu.co |
| Cesar Alexander Rivera Ordoñez | c.riverao@uniandes.edu.co |
| Alvaro Andres Perez Avilan | aa.pereza1@uniandes.edu.co |
| Jorge Andres Cardona Ortiz | j.cardonao@uniandes.edu.co |

***
##  Escenarios de pruebas E2E de Ghost con Kraken y Playwright (Semana 5)
Para esta semana se desarrollaron pruebas de extremo a extremo con las herramientas playwright y Kraken para las funcionalidades de Post, Tags, Pages, Miembros y Configuracion. se desarrollaron 20 escenarios de pruebas.

#### Miembros: 
Esta funcionalidad permite la construcción de una audiencia o comunidad de usuarios, los cuales pueden acceder a la aplicación para interactuar con ella, además de registrar nuevo contenido (posts y páginas) y suscribirse a contenido publicado por otros.
#### Posts: 
Permite crear publicaciones dentro de la aplicación para cada una de las páginas, a partir de una imagen suministrada por el usuario, un título y la descripción detallada del mismo.
#### Tags: 
La aplicación permite crear, editar etiquetas públicas y privadas para asignar a las publicaciones realizadas, adicionalmente se pueden asociar imágenes, descripción y personalizar los colores de cada una.
#### Pages: 
Esta característica de la aplicación permite crear una nueva pagina, indicando su titulo, descripción e imagen asociada. Durante el proceso se puede ver una pre visualización ajustada a diferentes tamaños de pantalla (móvil y web) y su publicación puede ser inmediata o programarla para una fecha posterior.
#### Configuracion: 
Desde este menú se puede acceder a un conjunto de opciones de configuración de diseño del home page y los posts del sitio web, adicionalmente es posible realizar cambios en los menús de navegación, reorganizarlos de acuerdo a las preferencias del usuario y demás características generales como el título del sitio, la zona horaria, lenguaje entre otros.
***

#### Escenario 1: Crear miembro 
Iniciar sesión en ghost,  acceder al menú members, click en el botón new member, diligenciar los campos del formulario, click en save,  cerrar la sesión en ghost, ingresar nuevamente a la aplicación y verificar que el miembro este creado.

#### Escenario 2: Actualizar miembro existente
Iniciar sesión en ghost, acceder al menú members, click en un miembro existente, actualizar el correo, click en save, volver a la lista de miembros y verificar que el coreo se actualizo correctamente.

#### Escenario 3: Eliminar miembro existente
Iniciar sesión en ghost, acceder al menú members, click en un miembro existente, click en la opción de configuración, click en delete member, confirmar eliminacion y verificar que el miembro se elimino del sistema.

#### Escenario 4: Crear Tag
Iniciar sesión en ghost, acceder al menú tags, click en new tag,  diligenciar los campos del formulario, click en save, volver a la lista de tags y verificar que se creo exitosamente.

#### Escenario 5: Editar Tag
Iniciar sesión en ghost, acceder al menú tags, click sobre un tag existente, editar la descriocion, click en save, volver a la lista de tags y verificar se actualizo la desripcion.

#### Escenario 6: Eliminar Tag
Iniciar sesión en ghost, acceder al menú tags, click sobre un tag existente, click en delete tag, confirmar la eliminacion, y verificar que el tag se elimino correctamente.

#### Escenario 7: Crear new post
Iniciar sesión en ghost, acceder al menú posts, click en new post,  diligenciar los campos del formulario, click en publish, confirmar la publicación, click en el menu post y verificar que se creo exitosamente.

#### Escenario 8: Editar posts
Iniciar sesión en ghost, acceder al menú posts, click en un post,  click en icono post settings, click en Facebook card, llenar el titulo y la descripción, click en update, confirmar la publicación y click en la ventana emergente view posts para previsualizar la publication.

#### Escenario 9: Despublicar un post
Iniciar sesión en ghost, acceder al menú posts, click en un post, click en icono update, click en unpublished post, confirmar la despublicacion y verificar que se aparece como draft en color rojo.

#### Escenario 10: Eliminar un post
Iniciar sesión en ghost, acceder al menú posts, click en un post, click en icono post settings, click en delete post, confirmar la eliminación y verificar que se elimino correctamente.

#### Escenario 11: Modificar información de configuración
Iniciar sesión en ghost, acceder al menú settings, click en General, modificar el título y la descripción, modificar la zona horaria, cambiar el idioma.

#### Escenario 12: Cambiar enlaces a redes sociales
Iniciar sesión en ghost, acceder al menú settings, click en General, click en el botón Social accounts, modificar los enlaces, click en guardar, verificar en el sitio público los nuevos enlaces.

#### Escenario 13: Cambiar el sitio a visibilidad privada
Iniciar sesión en ghost, acceder al menú settings, click en General, click en Make this site private, acceder al sitio web con otro usuario, verificar que esté privado, volver nuevamente público el sitio, verificar con el otro usuario que sea público.

#### Escenario 14: Crear una página
Iniciar sesión en ghost, acceder al menú Pages, click en New page,  diligenciar los campos del formulario, click en publish, confirmar la creación, click en el menú Pages y verificar que se creo exitosamente.

#### Escenario 15: Programar publicación de página nueva
Iniciar sesión en ghost, acceder al menú Pages, click en New page,  diligenciar los campos del formulario, click en publish, click en programar para despues, confirmar la creación, click en el menú Pages y verificar que se creó y que esté programada su publicación.

#### Escenario 16: Crear una página como borrador
Iniciar sesión en ghost, acceder al menú Pages, click en New page,  diligenciar los campos del formulario, hacer click en volver a Pages,  verificar que existe la página creada con estado Draft.

#### Escenario 17: Asociar Post con un Tag
Iniciar sesión en ghost, acceder al menú Post, seleccionar una Post creado, click en Post settings, seleccionar una tag, click en el dropdown menu Update, click en Update, acceder con otro usuario al sitio público, buscar los post con la tag creada, verificar que el post este listado

#### Escenario 18: Desasociar un tag en Post
Iniciar sesión en ghost, acceder al menú Post, seleccionar una Post creado, click en Post settings, deseleccionar el tag, click en el dropdown menu Update, click en Update, acceder con otro usuario al sitio público, buscar los post con la tag creada, verificar que el post no este listado

#### Escenario 19: Modificar perfil de usuario autenticado
Iniciar sesión en Ghost, hacer click en botón de configuración de perfil, modificar nombre, guardar cambios, verificar en el dropup menu que aparezca el nuevo nombre.

#### Escenario 20: Cerrar sesión de miembro Staff
Iniciar sesión en Ghost, hacer click en botón de configuración de perfil, click en Sign out, verificar que no se puede acceder al dashboard

***
### Pruebas E2E con playwright:
#### 1. Clonar el proyecto, 2 instalar playwright en ruta local, 
```
git clone https://github.com/ingecar/E2E-GHOST.git
Clonando en 'E2E-GHOST'...
remote: Enumerating objects: 24, done.
remote: Counting objects: 100% (24/24), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 24 (delta 0), reused 0 (delta 0), pack-reused 0
Recibiendo objetos: 100% (24/24), 4.39 KiB | 4.39 MiB/s, listo.
```
#### 2 instalar playwright en ruta local con Typescript
```
cd E2E-GHOST 
npm init playwright@latest
Need to install the following packages:
  create-playwright@latest
Ok to proceed? (y) 
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
✔ Do you want to use TypeScript or JavaScript? · TypeScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (y/N) · false
```
#### 3 Actualizar dependencias
```
npx playwright install  
```
#### 3 Actualizar dependencias
```
npx playwright install  
```
#### 4 Ejecutar los tests
```
npx playwright test
```
#### 5 Ejecutar un tests especifico
```
npx playwright test tests/nombre_test.ts
```

***
### Pruebas E2E con Kraken:

#### 1. Clonar el proyecto

git clone https://github.com/criverao/E2E_Ghost_Kraken.git

#### 2 Instalar Kraken según el turorial

#### 3 Actualizar el archivo properties.json


Cambiar la propiedad USER por el usuario del GHOST local que se utilizará para las pruebas, debe ser un usuario administrador. 
Cambiar la propiedad PASSWORD por el password del usuario del GHOST local que se utilizará para las pruebas. 
Cambiar la propiedad RUTA por la ruta del GHOST loca que será usado para pruebas. 

#### 3 Ejecutar cada archivo feature

Se debe ejecutar cada archivo de forma independiente siguiendo el orden del numeral asociado al archivo para que las pruebas salgan de forma correcta.
