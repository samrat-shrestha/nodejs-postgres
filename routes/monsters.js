const {Router} = require('express');
const pool = require('../db/index');

const router = Router(); //Instance of the function.

router.get('/',(request,response, next)=> {
    //run query here.
    pool.query('SELECT * FROM monsters ORDER BY id ASC',(err, res)=>{
        if(err) return next(err);//Sends the err to the next in line middleware. That is why we place the middleware below route.
    
        // console.log(res.rows);

        response.json(res.rows);
    });
}); 

router.get('/:id', (request, response, next)=>{
    // const {id} = request.params;
    pool.query(`SELECT * FROM monsters WHERE id = ${request.params.id}`, (err, res)=>{
        if(err) return next(err);

        response.json(res.rows);
    });

    //alernate way.
    // pool.query("SELECT * FROM monsters WHERE id = $1", [request.params.id],(err, res)=>{
    //     if(err) next(err);

    //     return response.json(res.rows);
    // });
});

router.post('/', (request, response, next)=>{
    const {name, personality} = request.body;
    pool.query('INSERT INTO monsters (name, personality) VALUES ($1,$2)', [name, personality], (err, res)=>{
        if(err) return next(err);

        // console.log(res);

        // response.redirect('/monsters');//This is SUS.
        response.status(200).send("Monster Added!");
    });
});

router.put('/:id', (request,response, next)=>{
    const {id} = request.params;
    const {name, personality} = request.body;
    const keys = ['name', 'personality'];
    const fields = [];

    keys.forEach(key=>{
        if(request.body[key]) fields.push(key);
    });

    fields.forEach((key,index)=>{
        // console.log(`UPDATE monsters SET ${key}='${request.body[key]}' WHERE id = $2`,[id]);
        pool.query(`UPDATE monsters SET ${key}=$1 WHERE id = $2`,[request.body[key], id], (err, res)=>{
            if(err) return next(err);
    
            //response code. 
            if(index === fields.length -1) response.status(200).send("Monster Update!");       
        });
    });
});

router.delete('/:id', (request,response,next)=>{
    // console.log(`DELETE FROM monsters WHERE id=${request.params.id}`);
    pool.query(`DELETE FROM monsters WHERE id=${request.params.id}`,(err, res)=>{
        if(err) return next(err);

        // response.redirect('/monsters');
        response.status(200).send("Monster Deleted!");
    });
});

module.exports = router;