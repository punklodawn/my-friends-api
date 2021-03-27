const http = require('http')


const port =parseInt(process.env.PORT) || 3055;
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

server.listen(port, ()=>{
    console.log('servidor operativo en pueto 3055 y direccion localhost');
});

server.on ('error' , error =>{
console.log(error);
})