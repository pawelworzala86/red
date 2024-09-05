{

    const Directives=node('Directives')
    
    function clas(element, scope, attr){
        const change = () => {
            let add = []
            let del = []
    
            const obj = (function (attribute) {
                return eval("(()=>{return " + attribute + "})()")
            }.bind(scope))(attr)
    
            Object.keys(obj).forEach(key => {
                if (obj[key]) {
                    add.push(key)
                } else {
                    del.push(key)
                }
            })
            add.forEach(clas => {
                element.classList.add(clas)
            })
            del.forEach(clas => {
                element.classList.remove(clas)
            })
        }
        change()
    
        const obj = (function (attribute) {
            return eval("(()=>{return " + attribute + "})()")
        }.bind(scope))(attr)
    
        const regex = new RegExp("this.([a-zA-Z0-9]+)");
        let matches = regex.exec(attr)
        if (matches) {
            scope.watch(matches[1], val => {
                change(val)
            })
        }
    }
    
    Directives["class"]=clas
    

}

