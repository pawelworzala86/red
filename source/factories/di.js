{

    const FACTORY = {
        //'param1': function(){
        //    return 'test parametru'
        //},
    }


    async function DI(FACTOR,callback){
        const text = callback.toString()
        let params = /\(.*\)/.exec(text)[0]
        //console.log(params)
        //params = params[0]
        params = params.substring(1,params.length-1)
        params = params.split(',')
        //console.log(params)
        params = params.map(param=>{
            let fromFactory = FACTOR[param]
            if(typeof fromFactory=='function'){
                fromFactory = fromFactory()
            }else{
                fromFactory = param
            }
            return fromFactory
        })
        return await callback(...params)
    }

    //DI(testFunc)

    node('FACTORY',FACTORY)
    node('DI',DI)

}