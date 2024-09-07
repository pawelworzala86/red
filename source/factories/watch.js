{

    //function watch(){}
    
        Object.prototype.watch = function (prop, handler) {
            const self = this
            !self.handlers ? self.handlers = [] : null;
            !self.handlers[prop] ? self.handlers[prop] = [] : null
            self.handlers[prop]['push'](handler)
            if (self.hasOwnProperty(prop) && !self.hasOwnProperty('_' + prop)) {
                self['_' + prop] = self[prop]
                try{
                delete(self[prop])
                }catch(e){}
            }
            if (!self.hasOwnProperty(prop)) {
                Object.defineProperty(self, prop, {
                    ["get"]: () => self['_' + prop],
                    ["set"]: (value) => {
                        const oldVal=self['_' + prop]
                        self.handlers[prop].forEach(handler => {
                            handler(oldVal,value)
                        })
                        self['_' + prop] = value
                    },
                })
            }else{
                self.handlers[prop].push(handler)
            }
        }
    
    
        ///////////////////////////////////////////
    
    
      
    /*
            Object.prototype.watch = function (prop, handler) {
    
                let helper = this.helper
                if(helper===undefined){
                    helper={}
                    this.helper = helper
                }
                if(helper[prop]===undefined){
                    helper[prop]= {
                        list:[],
                        Value:this[prop],
                    }
                }
    
                helper[prop].list.push(handler)
    
            if (!this["hasOwnProperty"](prop)) {

                Object["defineProperty"](this, prop, {
    
                    ["get"]: () => helper[prop].Value,
                    ["set"]: (val) => {
                            
                            for(const handler of helper[prop].list){
                                handler(helper[prop].Value,val)
                            }
                            helper[prop].Value = val
                        },
    
                })
            }
          
            }
    
    */
    //}

}

