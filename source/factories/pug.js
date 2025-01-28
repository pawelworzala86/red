{
    let lastSpaces = 0
    let lastTags = []
    async function parsePug(pug){

        let imports = []
        pug = pug.replace(/\{\{import \'.*\'\}\}/gm,match=>{
            let file = match.split('\'')[1].replace('\'','')
            console.log('import', file)
            imports.push(file)
            return match
        })
        for(const imp of imports){
            let code = await node('http').get(imp)
            pug = pug.replace(new RegExp("\\{\\{import \\'"+imp+"\\'\\}\\}",'gm'),`\n${code}\n`)
        }
        console.log('pug',pug)

        let lines = pug.split('\n')
    
        lines = lines.map((line,index)=>{
            let spaces = ''
            spaces = line.replace(line.trim(),'').replace(/\n|\r\n|\r/gm,'')
            spaces=spaces.length/4
            const parts = line.trim().split(' ')
            //console.log('parts',parts)
            let tagParts = parts[0].split('(')[0]
            let tagAttrs
            if(parts[0]){
                //console.log(parts[0])
                tagAttrs = parts[0].split('(')[1]
            }
            if(tagAttrs){
                tagAttrs=tagAttrs.substring(0,tagAttrs.length-1)
                console.log('tagAttrs',tagAttrs)
                tagAttrs = tagAttrs.split(';')
                tagAttrs = tagAttrs.map(attr=>{
                    return attr.split(/=(.+)/)
                })
            }else{
                tagAttrs = []
            }
            let elementParts = /([\w]+)?(\#[\w]+)?([\.\w]+)?/gm.exec(tagParts)
            //console.log('elementParts',elementParts)
            let result = ''
            if((elementParts[1]==undefined)&&(elementParts[2]==undefined)&&(elementParts[3]==undefined)){
                return line
            }else{
                let tag = elementParts[1]??'div'
                let id = elementParts[2]??''
                let classNames = (elementParts[3]??'').split('.')
                let content = parts
                content.splice(0,1)
                content = parts.join(' ').trim()
                tagAttrs=tagAttrs.map(tag=>{
                    tag[1]= tag[1].replace(/\"/gm,'')
                    return tag
                })
                if(id.length){
                    tagAttrs.push(['id',id])
                }
                if(classNames.length){
                    let clsNames = classNames.join(' ').trim()
                    if(clsNames.length){
                        tagAttrs.push(['class',clsNames])
                    }
                }
                let attributes = tagAttrs.map(attr=>{
                    return `${attr[0]}="${attr[1]}"`
                }).join(' ')
                if(attributes.length){
                    attributes=' '+attributes
                }
                let close = ``
                let end = ``
                lastTags[spaces] = tag
                let newspaces = 0
                if(lines[index+1]){
                    newspaces = lines[index+1].replace(lines[index+1].trim(),'').replace(/\n|\r\n|\r/gm,'')
                    newspaces=newspaces.length/4
                }
                if(lastSpaces<=spaces){
                    end += `</${lastTags[spaces]}>`
                }
                if(newspaces<spaces){
                    for(let i=newspaces;i<spaces;i++){
                        let nspc = ''
                        for(let ii=i+1;ii<spaces;ii++){
                            nspc += '    '
                        }
                        close += `\n${nspc}</${lastTags[spaces-i-1]}>`
                    }
                    end = ``
                }
                if(newspaces<spaces){
                    end = `</${lastTags[spaces]}>`
                }
                if(newspaces>spaces){
                    end = ``
                }
                lastSpaces = spaces
                let nspc = ''
                for(let i=0;i<spaces*4;i++){
                    nspc += ' '
                }
                result+=`${nspc}<${tag}${attributes}>${content}${end}${close}`
            }
            return result
        })
    
        const html = lines.join('\n')
        return html
    }


    node('parsePug',parsePug)

    
}