(function(){ 

$(function() { 
    $('#svgObject')[0].addEventListener('load', function() {
        onSvgLoad($(this.contentDocument));
    });
});

function isNotEnteredLogo() {
    var points = $(this).attr('d').split(/[CMZ\s]/)
                .filter(function(item) { return (/\w/.test(item)); })
                .map(function(item)    { return $.trim(item); });
    for (var i = 0, l = points.length; i < l; i += 2)
        if (points[i] > 1000 && points[i+1] > 550) return false;
    return true;
}

function onSvgLoad($s) {
    $s.find('g:nth-child(3)').bind('click', function() {
        console.log(this);
    });
    var targets = $s.find('path[fill=#77a2d9]').filter(isNotEnteredLogo);
    /*
    targets
    .mouseover(function() {
        $(this).attr({ fill: '#333300'});
    })
    .mouseout(function() {
        $(this).attr({ fill: '#77a2d9'});
    });
    */

    var colors = ['#871c40', '#2d5434', '#62162e'];
    targets.each(function(i, e) {
        $(this).attr({ fill: colors[i % 3] });
    });


    var locations = $s.find('g:nth-child(1) path[fill=#ffffff]').filter(isNotEnteredLogo);
    
    locations.each(function(i) {
        $(this).attr({ stroke: '#000', 'stroke-width': '3pt' });
    });

    locations
    .click(function() {
        console.log(this);
    })
    .mouseover(function() {
        $(this).attr({ fill: '#000' });
    })
    .mouseout(function() {
        $(this).attr({ fill: '#fff' });
    })
}

})();
