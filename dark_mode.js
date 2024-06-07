function dark_mode (myself) {
    var dark_style = document.querySelector('body').style;
    if(myself.checked) {
        setBackgroundColor('black');
        setColor('black');
    }
    else {
        setBackgroundColor('white');
        setColor('black');
    }
}
var Body_dark_mode = {
    setBackgroundColor : function (color) {
        $('body').css('backgroundColor',color);
    },
    setColor : function (color) {
        $('body').css('color',color);
    }
}