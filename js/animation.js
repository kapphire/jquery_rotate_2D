var rotateForce = 120;

$(document).mousemove(function(e) {
    var docY = $(document).height(); 
    var rotateY = (e.pageX / docY * rotateForce / 2) - rotateForce;
    var rotateY1 = (e.pageX / docY * rotateForce / 2) + 180;
    
    $('.popup')
        .css('transform', 'rotateZ('+rotateY / 5+'deg)');
    $('.popup_hand')
        .css('transform', 'rotateZ('+rotateY1 / 6+'deg)');
});