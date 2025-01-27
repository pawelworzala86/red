{

    var rootScope = {
        title: ':)',
        array:[
            {name: 'test 1'},
            {name: 'test 2'}
        ]
    }


    var view = document.querySelector('view')

    node('compile')(view, rootScope)



    const router = node('router')

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