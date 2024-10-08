const db = require("../config/connection")

const postJabatanDb = (jabatan) => {
    const query = "INSERT INTO jabatan (jabatan) VALUES (?)"
    return db.execute(query,[jabatan])
}

module.exports = {postJabatanDb}