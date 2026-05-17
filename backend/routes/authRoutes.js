const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {

    const { email, password } = req.body;

    if (
        email === 'admin@gmail.com' &&
        password === '123456'
    ) {

        const token = jwt.sign(
            { email },
            'secretkey'
        );

        res.status(200).json({
            success: true,
            token
        });

    } else {

        res.status(401).json({
            success: false,
            message: 'Invalid Credentials'
        });
    }
});

module.exports = router;