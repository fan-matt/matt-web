"use strict";

const FADE_HEIGHT = 100;

function scroll(){
    $(window).scroll(function() {
        $(".fade-in").each(function() {
            if(($(window).scrollTop() + $(window).height() - $(this).offset().top) >= FADE_HEIGHT) {
                $(this).animate({'opacity':'1'},500);
            }
        })
    });
};

export {scroll};