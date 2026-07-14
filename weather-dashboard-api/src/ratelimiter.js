const ratelimit = require('express-rate-limit');

const generalLimiter = ratelimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: 'Too much requests!!, Please try again later in 15 minutes.'

    },
    standardHeaders: true,
    legacyHeaders: false,
});

const weatherLimiter = ratelimit({
    windowMs: 60 * 1000,
    max: 10,
    message: {
        success: false,
        message: 'So much of Weather reqests, please slow down.'
    },
    standardHeaders: true,
    legacyHeaders: false,

});
module.exports = { generalLimiter, weatherLimiter };