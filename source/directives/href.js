{

    const Directives=node('Directives')
    const parse=node('parse')
    
    function href(element, scope, attr){
        element.scope=scope
        parse(element, element.href, (txt) => {
            element.href = txt;
        });
        element.setAttribute("href", attr)
        element.addEventListener("click",(event) => {
            event.preventDefault()
            event.stopPropagation()
            const hash=location.hash
            history.pushState(null, "", attr+hash)
            return false
        })
    }
    
    Directives["href"]=href
    

}

