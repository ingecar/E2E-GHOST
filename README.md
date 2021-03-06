### Participantes: 

| Nombre | Correo |
|-------------------|-------------|
| Cesar Hernan Garcia Afanador | ch.garciaa1@uniandes.edu.co |
| Cesar Alexander Rivera Ordoñez | c.riverao@uniandes.edu.co |
| Alvaro Andres Perez Avilan | aa.pereza1@uniandes.edu.co |
| Jorge Andres Cardona Ortiz | j.cardonao@uniandes.edu.co |

### Estrategia de pruebas (Entrega semana 8): 

[Semana8.zip](https://github.com/ingecar/E2E-GHOST/files/8795412/Semana8.zip)



***
##  Escenarios de pruebas E2E de Ghost con Kraken y Playwright
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
Iniciar sesión en ghost, acceder al menú settings, click en General, modificar el título y la descripción, modificar la zona horaria, guardar cambios, cerrar la sesión.

#### Escenario 12: Cambiar enlaces a redes sociales
Iniciar sesión en ghost, acceder al menú settings, click en General, click en el botón Social accounts, modificar los enlaces, guardar cambios, cerrar la sesión.

#### Escenario 13: Cambiar el sitio a visibilidad privada
Iniciar sesión en ghost, acceder al menú settings, click en General, click en Make this site private, guardar cambios, cerrar sesión, acceder al sitio web público, verificar que esté privado, realizar los pasos anteriores para volver nuevamente público el sitio, verificar nuevamente que el sitio sea público.

#### Escenario 14: Crear una página
Iniciar sesión en ghost, acceder al menú Pages, click en New page,  diligenciar los campos del formulario, click en publish, confirmar la creación, click en el menú Pages y cerrar la sesión de usuario.

#### Escenario 15: Programar publicación de página nueva
Iniciar sesión en ghost, acceder al menú Pages, click en New page,  diligenciar los campos del formulario, click en publish, click en programar para despues, confirmar la creación, click en el menú Pages y cerrar la sesión de usuario.

#### Escenario 16: Crear una página como borrador
Iniciar sesión en ghost, acceder al menú Pages, click en New page,  diligenciar los campos del formulario, hacer click en volver a Pages, verificar que existe la página creada con estado Draft, cerrar sesión de usuario.

#### Escenario 17: Asociar Post con un Tag
Iniciar sesión en ghost, acceder al menú Post, seleccionar una Post creado, click en Post settings, seleccionar una tag, click en el dropdown menu Update, click en Update, cerrar la sesión del usuario.

#### Escenario 18: Desasociar un tag en Post
Iniciar sesión en ghost, acceder al menú Post, seleccionar una Post creado, click en Post settings, deseleccionar el tag, click en el dropdown menu Update, click en Update, cerrar la sesión del usuario.

#### Escenario 19: Modificar perfil de usuario autenticado
Iniciar sesión en Ghost, hacer click en botón de configuración de perfil, modificar nombre, guardar cambios, cerrar la sesión.

#### Escenario 20: Cerrar sesión de miembro Staff
Iniciar sesión en Ghost, hacer click en botón de configuración de perfil, click en Sign out.

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
#### 2. instalar playwright en ruta local con Typescript
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
#### 3. Instalar ResembleJS
```
npm install resemblejs
```
#### 4. Actualizar dependencias
```
npx playwright install  
```
#### 5. Ejecutar los tests
```
npx playwright test
```
NOTA: 
* Tener en cuenta que las versiones utilizadas fueron: Ghost v3.42 y Ghost v4.46.
* Los archivos de pruebas diseñados para la Versión 3.42 de Ghost, se identifican con el sufijo `V3.42.spec.ts`, por ejemplo: `4_5_6_Test_TagsV3.42.spec.ts`. Los demás son diseñados para la versión 4.46.
* Para la correcta ejecución de los Test y por facilidad, las dos versiones deben tener el mismo usuario y contraseña de administrador. Estas credenciales se pueden cambiar desde el archivo `environment.ts`. Desde este archivo, también se puede cambiar la Url de cada versión, en caso de que sea necesario cambiarlas.
* A medida que se van ejecutando los test, podrá ver que se van generando los screenshots en carpetas independientes para cada versión `screenshots_v342` y `screenshots_v446` (estas rutas se pueden visualizar en el archivo `environment.ts`).

#### 6. Ejecutar un tests especifico
```
npx playwright test tests/nombre_test.ts
```
#### 7. Generación de Reporte VRT

Cuando se hayan ejecutado todas las pruebas relacionadas (de las dos versiones) y se hayan generado todas las imágenes en cada carpeta se puede proceder procede con la generación  del reporte de la prueba de regresión visual. Para la estrategia de toma de screenshots se definio que al ejecutar las pruebas, se generara una captura en cada paso dentro de la funcionalidad cuando esta presente cambios importantes en la interfaz de usuario y/o transiciones entre ventanas.

1. Ejecute el comando `node index.js`, el cual generará la comparación de los screenshots generados durante la ejecución de los test. También generará un reporte de dicha comparación utilizando la librería ResembleJs.
2. Abra en un navegador, el archivo generado `report.html` ubicado en la carpeta `/results/`.

***
### Pruebas E2E con Kraken:

**Versión de Referencia**: Ghost 4.41.3
**Versión de prueba**: Ghost 3.42

#### 1. Clonar el proyecto

git clone https://github.com/criverao/E2E_Ghost_Kraken.git

#### 2. Instalar Kraken según el turorial

Para instalar Kraken siga las intrucciones de la página oficial de la herramienta:

https://thesoftwaredesignlab.github.io/Kraken/#installation

#### 3. Instalar ResembleJs

Ejecutar `npm install resemblejs` para instalar la librería que más adelante nos permitirá generar un reporte para realizar las pruebas de regresión visual.

#### 4. Actualizar el archivo properties.json

Configure el archivo properties.json con las variables de su instalación y las credencciales de acceso a Ghost:
- Cambiar la propiedad `USER` por el usuario del `GHOST` local que se utilizará para las pruebas, debe ser un usuario administrador. 
- Cambiar la propiedad `PASSWORD` por el password del usuario del `GHOST` local que se utilizará para las pruebas. 
- Cambiar la propiedad `RUTA` por la ruta del `GHOST` loca que será usado para pruebas. 
- Cambiar la propiedad `appVersion` para indicar la versión de Ghost bajo pruebas. Se debe tener en cuenta que las pruebas únicamente son compatibles con las versiones de Ghost enunciadas anteriormente.

#### 5. Ejecutar cada archivo feature

Los escenarios de prueba se encuentran en el directorio principal. Para correr una prueba debe mover el archivo correspondiente a la carpeta features. Tenga en cuenta que solo debe existir un archivo .feature en esta ruta.

Se debe ejecutar cada archivo de forma independiente siguiendo el orden del numeral asociado al archivo para que las pruebas corran de forma correcta.

Para correr la prueba, ejecute el comando `./node_modules/kraken-node/bin/kraken-node run` en la ruta principal del proyecto.

La ejecución de cada paso en un escenario, generará una imagen de la captura de pantalla, la cual quedará almacenada en la ruta `/screenshots/{appVersion}/{featureFileName}` y con el nombre de la imagen correspondiente con el paso de la ejecución. Tenga en cuenta la importancia de variable de configuración `appVersion` para definir la ruta de los _screenshots_ y donde `featureFileName` corresponde al nombre del archivo .feature bajo ejecución.

#### 6. Generación de Reporte VRT

Una vez se hayan ejecutado una prueba en las dos versiones de la aplicación, podemos generar el reporte de la prueba de regresión visual de la siguiente manera:

1. En el archivo `config.json` ubicado en el directorio _root_ del proyecto, modifique las variables `folder1`, `folder2` y `resultsFolder`, de acuerdo con las siguiente descripciones:
    - **folder1**: directorio donde se encuentran las capturas de pantalla de la versión de referencia de la aplicación (para nuestro caso la versión v4.41.3)
    - **folder2**: directorio donde se encuentran las captura de pantalla de la versión bajo prueba de la aplicación (para nuestro caso la version v3.42)
    - **resultsFolder**: directorio donde se generará el reporte HTML.

2. Ejecute el comando `node index.js`, el cual generará el reporte con la comparación de las imágenes utilizando la ResembleJs.
3. Abra en un navegador, el archivo `report.html` ubicado en la ruta que configuró en `resultsFolder`.


#### 7. Generacion de datos aleatorios.
En el repositorio que se relaciona a continuación se encuentran todos los arhivos de pruebas e2e que permiten generación y validación de datos utilizando faker y mockaroo:  https://github.com/ingecar/DATA_TEST_GHOST
