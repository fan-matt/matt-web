$(document).ready(run);


function run() {
    $(".in-out-fade").hide(0).delay(1000).fadeToggle(500);

    let counter = 0;

    setTimeout(fadeOutIn , 2000);

    function fadeOutIn() {
        let word;  

        switch(counter) {
            case 0: 
                word = "Developer";
                break;
            
            case 1:
                word = "Dog Lover";
                break;

            default:
                return;
        }
        counter++;

        $(".in-out-fade").fadeToggle(500);
        $(".in-out-fade").fadeToggle(500);
        window.setTimeout(function() {$(".in-out-fade").text(word);} , 500)

        setTimeout(fadeOutIn , 2000);
    }
}