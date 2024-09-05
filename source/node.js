function node(param,value){
    if(node[param]===undefined){
      node[param]=value
      return false
    }
    return node[param]
}