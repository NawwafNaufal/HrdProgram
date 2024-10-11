const db = require("../config/connection")

const totalEMployee = () => {
    const query = "SELECT COUNT(id) FROM personal_data"
        return db.execute(query)
}

module.exports = totalEMployee