{
    const router = {
        routes:[],
        async navigate(urlRoute){
            const parsePug = node('parsePug')
            //console.log(url)
            let routed = false
            for(const route of this.routes){
                let url = route.url

                url = '^'+url+'$'
                url = url.replace(/\//gm,'\\/')
                url = url.replace(/\:([a-zA-Z0-9\_\-]+)/gm,'(?<$1>[a-zA-Z0-9\\_\\-]+)')

                const regex = new RegExp(url,'gm')
                const res = regex.exec(urlRoute)
                console.log('reg',res)
                if(res){
                    console.log('routed')

                    let scope = {}

                    let html= await node('http').get('/views/'+route.view)
                    if(route.view.indexOf('.pug')>-1){
                        html = parsePug(html)
                    }

                    //node('activeScope',scope)
                    /*let FACTORY = node('FACTORY')
                    FACTORY.scope = ()=>scope
                    FACTORY.urlParams = ()=>res.groups
                    await node('DI')(FACTORY,route.callback)*/
                    await route.callback(scope,res.groups)

                    //console.log(html)
                    var view = document.querySelector('view')
                    view.innerHTML = html

                    node('compile')(view, scope)

                    routed = true

                    break;
                }
            }
            if(!routed){
                let scope = {}
                let html = await node('http').get('/views/404.html')
                var view = document.querySelector('view')
                view.innerHTML = html
                node('compile')(view, scope)
            }
        },
        register(route){
            this.routes.push(route)  
        }
    }

    node('router',router)

}