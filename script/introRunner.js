"use strict";

function run() {
    const FADE_SPEED = 250;
    const SHOW_TIME = 1000;

    $(".in-out-fade").hide(0).delay(1000).fadeToggle(FADE_SPEED);
    $(".scroll-text").hide(0);

    let counter = 0;

    setTimeout(fadeOutIn , SHOW_TIME + 2 * FADE_SPEED);

    function fadeOutIn() {
        let word;  

        switch(counter) {
            case 0: 
                word = "Developer";
                break;
            
            case 1:
                word = "Dog Lover";
                break;

            case 2:
                word = "Problem Solver";
                break;

            default:
                $(".scroll-text").fadeToggle(FADE_SPEED);
                return;
        }
        counter++;

        $(".in-out-fade").fadeToggle(FADE_SPEED).fadeToggle(FADE_SPEED);
        window.setTimeout(function() {$(".in-out-fade").text(word);} , FADE_SPEED)

        setTimeout(fadeOutIn , SHOW_TIME);
    }
}

export {run};