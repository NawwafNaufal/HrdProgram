const db = require("../config/connection")

const loginDb = async(username) =>{
    const query = "SELECT * FROM user WHERE username = ?"
        const value = [username]
            return db.execute(query,value)
}

module.exports = {loginDb}