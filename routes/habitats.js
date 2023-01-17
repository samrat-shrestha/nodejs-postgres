const {Router} = require('express');
const pool = require('../db');

const router = Router();

module.exports = router;

router.get('/', (request,response,next)=>{
    pool.query('SELECT * FROM habitats', (err, res)=>{
        if(err) return next(err);

        response.json(res.rows);
    });
});

router.post('/', (request,response,next)=>{
    const {name, climate, temperature} = request.body;
    pool.query(`INSERT INTO habitats (name, climate, temperature) VALUES ('${name}','${climate}',${temperature})`, (err, res)=>{
        if(err) console.log(err); next(err);

        return response.status(200).send("Habitat Added!");
    });
});