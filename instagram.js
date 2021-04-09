const { Usuario, Comentario, Post, sequelize } = require('./models');
//const {Comentario, sequelize} = require('./models/Comentario');
//const {Post, sequelize }= require('./models/Post');

Usuario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
    
});

Comentario.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
    
});

Post.findAll()
.then((resultado) => {
    console.log(resultado.map(user => user.toJSON()));
    
});