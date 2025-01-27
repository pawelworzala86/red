fs = require('fs')

let pug = fs.readFileSync('./views/landing.pug').toString()


function parsePug(pug){
    let lines = pug.split('\n')

    lines = lines.map(line=>{
        let spaces = ''
        spaces = line.replace(line.trim(),'').replace(/\n|\r\n|\r/gm,'')
        const parts = line.trim().split(' ')
        console.log('parts',parts)
        let tagParts = parts[0].split('(')[0]
        let tagAttrs
        if(parts[0]){
            //console.log(parts[0])
            tagAttrs = parts[0].split('(')[1]
        }
        if(tagAttrs){
            tagAttrs=tagAttrs.substring(0,tagAttrs.length-1)
            //console.log('tagAttrs',tagAttrs)
            tagAttrs = tagAttrs.split(';')
            tagAttrs = tagAttrs.map(attr=>{
                return attr.split('=')
            })
        }else{
            tagAttrs = []
        }
        let elementParts = /([\w]+)?(\#[\w]+)?(\.[\w]+)?/gm.exec(tagParts)
        console.log('elementParts',elementParts)
        let result = ''
        if((elementParts[1]==undefined)&&(elementParts[2]==undefined)&&(elementParts[3]==undefined)){
            return line
        }else{
            let tag = elementParts[1]??'div'
            let id = elementParts[2]??''
            let className = elementParts[3]??''
            let content = parts
            content.splice(0,1)
            content = parts.join(' ').trim()
            if(id.length){
                tagAttrs.push(['id',id])
            }
            if(className.length){
                tagAttrs.push(['class',className])
            }
            let attributes = tagAttrs.map(attr=>{
                return `${attr[0]}=${attr[1]}`
            }).join(' ')
            if(attributes.length){
                attributes=' '+attributes
            }
            result+=`${spaces}<${tag}${attributes}>${content}</${tag}>`
        }
        return result
    })

    const html = lines.join('\n')
    return html
}


let html = parsePug(pug)

fs.writeFileSync('./landing.html', html)