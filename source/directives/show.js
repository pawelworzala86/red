{

    const Directives=node('Directives')
    
    function show(element, scope, attr){
        const change = (val) => {
            let rif = (function (attribute) {
                return eval(attribute) ? true : false;
            }.bind(scope))(attr);
            console.log('rif...', rif)
            if (rif) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
                //element.remove()
            }
        };
        const regex = new RegExp("this.([a-zA-Z0-9]+)");
        let matches = regex.exec(attr);
        scope.watch(matches[1], val => {
            change(val);
        });
        change();
    }
    
    Directives["show"]=show
    

}

