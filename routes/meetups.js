const {Router} = require('express');
const pool = require('../db');

const router = Router();

router.get('/',(request,response,next)=>{
    pool.query('SELECT * FROM meetups ORDER BY id',(err, res)=>{
        if(err) return next(err);

        response.json(res.rows);
    });
});

router.post('/',(request,response,next)=>{
    const {title, address, image, description} = request.body;
    pool.query('INSERT INTO meetups (title, address, image, description) VALUES ($1,$2,$3,$4)', 
    [title, address, image, description],(err, res)=>{
        if(err) console.log(err); return next(err);

        response.status(200).send("Meetups Added!");
    });
});

module.exports = router;