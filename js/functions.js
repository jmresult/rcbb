//https://cdn.jsdelivr.net/gh/jmresult/zelpae/js/production/Redux/actions.js
if (is_current_page('MainPath')) {
    Mainpath("http://localhost:63342/rbc/Dev/Redux/actions.js", "")
    checkLoaded();
} else if (is_current_page('EPath')) {
    Eaccess("http://localhost:63342/rbc/Dev/Redux/actions.js", "")
    checkLoaded()
} else if (is_current_page('DPath')) {
    Infoaccess("http://localhost:63342/rbc/Dev/Redux/actions.js", "")
    checkLoaded()
}

function checkLoaded() {
    let html = document.querySelector('html')
    if (html.hasAttribute('style')) {
        let showed = html.hasAttribute('style') ? !html.getAttribute('style').includes('display') : true;
        let counter = 0;
        const delayed = setInterval(function () {
            if (showed) clearInterval(delayed)
            if (counter >= 5) {
                clearInterval(delayed);
                html.removeAttribute("style");
            }
            showed = html.hasAttribute('style') ? !html.getAttribute('style').includes('display') : true;
            counter++;
        }, 100)
    }
}
