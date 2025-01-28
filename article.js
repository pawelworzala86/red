const texts = [
    {
        type:'block',
        title:'Depency Incetion w JavaScript',
        content: [
            {
                type:'text',
                text: `Podaję kod do DI w JavaScript. Za pomocą tego kodu możemy wstrzykiwać do parametrów funkcji zasoby z 'fabryki’. W podanym przykładzie wstrzykujemy do funkcji testFunc zasoby które odpowiadaja nazwom z wartości FACTORY. Rozwiązanie się przydaje np. kiedy mamy routes napisane w JS i ładujemy template pod url’e i mamy callback do wypełniania np. scope’ów – a parmetry callbacka to sa np. nie param1 jak w przykładzie tylko np. http, rootScope, scope i inne fabrykowane obiekty. Ogolnie DI stosuję kiedy mam callbacki które sa wywoływane bez wcześniejszego ustalania parametrów funkcji a ich dane wejsciowe są zawsze różne i nie zawsze w tej samej kolejnosci – po prostu automat wstrzykuje te parametry i po to jest fabryka obiektów.`
            },
            {
                type:'code',
                text: `const FACTORY = {
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

DI(FACTORY,testFunc)`
            }
        ]
    },
]

module.exports = texts