const { Client } = require('pg'); ;
const client = new Client('postgres://localhost:5432/juicebox-dev');


async function getAllUsers() {
  try {
    const { rows } = await client.query(`
      SELECT id, username, name, location, active 
      FROM users;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

  
  


  async function createUser({ 
    username, 
    password,
    name,
    location
  }) {
    try {
      const { rows: [ user ] }= await client.query(`
        INSERT INTO users(username, password, name, location) 
        VALUES($1, $2, $3, $4) 
        ON CONFLICT (username) DO NOTHING 
        RETURNING *;
      `, [username, password, name, location]);
     
      return user;
      
    } catch (error) {
      throw error;
    }
  }
// later
module.exports = {
  createUser,
  client,
  getAllUsers
}
