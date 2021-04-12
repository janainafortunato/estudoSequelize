const { Usuario, Comentario, Post, sequelize } = require('./models');
const { Op } = require('sequelize');

/*Usuario.findAll({
    order: [
        ['id', 'ASC']
    ],
    limit: 2,
    offset: 2
})
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()));
    
});*/

//Buscar todos os usuarios que tem a letra A no nome
/*Usuario.findAll({
    where: {
        nome: {[Op.like]: '%A%'}
    }
})
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()));
    
});*/

//Buscar todos os usuarios que não tem a letra A no nome
/*Usuario.findAll({
    where: {
        nome: {[Op.notLike]: '%a'}
    }
})
.then((resultado) => {
    console.log(resultado.map(usuario => usuario.toJSON()));
    
});*/

/*Comentario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
    
});*/

/*Post.findAll({
    where: {
        Usuarios_id: {[Op.like]: '%oi%' }
    }
})
.then((resultado) => {
    console.log(resultado.map(Usuario => Usuario.toJSON()));
    
});*/

//Buscar todos os comentários e exibir 2 por vez
/*for(let i=0; i<6; i+=2){
    Post.findAll({
        order:[['id', 'DESC']],
        offset: i,
        limit: 2,
    })
    .then((resultado) => {
        console.log(resultado.map(Usuario => Usuario.toJSON()));
        
    });
}*/

/*Usuario.create({
    nome:'Janaina Fortunato da Silva',
    email: 'jana@teste.com',
    senha:'123',
}).then((resultado) => {
    console.log(resultado.toJSON());
});*/

//adicione todos os integrantes do seu grupo como Usuarios utilizando o método create
/*Usuario.create({
    nome:'Gabrial Rodrigues',
    email: 'gabrial@teste.com',
    senha:'123',
}).then((resultado) => {
    console.log(resultado.toJSON());
});*/

/*Usuario.update({
    senha:'123456',
},{
    where:{
        id: 5
    }
}).then((resultado) => {
    console.log(resultado.map(Usuario => Usuario.toJSON()));
});*/

//atualize o email do usuario 'Sergio' para 'sergio@digitalhouse.com'
/*Usuario.update({
    email:'sergio@digitalhouse.com',
},{
    where:{
        id: 2
    }
}).then((resultado) => {
    console.log(resultado);
});*/

//crie um post relacionado ao seu usuario
/*Post.create({
    texto:'Oi gente belezzzzzza',
    img: null,
    usuario_id: 5,
    n_likes: 1
}).then((resultado) => {
    console.log(resultado.toJSON());
});*/

Usuario.destroy({
    where: {
        id: 3,
    }
}).then((resultado) => {
    console.log(resultado);
})



