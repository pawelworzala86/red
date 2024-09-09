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

}