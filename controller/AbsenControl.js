const absen = require("../models/AbsenDb");


const postAbsenControl = async (req, res) => {
    try {
        const [data] = await absen.postDb();
        res.status(200).json({
            data: data,
            message: "Absen fetched successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching data",
            error: error.message
        });
    }
};

const putAbsenControl = async (req, res) => {
    const { id_status,tanggal } = req.body;
    const { id } = req.params;

    console.log("ID:", id);  
    console.log("Body:", req.body); 
    try {
        await absen.putDb(id_status,tanggal, id);
        res.status(200).json({
            message: "Absen updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating data",
            error: error.message
        });
    }
};

module.exports = { postAbsenControl,putAbsenControl };
