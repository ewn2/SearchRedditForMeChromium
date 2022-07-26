setTimeout(function() {
    let input = document.getElementsByName('searchBox')[0];
    if(input.value.indexOf(' ') === -1){
        input.value += ' ';
    }
    input.setSelectionRange(input.value.indexOf(' ') + 1, input.value.length);
    input.focus();
}, 50);