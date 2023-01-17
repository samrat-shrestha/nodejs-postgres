const {Router} = require('express');

const pool = require('../db');

const router = Router();

router.get('/geom', (request,response,next)=>{
    pool.query('SELECT ST_AsGeoJSON(geom) FROM geomtable ORDER BY gid DESC LIMIT 1',(err,res)=>{
        if(err) return next(err);

        return response.json(res.rows);
    });
});

module.exports = router;