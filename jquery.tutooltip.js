/* Author: Jose Manuel Garrido Chacon
 *
 * web: http://doblede.xtrweb.com
 *
 */
(function($){
	$.fn.tutooltip = function(options){

		if(options === undefined) options = {};
		
		var defaults = { // Opciones por defecto
				position: 'top',
				fadeIn: 600,
				fadeOut: 300,
				color: '#FFF',
				bgColor: '#000',
				fontSize: '0.7em'
			},
			opt = $.extend(defaults, options),
			styleTT = { // Estilos contenedor tooltip
				'position': 'absolute',
	  			'display': 'none'
			},
			styleBody = { // Estilos body tooltip
				'backgroundColor': opt.bgColor,
				'color': opt.color,
				'position': 'relative',
				'float': 'left',
				'padding': '8px',
				'fontSize': opt.fontSize,
				'fontWeight': 'bold',
				'fontFamily': 'Arial, Helvetica, sans-serif',
				'borderRadius': '4px',
				'boxShadow': '1px 1px 3px rgba(0, 0, 0, 0.4)'
			},
			styleTriangle = { // Estilos triangulo tooltip
				'width': '0',
				'height': '0',
				'borderStyle': 'solid',
				'position': 'absolute',
				'zIndex': '1000',
				top: { // Triangulo abajo
					'left': '50%',
					'marginLeft': '-6px',
					'top': '100%',
					'borderWidth': '6px 6px 0 6px',
					'borderColor': opt.bgColor + ' transparent transparent transparent'
				},
				bottom: { // Triangulo arriba
					'left': '50%',
					'marginLeft': '-6px',
					'top': '-6px',
					'borderWidth': '0 6px 6px 6px',
					'borderColor': 'transparent transparent ' + opt.bgColor + ' transparent'
				},
				left: { // Triangulo derecha
					'left': '100%',
					'top': '50%',
					'marginTop': '-6px',
					'borderWidth': '6px 0 6px 6px',
					'borderColor': 'transparent transparent transparent ' + opt.bgColor
				},
				right: { // Triangulo izquierda
					'left': '-6px',
					'top': '50%',
					'marginTop': '-6px',
					'borderWidth': '6px 6px 6px 0',
					'borderColor': 'transparent ' + opt.bgColor + ' transparent transparent'
				}
			};

		// Crear el contenedor con el cuerpo y el triangulo
		var tt 		= $('<div>', {id: 'tooltip'}),
		    ttbody	= $('<div>', {id: 'tt-body'}),
		    tttri	= $('<div>', {id: 'tt-tri'});


		// Crear el tooltip si no existe ya
		if(!$('#tooltip').length){
			$('body').append(tt.css(styleTT));
		}

		return this.each(function(){
			var $x 		= $(this),
			    title 	= $x.attr('alt'),
			    $tt 	= $('#tooltip');

			// Mostrar el tooltip
			$x.on("mouseenter", function(){
				if(!$('#tt-body').length){ // Añadir el body la primera vez
					$tt.append(ttbody.css(styleBody));
				}
				$('#tt-body').html(title); // Añadir texto al cuerpo del tooltip
				$tt.css({left: calcPosition[opt.position]($x, $tt).left, top: calcPosition[opt.position]($x, $tt).top});
				$tt.stop(false, true).fadeIn(opt.fadeIn);
				$tt.append(ttbody.css(styleBody)); // Añadir el body al tooltip
				$tt.prepend(tttri.css($.extend(styleTriangle, styleTriangle[defaults.position]))); // Añadir el triangulo al tooltip
			});

			// Ocultar el tooltip
			$x.on("mouseleave", function(){
				$tt.stop(false, true).fadeOut(opt.fadeOut, function(){
					$('#tt-tri').remove(); // Borrar el triangulo del tooltip
					$('#tt-body').remove(); // Borrar el body del tooltip
				});
			});
		});
	};

	var calcPosition = {
		// Calcular la posicion left para lo tooltip 'top' y 'bottom'
		positionX: function(x, tt){
			var left			= x.offset().left,
				totalWidthTT	= tt.outerWidth(),
				totalWidthX		= x.outerWidth();

			return Math.round(left - ((totalWidthTT - totalWidthX) / 2));
		},
		// Calcular la posicion top para lo tooltip 'left' y 'right'
		positionY: function(x, tt){
			var top				= x.offset().top,
				totalHeightTT	= tt.outerHeight(),
				totalHeightX	= x.outerHeight();

			return Math.round(top - ((totalHeightTT - totalHeightX) / 2));
		},
		// Posicion del tooltip superior
		top: function(x, tt){
			var top				= x.offset().top,
				totalHeightTT	= tt.outerHeight();

			return { 
				left: this.positionX(x, tt),
				top: Math.round(top - totalHeightTT - 6)
			}
		},
		// Posicion del tooltip inferior
		bottom: function(x, tt){
			var top				= x.offset().top,
				totalHeightX	= x.outerHeight();

			return { 
				left: this.positionX(x, tt),
				top: Math.round(top + totalHeightX + 6)
			}
		},
		// Posicion del tooltip izquierda
		left: function(x, tt){
			var left			= x.offset().left,
				totalWidthTT	= tt.outerWidth();

			return { 
				left: Math.round(left - totalWidthTT - 6),
				top: this.positionY(x, tt)
			}
		},
		// Posicion del tooltip derecha
		right: function(x, tt){
			var left			= x.offset().left,
				totalWidthX		= x.outerWidth();

			return { 
				left: Math.round(left + totalWidthX + 6),
				top: this.positionY(x, tt)
			}
		}
	};
})(jQuery);