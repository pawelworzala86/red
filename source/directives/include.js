{

    const Directives=node('Directives')
    const http=node('http')
    const compile=node('compile')
    
    function include(element, scope, attr){
    
        http.get(attr).then(template=>{
            element.innerHTML=template
            compile(element,scope)
        })
    
    
    }
    
    Directives["include"]=include
    

}

