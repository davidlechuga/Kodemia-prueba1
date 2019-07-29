$(document).ready(function(){
            /* ABRIO LISTA  CLASS= "TOGGLE " */
    $('.menu').click(function(){
        $('.secciones').toggleClass('active');
    });

             /*ABRIO LISTA  CLASS= "TOGGLE "  */

    $('.menu').click(function(){
        $('.secciones .active').toggleClass('secciones');
    });    
    
});



/*      COLLAPSABLE 1     */

var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem, {
  accordion: false
});
      
