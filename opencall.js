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

    locations.not(':nth-child(7)')
    .mouseover(function() {
        $(this).attr({ fill: '#f8e58c', 'stroke': '#f8e58c' });
    })
    .mouseout(function() {
        $(this).attr({ fill: '#ffffff', 'stroke': '#ffffff' });
    });
    locations.filter(':nth-child(7)').attr({ fill: '#bce2e8', 'stroke': '#84a2d4' });
}

})();
