function getLastLoginString() {
    let rawDate = new Date();
    let year = String(rawDate.getFullYear());
    let time = rawDate.toTimeString();
    time = time.substring(0 , time.indexOf(" "));
    let date = rawDate.toString();
    date = date.substring(0 , date.indexOf(year));
    return date + time + " " + year;
}


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


    let decodedCookie = decodeURIComponent(document.cookie);
    let storedDate = decodedCookie.split(";")[0];
    storedDate = storedDate.substring(10);

    console.log(decodedCookie);
    console.log(storedDate);
    if(storedDate == "") {
        document.getElementsByClassName("last-login")[0].textContent = getLastLoginString();
    }
    else {
        document.getElementsByClassName("last-login")[0].textContent = storedDate;
    }

    let now = new Date();
    now.setFullYear(now.getFullYear() + 10);
    document.cookie = "lastLogin=" + escape(getLastLoginString()) + ";expires=" + now.toUTCString();

}, false);