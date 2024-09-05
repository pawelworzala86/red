{

    const Directives=node('Directives')
    
    function change(element, scope, attr){
        element.addEventListener("change",(event) => {
            return (function (attribute) {
                return eval(attribute);
            }.bind(scope))(attr);
        })
    }
    
    Directives["change"]=change
    

}

