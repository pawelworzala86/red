{

    var rootScope = {
        menu:[
            {url: '/', title: 'Home'},
            {url: '/hello', title: 'Hello'},
            {url: '/test', title: 'Test'},
            {url: '/article', title: 'Artykuł'},
        ]
    }


    var view = document.querySelector('html')

    node('compile')(view, rootScope)



    const router = node('router')

    router.register({
        url: '/',
        view: 'landing.pug',
        async callback(scope,urlParams){
            const data = await node('http').get('/api/landing')
            //console.log(data)
            scope.data = data
        }
    })

    router.register({
        url: '/article',
        view: 'article.pug',
        async callback(scope,urlParams){
            const data = await node('http').get('/api/article')
            //console.log(data)
            scope.data = data
        }
    })

    router.register({
        url: '/hello',
        view: 'hello.html',
        async callback(scope,urlParams){
            //var products = await node('http').get('/api/products')
            //scope.title = urlParams.kuku//';)'
            //console.log('callback')
        }
    })

    router.navigate(location.pathname)

}