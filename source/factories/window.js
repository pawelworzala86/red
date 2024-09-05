{

    const http=node('http')
    const compile=node('compile')
    const StartAnims=node('animate')
    
    function Window(scope,templateUrl){
            const wnd=document.createElement("div")
            wnd.classList.add("window","animated","zoom")
    
            
            function setLeftTop(left,top){
                wnd.top=top
                wnd.left=left
                wnd.style="top:"+top+"px;left:"+left+"px;"
            }
    
            http.get(templateUrl).then(template=>{
                wnd.innerHTML=template
                document.body.append(wnd)
                compile(wnd,scope)
                {
                    const left=(wnd.top??0)+(window.innerWidth-wnd.clientWidth)/2
                    const top=(wnd.left??0)+(window.innerHeight-wnd.clientHeight)/2
                    setLeftTop(left,top)
                }
                StartAnims()
            })
            scope.close=function(){
                wnd.remove()
            }
            let drag=false
            wnd.addEventListener("mousedown",(event)=>{
                //event.preventDefault()
                //event.stopPropagation()
                drag=true
            },false)
            wnd.addEventListener("mouseleave",(event)=>{
                //event.preventDefault()
                //event.stopPropagation()
                drag=false
            },false)
            wnd.addEventListener("mouseup",(event)=>{
                //event.preventDefault()
                //event.stopPropagation()
                drag=false
            },false)
            wnd.addEventListener("mousemove",(event)=>{
                //for(const path of event.path){
                    //if(path.classList&&!path.classList.contains('window')){
                     // path.onmousedown?path.onmousedown(event):null
                    //}
                    //if(path.classList&&path.classList.contains('textarea')){
                      //path.onmousedown?path.onmousmove(event):null
                     // return true
                   // }
                 // }/
                  //return true
                //event.preventDefault()
                //event.stopPropagation()
                if(drag){
                    const top=(wnd.top??0)+event.movementY
                    const left=(wnd.left??0)+event.movementX
                    setLeftTop(left,top)
                }
            },false)
            this.element=wnd
            
        }
    
    node('Window',Window)

}

