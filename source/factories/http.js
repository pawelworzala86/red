{

    const appjson = "application/json"
    const request = (method, url, body) => fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            ContentType: appjson,
            Accept: appjson,
        }
    }).then(res => {
        const contentType=res["headers"].get("Content-Type")??''
        if(contentType.indexOf(appjson) > -1){
            return res["json"]()
        }
        return res["text"]()
    });//(res["headers"].get("Content-Type").indexOf(appjson) > -1) ? res["json"]() : res["text"]())
    
    const http={
        get: (url, body) => request("GET", url, body),
        post: (url, body) => request("POST", url, body),
        put: (url, body) => request("PUT", url, body),
        delete: (url, body) => request("DELETE", url, body)
    }
    
    node('http',http)

}

