{

    const Directives=node('Directives')
    //const parse=node('parse')
    //const router=node('router')
    
    function href(element, scope, attr){
        const router=node('router')
        const parse=node('parse')

        element.scope=scope
        element.setAttribute("href", attr)
        //parse(scope, element, attr, (txt) => {
        //    element.setAttribute('href', txt)
            //element.href = txt;
        //});
        element.addEventListener("click",(event) => {
            event.preventDefault()
            event.stopPropagation()
            const hash=location.hash
            history.pushState(null, "", attr+hash)
            router.navigate(location.pathname)
            return false
        })
    }
    
    Directives["href"]=href
    

}