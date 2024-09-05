{

    const Directives=node('Directives')
    
    function model(element, scope, attr){
        /*var parts
        if(attr.indexOf('.')>-1){
            parts=attr.split('.')
            attr=parts[0]
        }*/
        let lock = false
        function value(val){
            if(lock){
                return
            }
            if (element.type === "checkbox") {
                element.checked = val ? true : false
            } else {
                element.value = val ?? ""
            }
        }
        function change(event){
            lock = true
            //setTimeout(()=>{
            if (element.type === "checkbox") {
                scope[attr] = event.target.checked
            } else {
                scope[attr] = event.target.value
            }
            lock = false
        //},10)
            //return true
        }
        element.addEventListener("input",change,false)
        //element.addEventListener('keyup',change)
        //element.addEventListener('keyup',change,false)
        /*element.input((event)=>{
            lock = true
            if (element.type === "checkbox") {
                scope[attr] = element.checked
            } else {
                scope[attr] = event.target.value
            }
            lock = false
            //return true
        })*/
        //function callb(val){
            //val => {
                //if (lock) {
                //    return
                //}
                //value(val)
            //}
        //}
        /*if(parts.length){
            //const parts=attr.split('.')
            scope[parts[0]]?(scope[parts[0]].watch(parts[1],value)):null
            scope[parts[0]]?value(scope[parts[0]][parts[1]]):null
        }else{*/
            scope.watch(attr,value);
            value(scope[attr])
        //}
    }
    
    Directives["model"]=model
    

}

