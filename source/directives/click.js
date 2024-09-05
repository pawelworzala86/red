{

    const Directives=node('Directives')
    
    function click(element, scope, attr){
        element.addEventListener("click",(event) => {
            return (function (attribute) {
                return eval(attribute)
            }.bind(scope))(attr)
        });
    }
    
    Directives["click"]=click
    

}

