const mongoose = require('mongoose');

const {
    MONGO_URI: mongoURI
} = process.env;

module.exports = (function() {
    mongoose.Promise = global.Promise;
    return {
        connect () {
            mongoose.connect(mongoURI).then(
                () => {
                    console.log('Successfully connected to mongodb')
                }
            ).catch(e => {
                console.log(e);
            });            
        }
    };
})();