$(document).ready(run);


function run() {
    const FADE_SPEED = 250;
    const SHOW_TIME = 1500;

    $(".in-out-fade").hide(0).delay(1000).fadeToggle(FADE_SPEED);

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
                return;
        }
        counter++;

        $(".in-out-fade").fadeToggle(FADE_SPEED).fadeToggle(FADE_SPEED);
        window.setTimeout(function() {$(".in-out-fade").text(word);} , FADE_SPEED)

        setTimeout(fadeOutIn , SHOW_TIME);
    }
}