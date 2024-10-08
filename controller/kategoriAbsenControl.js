const {kategoriAbsenDb} = require("../models/kategoriAbsenDb");

const kategoriAbsenControl = async (req, res, next) => {
    try {
        const [result] = await kategoriAbsenDb();
        const user = result[0];
        const payload = {
            kategori: user.jabatan,
            nama: user.nama_karyawan,
            id : user.id
        };
        req.payload = payload;  
        next();  
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data', error: error.message });
    }
};

module.exports = { kategoriAbsenControl };
