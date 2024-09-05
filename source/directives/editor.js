{

    const Directives=node('Directives')
    
    function colorizeText(code){



      const definitions=[
          [/(\s?)(const|var|let)(\s)/gm,"$1<define>$2</define>$3"],
          [/('|"|`)(.*)('|"|`)/gm,"<texts>$1$2$3</texts>"],
          [/(new\s)([a-zA-Z0-9\_]+)/gm,"$1<class>$2</class>"],
          [/(\.)([a-zA-Z\_0-9]+)/gm,"$1<params>$2</params>"],
          [/(engine|app)/gm,"<classes>$1</classes>"],
          [/(\/\*)([\.|\n\s\S]+)(\*\/)/gm,"<gray>$1$2$3</gray>"],
          [/([0-9]+)/gm,"<number>$1</number>"],
          [/(node)/gm,"<blue>$1</blue>"],
      ]
  
  
  
      for(const define of definitions){
        code = code.replace(define[0],define[1])
      }
  
      const nodes=Object.keys(node)
      console.log(nodes)
      for(const nd of nodes){
        code = code.replace(new RegExp(nd,"gm"),"<node>"+nd+"</node>")
      }
  
  
      return code
  
  
  }
    
    
    function editor(element, scope, attr){
    
        //const editor=element.parentnode
    
        element["innerHTML"]="<div class=\"backtop\"></div><textarea spellcheck=\"false\"></textarea>"
        element.classList["add"]("editor")
        element.classList["add"]("highlight")
    
        const editor=element//.children[0]
        //element.parentElement.replace(editor)
        //element.remove()
        //new Highlights(element,scope)
    
    
        const area=editor.querySelector("textarea")
        const backtop=editor.querySelector("."+"backtop")
    
          //bindEvents();
          //handleInput();
    
            function handleInput(insert) {
                if(insert){
                    scope[attr]=area.value
                }
                backtop.innerHTML=colorizeText(area.value??'');
            }
    
            function handleScroll() {
                const scrollTop = area.scrollTop;
              const scrollLeft = area.scrollLeft;
    
              backtop.style="top:-"+scrollTop+"px !important;left:-"+scrollLeft+"px !important;";
            }
    
            //function bindEvents() {
              //area["change"]=handleInput
    
              area.addEventListener("input",handleInput)
              area.addEventListener("scroll",handleScroll)
    
             editor.addEventListener("mousemove",(event)=>{
                event.stopPropagation()
              },true)
    
              area.value=scope[attr]

              handleInput(false)
            //}
    
            scope.watch(attr,(old,val)=>{
                area.value=val
                handleInput(false)
            })
    
            
    }
    
    Directives["editor"]=editor
    

}

