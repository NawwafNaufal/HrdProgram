const slipGaji = require("../models/slipGajiDb")

const getslipGaji =async (req,res) => {
    const [result] = await slipGaji.getslipGaji()
        res.status(200).json({
            data : result,
            message : "Data Slip Gaji"
        })
}

const patchSlipgaji = async (req, res) => {
    console.log('Request Params:', req.params); // Log params untuk debugging
    console.log('Request Body:', req.body); // Log body untuk debugging

    // Ambil nilai dari req.params
    const { id_karyawan, tanggal_mulai, tanggal_akhir } = req.params;

    // Pastikan semua field ada
    if (!id_karyawan || !tanggal_mulai || !tanggal_akhir) {
        return res.status(400).json({ message: "ID karyawan, tanggal mulai, dan tanggal akhir harus diisi." });
    }

    const { gaji_lembur, bonus, potongan } = req.body;

    // Validasi input
    if (gaji_lembur == null || bonus == null || potongan == null) {
        return res.status(400).json({ message: "Semua field harus diisi." });
    }

    try {
        const result = await slipGaji.patchSlipgaji(id_karyawan, tanggal_mulai, tanggal_akhir, gaji_lembur, bonus, potongan);
        res.status(201).json({
            message: "Data Berhasil di Tambahkan",
            result // Kembalikan hasilnya jika perlu
        });
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({
            message: "Terjadi kesalahan saat menambahkan data",
            error: error.message
        });
    }
};





module.exports = {getslipGaji,patchSlipgaji}