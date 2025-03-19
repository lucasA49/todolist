// init connexion a la base de donnée
import pool from '../db.config.js';
const asyncQuery = promisify(pool.query).bind(pool);

async function requete_connexion(params){
    var results = null; 
    try{
        var requete_sql = `select * from users where email = '${params.email}' and password = '${params.password}'`;
        var liste_data = await asyncQuery(requete_sql);
        if (liste_data.rows.length > 0) {
            results = liste_data.rows;
            if (results.length == 1) results = results[0];
        }
    }catch (error) {
    }
return results;
}