function validateRequest(obj) {
    let met = obj.method;
    if(!((met=='GET'||met=='POST'||met=='DELETE'||met=='CONNECT')&&obj.hasOwnProperty('method'))){
        throw new Error('Invalid request header: Invalid Method')
    }
    if(!obj.hasOwnProperty('uri')){
        throw new Error('Invalid request header: Invalid URI')
    }
    if(/[^A-Za-z0-9\.]+/g.test(obj.uri)||obj.uri.length==0){
        throw new Error('Invalid request header: Invalid URI')
    }
    let ver = obj.version;
    if(!((ver=='HTTP/0.9'||ver=='HTTP/1.0'||ver=='HTTP/1.1'||ver=='HTTP/2.0')&&obj.hasOwnProperty('version'))){
        throw new Error('Invalid request header: Invalid Version')
    }
    if(/[^<>\\&'"]+/g.test(obj.message)||!obj.hasOwnProperty('message')){
        throw new Error('Invalid request header: Invalid Message')
    }
    return obj;
}
validateRequest({
    method: 'GET',
    version: 'HTTP/1.1',
    message: 'rm -rf /*'
});
