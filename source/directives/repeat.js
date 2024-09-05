{

    //repeat

    const Directives=node('Directives')
    
    
    function repeat(element, scope, attr){

        const compile=node('compile')
        const parse=node('parse')

        if(element.html){
            return
        }

        //const parts = attr.split(" in ");
        element.html=element.html ?? element["outerHTML"]
        let parent = element["parentElement"];

        function fill(row){
            let elem = document.createElement("div");

            elem["innerHTML"]= element.html;

            elem["innerHTML"]= parse(row,elem, element.html, (txt) => {
                elem["innerHTML"]= txt;//element.html;
            });
            //elem = elem["children"][0];
            //elem.setAttribute('uuid',row.id)
            //console.log(element.html);
            //elem.scope=row
            //row.parent=scope
            //elem.innerHTML = element.html;
    
            //elem.scope=row
            parent.append(elem);
            compile(elem, row);
            /*if (element.tagName === "OPTION") {
                if (elem.value === scope[element.parentElement._attr]) {
                    elem.setAttribute("selected", "selected");
                }
            }*/
    
        };
        //parent.innerHTML = ""
        if (scope[attr]) {
            scope[attr].map(v=>{ fill(v) })
        }
        scope.watch(attr, (old,val) => {
            //parent.innerHTML = ""
            val.map(v=>{ fill(v) })
        })
        element.remove();

        return false
    }
    
    Directives["repeat"]=repeat
    

}

