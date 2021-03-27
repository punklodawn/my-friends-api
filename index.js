const http = require('http')
// import {http} from http

const server = http.createServer((request, response)=>{
    switch(request.url){
        case '/':  //Definiendo las rutas
            response.writeHead(200, {'Content-Type': 'application/json'})//como en el hw
            // response.statusCode (200 )
            // response.statusMessage('OK')
            response.end(JSON.stringify('Hola Mundo'))
            break;


            default :
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('No encontrado')


    }
})

server.listen(4000, ()=>{
    console.log('servidor operativo en pueto 4000 y direccion localhost');
});