/**
 * Function creates a <script> element and appends it to the head element.
 * @param {*} src 
 */
function appendScriptToHeadElement(src) {
    var head = document.getElementsByTagName('head')[0];
    if (head) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = src;
        head.appendChild(js);

        return js;
    } else {
        throw "No <head> element found.";
    }
}

/**
 * Function adds the callbackFunction to onload and onstagechange events.
 * @param {*} scriptElement 
 */
function addCallbackMethod (scriptElement, callbackFunction) {
    if (callbackFunction != null)    
    {
        scriptElement.onreadystagechange = callbackFunction;            
        scriptElement.onload = callbackFunction;
    }
}