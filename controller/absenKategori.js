const {kategoriAbsenDb} = require("../models/kategoriAbsenDb");

const kategoriAbsenControl = async (req, res, next) => {
    try {
        const [result] = await kategoriAbsenDb();
        res.status(200).json({
            message : "Data Absen Kategori",
            data : result
        })
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error: error.message });
    }
};

module.exports = { kategoriAbsenControl };
