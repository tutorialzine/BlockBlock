/**
 * @name		jQuery blockBlock plugin
 * @description A simple experiment in detecting adblockers with JavaScript.
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/how-to-block-adblock/
 * @license		MIT License
 */

(function($){
	
	if ($.adblock === undefined){
		$.adblock = true;
	}
	
	$.fn.showOnAdBlock = function(){
		
		if($.adblock){
			this.show();
		}
		
		return this;
	};
	
})(jQuery);
