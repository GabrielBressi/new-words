const db = require('./db')

const Post = db.sequelize.define('new', {
    new : {
        type : db.Sequelize.TEXT
    },
    phrase : {
        type : db.Sequelize.TEXT
    },
    translate : {
        type : db.Sequelize.TEXT
    },
    link : {
        type : db.Sequelize.TEXT
    }
})

Post.sync({force : true})

module.exports = Post

