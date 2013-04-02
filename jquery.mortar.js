/**
MORTAR.JS
https://github.com/Tom-Alexander/mortar-js/

copyright(c) 2013 Tom Alexander
Licensed under the MIT license.
**/

(function($){  
 $.fn.mortar = function(options, callback) {  
  var defaults = {  
   columns: 3,  
   rows: null,
   filter: 'mortar-all',
   duration: 500,
  }
     
  var options = $.extend(defaults, options);
          
  return this.each(function() {
    var $cont = $(this), matrix = [], k = 0, n = $cont.children().length;
      
    // Setup elements for absolute positioning
    $cont.css('position', 'relative')
    $cont.children().css('position', 'absolute').addClass('mortar-all').each(function(){
        if(!$(this).hasClass(options.filter)){
            $(this).fadeOut();
            n-- // reduce the number of elements
        }
        else $(this).fadeIn();
    }).promise().done(function(){
        // after we compute the number of elements we compute the matrix dimensions
        options.rows && options.columns ? options.rows = null : 
        options.rows ? options.columns = n/options.rows : options.rows = n/options.columns;
        
        // compile the matrix
        for(var j = 0; j < options.rows; j++){
            for(var i = 0; i < options.columns; i++){
               matrix.push({x: i, y: j})
            }
        }
        // animate the elements with the matrix result
        $cont.children().each(function(){
            if(!$(this).is(':hidden')){
                $(this).animate({'left': $(this).outerWidth(true) * matrix[k].x, 'top': $(this).outerHeight(true) * matrix[k].y}, options.duration);
                k++
            }
        })
        
        // fire the callback if its defined
        typeof callback == "function" ? callback.call() : false
            
    }) // end of return this.each
  }) 
 }  
})(jQuery)
