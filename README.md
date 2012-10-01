================================ tuTooltip ================================

version: 1.0
Author: Jose Manuel Garrido Chacon
web: http://doblede.xtrweb.com
mail: logansf [at] gmail [dot] com
Twitter: @logansf

software: jQuery 1.7+
supported browsers: Chrome, Firefox, Opera, Safari, IE6+

NOTA: este plugin ha sido desarrollado con jQuery 1.7, no deberia fallar
en versiones anteriores, pero por seguridad recomiendo utilizar dicha
version o una mas reciente.

Espero que el plugin te sea de utilidad y si tienes alguna propuesta de
mejora o algun bug que has encontrado, te agradeceria que te pusieras en 
contacto conmigo para intentar repararlo en proximas versiones.

===========================================================================

INSTRUCCIONES

El uso de este plugin no dista demasiado del uso del resto. Para empezar coloca el archivo jquery.tutooltip.js
donde lo prefieras, para este documento supondremos que esta en un directorio 'js' junto al resto de scripts
de Javascript, como suele ser habitual.

Vamos a nuestro codigo HTML y colocamos el siguiente codigo despues el enlace a la libreria de jQuery:

	<script src="js/jquery.tutooltip.js"></script>

Ya podemos usar el plugin. Para ello lo hacemos de la siguiente forma:

	$(elemento).tutooltip([opciones]);

Donde elemento sera cualquier selecctor que nos devuelta el/los elemento/s sobre el que queremos que aparezca el
tooltip. Y opciones es un mapa con las opciones de configuracion. Estas son las siguientes:

- position: la posición del tooltip, que puede ser 'top', 'bottom', 'left' y 'right'. Por defecto es 'top'.
- fadeIn: el tiempo que tarda en aparecer (en milisegundos). Por defecto 600.
- fadeOut: el tiempo que tarda en desaparecer (en milisegundos). Por defecto 300.
- color: el color del texto, que puede ser en rgb, rgba, hexadecimal o los predefinidos (red, white, black, etc.). Por defecto #FFF (blanco).
- bgColor: color de fondo del tooltip. Al igual que antes, acepta rgb, rgba, hexadecimal y los predefinidos. Por defecto #000 (negro).
- fontSize: tamaño de letra, que puede ser en em, px o porcentaje. Por defecto 0.7em.

El texto que aparecera en los tooltips sera el que contenga en el atributo 'alt' del elemento indicado. En el 
siguiente codigo de ejemplo obtendriamos tooltips con fondo azul a la derecha de todos los enlaces del documento
y que aparezcan y desaparezcan sin ningun tipo de animacion:

	$('a').tutooltip({
		position: 'right',
		bgColor: '#00F',
		fadeIn: 0,
		fadeOut: 0
	});