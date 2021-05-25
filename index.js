const { request, response } = require('express');
const express = require('express');
const app = express();

app.get("/",function(request,response){
    response.send( "Hello");
});

app.get("/blog/:artigo?", function(request, response){
    var artigo = request.params.artigo;

    if(artigo){

    }
    else{
        response.send("Bem vindo ao meu blog!");
    }
   
});

app.get("/canal/youtube", function(request, response){
    var canal = request.query["canal"];

    if(canal) {
        response.send(canal);
    }else{
        response.send("Nenhum canal fornecido!")
    }
});

app.get("/ola/:nome/:empresa", function(request, response){
    var name = request.params.nome;
    var empresa = request.params.empresa;
    response.send("<h1>Olá, " + name  +   " da " + empresa + " <h1>");
})



app.listen(3333,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }
    else{
        console.log("Servidor started!");
    }
});
