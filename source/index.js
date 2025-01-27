{

    var rootScope = {
        menu:[
            {url: '/', title: 'Home'},
            {url: '/hello', title: 'Hello'},
            {url: '/test', title: 'Test'},
        ]
    }


    var view = document.querySelector('header')

    node('compile')(view, rootScope)



    const router = node('router')

    router.register({
        url: '/',
        view: 'landing.html',
        async callback(scope,urlParams){
            scope.title = ';)'
            scope.array = [
                {name: 'test 1'},
                {name: 'test 2'}
            ]
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