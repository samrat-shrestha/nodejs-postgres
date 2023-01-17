const {Pool} = require('pg');
const {user, password, database,port,host} = require('../secrets/db_configuration');

const pool = new Pool({user, password, database,port,host});

// pool.query('SELECT * FROM monsters',(err, res)=>{
//     if(err) console.log("error", err);

//     console.log(res);
// });

module.exports = pool; //This is done so that we dont need to reinstantiate the pool object everytime we need 
//to run a query.