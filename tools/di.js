const FACTORY = {
    'param1': function(){
        return 'test parametru'
    },
}

function DI(callback){
    const text = callback.toString()
    let params = /\(.*\)/.exec(text)[0]
    params = params.substring(1,params.length-1)
    params = params.split(',')
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




const testFunc = function(param1,param2){
    console.log('param1 = ',param1)
}

DI(FACTORY,testFunc)