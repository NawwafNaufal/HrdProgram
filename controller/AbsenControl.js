const absen = require("../models/AbsenDb");

const postAbsenControl = async (req, res) => {
    const {id_status, id_jabatan} = req.body;
    const {payload} = req;

    const id_nama = payload?.id;  

    if (!id_nama) {
        return res.status(400).json({
            message: 'Nama tidak ditemukan di payload',
        });
    }

    try {
        const [value] = await absen.postDb(id_status, id_nama, id_jabatan);

        res.status(200).json({
            data: value,
            message: "Absen Success",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error inserting data",
            error: error.message
        });
    }
};

module.exports = { postAbsenControl };
