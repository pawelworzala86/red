{

    const Directives=node('Directives')
    
    function scope(element, scope, attr){
        //element.scope=scope
        compile(element,scope[attr])
    }
    
    Directives["scope"]=scope
    

}

