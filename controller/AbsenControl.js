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

// Update absen data (for submission)
const putAbsenControl = async (req, res) => {
    const { id_status } = req.body;
    const { id } = req.params;
    try {
        await absen.putDb(id_status, id);
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
