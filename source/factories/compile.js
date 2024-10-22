{

    const Directives=node('Directives')

    function parse(scope, elem, source, callback){
        //let matches = [];
        //let match;
        let text = source;
        const reg = new RegExp("{{([a-zA-Z0-9\_\-]+)}}","gm")
        return text.replace(reg,match=>{
            const watch=match.substring(2,match["length"]-2)
            scope.watch( watch, (old,val) => {
                callback(text.replace(new RegExp(match,"gm"),val));
            });
            callback(text.replace(new RegExp(match,"gm"),scope[watch]));
            return scope[watch]
        })
        /*while ((match = reg["exec"](text)) !== null) {
            matches["push"](match);
        }
        const replace = () => {
            let newVal = text;
            matches.forEach((matched) => {
                const parts=matched.split('.')
                const val=scope[matched]//(parts.length?(scope[parts[0]]?(scope[parts[0]][parts[1]]):undefined):scope[matched])
                if (val !== undefined) {
                    newVal = newVal.replace("{{" + matched + "}}", val ?? "");
                }
            });
            if (newVal !== text) {
                callback(newVal);
            }
        };
        matches.forEach((matched) => {
            scope.watch(matched, val => {
                replace();
            });
        });
        replace();*/
    }
    
    node('parse',parse)

    //const parse=node('parse')
    
    function compile(element, scope){
        const directive = (elem) => {
            const attributes = elem.getAttributeNames ? elem.getAttributeNames() : [];
            attributes.forEach((attr) => {
                const attrValue = elem.getAttribute(attr);
                if (attr.indexOf("red-") > -1) {
                    elem.removeAttribute(attr);
                    elem._attr = attrValue;
                    const dir=Directives[attr["replace"]("red-", "")]
                    if(dir){
                        dir(elem, scope, attrValue);
                        //return false
                    }
                } else {
                    parse(scope,elem, attrValue, (txt) => {
                        elem.innerHTML = txt
                    });
                    //return true
                }
            })
        };
        function each(element){
            const el = element
            const elem = element
            if(el===undefined){
                return
            }
            /*if((!elem)||(typeof elem==="string")){
                return
            }*/
            if (elem.nodeName !== "#text") {
                directive(elem)
                //return
            }
            
            if (elem.childNodes.length === 1) {
                parse(scope,elem, elem.innerHTML, (txt) => {
                    elem.innerHTML = txt;
                });
            }
            elem.childNodes.forEach((node) => {
                each(node);
            });
        };
        each(element);


        /*for(const directive of directives){
            const elements=element.querySelectorAll("[red-"+directive.selector+"]")

            for(const element of elements){

                const attr=element.getAttribute("red-"+directive.selector)

                directive.callback(element,scope,attr)

            }
        */
        }


    
    
    node('compile',compile)
    //node('Directives',Directives)
    //node('parse',parse)
    



}