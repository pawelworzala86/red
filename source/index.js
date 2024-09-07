{
    //document.addEventListener('load',function(){

    var rootScope = {
        title: ':)',
        array:[
            {name: 'test 1'},
            {name: 'test 2'}
        ]
    }




        var body = document.querySelector('view')

        console.log(body)

    node('compile')(body, rootScope)



    //})
}