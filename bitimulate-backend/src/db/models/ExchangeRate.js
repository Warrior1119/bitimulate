const mongoose = require('mongoose');
const { Schema } = mongoose;

// Current Currency Status
const ExchangeRate = new Schema({
    name: String,
    last: Number,
    lowestAsk: Number,
    highestBid: Number,
    percentChange: Number,
    baseVolume: Number,
    quoteVolume: Number,
    isFrozen: Number,
    high24hr: Number,
    low24hr: Number,
});

module.exports = mongoose.model('ExchangeRate', ExchangeRate);