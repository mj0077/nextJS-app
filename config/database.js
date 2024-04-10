const mongoose = require('mongoose');

const dbConnect = async () => {

    try {
        // /* await */ mongoose.connect('mongodb://127.0.0.1:27017/propertydb');
        // console.log(process.env.MONGODB_URI + process.env.DB_NAME)

        mongoose.connection.once('open', () => {
            console.log('Connected already');
            return;
        })
        /* await */ mongoose.connect(process.env.MONGODB_URI + process.env.DB_NAME);
        console.log('Connected');

    } catch (error) {
        console.log(error);

    }
}


export default dbConnect;