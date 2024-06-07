function dark_mode (myself) {
    var dark_style = document.querySelector('body').style;
    if(myself.checked) {
        dark_style.backgroundColor = 'black';
        dark_style.color = 'white';
    }
    else {
        dark_style.backgroundColor = 'white';
        dark_style.color = 'black';
    }
}