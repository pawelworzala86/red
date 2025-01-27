const testFunc = function(param1,param2){
    console.log('param1 = ',param1)
}


const FACTORY = {
    'param1': function(){
        return 'test parametru'
    },
}


function DI(callback){
    const text = callback.toString()
    let params = /\(.*\)/.exec(text)[0]
    //console.log(params)
    //params = params[0]
    params = params.substring(1,params.length-1)
    params = params.split(',')
    //console.log(params)
    params = params.map(param=>{
        let fromFactory = FACTORY[param]
        if(typeof fromFactory=='function'){
            fromFactory = fromFactory()
        }else{
            fromFactory = param
        }
        return fromFactory
    })
    return callback(...params)
}

DI(testFunc)


//console.log('end')