const router = require('express').Router();
const authRouter = require('./auth.api.router');
const tokenRouter = require('./token.api.router');
const coffeeRouter = require('./coffee.api.router');

router.use('/tokens', tokenRouter);
router.use('/auth', authRouter);
router.use('/coffee', coffeeRouter);

module.exports = router;
