const express = require('express');
// const pool = require('./db/index');
// const monster = require('./routes/monsters'); //Migrated to index.js in route
// const habitat = require('./routes/habitats');
// const live = require('./routes/lives');
const routes = require('./routes');//By default it located index.js like this if no module specified.
const bp = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bp.json());

//This middleware is used for the routes. Routing middleware.
//Inorder to remove this clustering of route codes here we have defined a seperate index.js in route to handle it.
// app.use('/monsters', monster);
// app.use('/habitats', habitat);
// app.use('/lives', live);

app.use(cors())
app.use('/', routes);

//All these have been moved to the monster route.
// app.get('/monsters',(request,response, next)=> {
//     //run query here.
//     pool.query('SELECT * FROM monsters ORDER BY id ASC',(err, res)=>{
//         if(err) return next(err);//Sends the err to the next in line middleware. That is why we place the middleware below route.

//         // console.log(res.rows);

//         response.json(res.rows);
//     });
// });

// app.get('/monsters/:id', (request, response, next)=>{
//     // const {id} = request.params;
//     pool.query(`SELECT * FROM monsters WHERE id = ${request.params.id}`, (err, res)=>{
//         if(err) next(err);

//         return response.json(res.rows);
//     });

//     //alernate way.
//     // pool.query("SELECT * FROM monsters WHERE id = $1", [request.params.id],(err, res)=>{
//     //     if(err) next(err);

//     //     return response.json(res.rows);
//     // });
// });

//Error handling middleware.
app.use((err,req,res,next)=>{
    res.json(err);
});//Placed here after the route. Order is important.

module.exports = app;