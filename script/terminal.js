document.addEventListener('DOMContentLoaded', function() {
    let cursorVisible = true;

    setInterval(function() {
        let cursor = document.getElementsByClassName("cursor")[0];

        if(cursorVisible) {
            cursor.style.display = "none";
        }
        else {
            cursor.style.display = "inline-block";
        }

        cursorVisible = !cursorVisible;
    } , 750);

}, false);