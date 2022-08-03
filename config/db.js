const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' })

const conectarDB = async () => {
    try {
            mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB Conectada');
    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        process.exit(1)
    }
}

module.exports = conectarDB