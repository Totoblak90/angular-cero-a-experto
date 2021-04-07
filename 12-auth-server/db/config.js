const mongoose = require("mongoose");

const dbConection = async() => {

    try {

        await mongoose.connect( process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        } );
        console.log('Base de datos online');

    } catch {
        console.log(err);
        throw new Error('Error a la hora de inicializar la base de datos');
    }

}

module.exports = {

    dbConection

}