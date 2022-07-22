Cifrado César

1. Descripción: 
Crear una aplicación web para cifrar y descifrar contraseñas. La propuesta es que el usuario pueda proteger sus contraseñas cuando necesite compartirlas.

2. Usuario:
Dirigido a personas que deben compartir sus contraseñas de manera segura. Las contraseñas no solo son de uso personal, existen cada vez más casos donde debemos enviar y compartir todo tipo de contraseñas, por ejemplo:

- En proyectos colaborativos 
- Servicios compartidos (Internet, netflix, spotify, etc)
- Cuando se necesita acceder a través de terceros (Contador -Muisca Dian)
- En el caso de un correo compartido, etc.

Así que existe una necesidad de proteger ésta información y compartirla de manera cifrada, para ser descifrada cuando se requiere, sería un sistema fácil y práctico de protección.

3. Proceso de maqueta:
Pensando en el estilo que debe tener la página, se realiza una búsqueda en internet de los posibles referentes a tomar para el proyecto. Finalmente, se escoge un modelo a seguir en cuanto a color, estilo, fuentes, etc.

* Modelo a seguir
https://1password.com/es/

* Realización de maqueta (Se realiza en canva)
- Se toma los colores y estilos de la referencia, ya que el azul simboliza seguridad y   confianza, que es justamente lo que queremos transmitir. 
- Se propone una distribución para el cifrado y descifrado en dos columnas
- Se opta por una sola página, para que sea más ágil para el usuario
- Se da la opción de nombre y contraseña, a futuro la idea es guardar las contraseñas cifradas y que el usuario las pueda consultar.

*Maqueta realizada
https://www.canva.com/design/DAFGThO6-yw/MjRmmF1YdII7s6AH6x8LUA/view?utm_content=DAFGThO6-yw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton


4. Descarga e instalación de archivos
- Se realiza la descarga siguiendo el paso a paso del Readme del proyecto.
- Investigación y aplicación de Git y Github para el proyeto
- No se logra la llave SSH, se trabaja desde el clone HTTPS

5. Desarrollo

* Seudo Código Cifrado Cesar
- Investigación sobre cifado cesar y ejemplos del mismo. 
- Con la información se realiza una función provisional en javascript para el cifrado de texto

* Seudo Código Descifrado
- Investigación y ayudantías para el desarrollo de la función que descifra el texto ya cifrado

* Implementación de HTML
- Incorporación de estructura en HTML
- Uso de HTML semático
- Input (name, password, texto a cifrar, texto cifrado)
- Botones (enviar, cifrar y descifrar)

* Implementación de estilo en CSS
- Investigación de CSS 
- Aplicación de estilos y propiedades para emular la maqueta diseñada
- Aprendizaje y aplicación de flex box y propiedades para dar orden a los elementos

* Funcionalidad
- Se toma las funciones para guardar localmente el nombre y la contraseña, se muestra un saludo. A futuro esa información se usaríara para guardar las contraseñas cifradas por el usuario.
- Se toman el pseudo código de cifrado y descifrado y se introduce en Cipher.js
- Enlace de los inpunt (string y offset) y botón "Cifrar", con la función de cifrado.
- Se muestra resultado de la función cifrar en input de texto cifrado.
- Enlace de los inpunt (string y offset) y botón "Descifrar", con la función de Descifrado.
- Se muestra resultado de la función descifrar en input de texto descrifrado.

* Test
- Una vez lograda la funcionalidad se corren los test del boilerplate (Pasan 5 de 7 test).
- Se desarrolla un condicional para pasar el test de validación
- Una vez pasados los test, se procede a construir el readme

* Readme
- Por último, la descripción del proyecto y los pasos seguidos en el mismo

* Publicación 
- Se actualizan los cambios en Github y se procede a publicar en Github pages

