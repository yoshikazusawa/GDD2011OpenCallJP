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
    var regions = $s.find('path[fill=#77a2d9]').filter(isNotEnteredLogo);
    var colors = ['#871c40', '#2d5434', '#62162e'];
    regions.each(function(i, e) {
        $(this).attr({ fill: colors[i % 3] });
    });

    var locations = $s.find('path[fill=#ffffff]').filter(isNotEnteredLogo);

    locations
    .mouseover(function() {
        $(this).attr({ fill: '#000' });
    })
    .mouseout(function() {
        $(this).attr({ fill: '#fff' });
    })
}

})();
