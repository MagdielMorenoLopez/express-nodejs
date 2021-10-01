const mongoose = require('mongoose');

//base de datos de mongodb
(async () => {
    try{
        const schema = new mongoose.Schema({
            name: String,
            email: String,
        },{collection: 'users'});
        const User = mongoose.model('User', schema);

        await mongoose.connect('mongodb+srv://prueva-nodejs:<password>@cluster0.5az0d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            dbName: 'prueva-nodejs',
            useNewUrlParser: true,
            user: 'prueva-nodejs',
            pass: 'magdiel431',
        });
        //crea documento en la basede datos
        const user1 = new User({
            name: 'Leo',
            email: 'leo@leo.com',
        });
        //guarda el doc en la base de datos
        await user1.save();

    } catch (error){
        console.error(error);
    }
})();