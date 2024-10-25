const db = require("../config/connection")

const totalEMployee = () => {
    const query = "SELECT COUNT(id) FROM data_employee"
        return db.execute(query)
}

module.exports = totalEMployee