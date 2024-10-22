{
    const router = {
        routes:[],
        async navigate(urlRoute){
            //console.log(url)
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

                    let html = await node('http').get('/views/'+route.view)

                    //node('activeScope',scope)

                    await route.callback(scope,res.groups)

                    //console.log(html)
                    var view = document.querySelector('view')
                    view.innerHTML = html

                    node('compile')(view, scope)

                    break;
                }
            }
        },
        register(route){
            this.routes.push(route)  
        }
    }

    node('router',router)

}