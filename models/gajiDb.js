const db = require("../config/connection")

const getGajiDb  = () => {
    const query = 'SELECT * FROM gaji'
        return db.execute(query)
}

const postGajiDb = (jabatan,jabatan_pk,kelompok,id_tipe,gaji_harian,gaji_lembur,tanggal_mulai,tanggal_akhir) => {
    const query =  'INSERT INTO gaji (jabatan,jabatan_pk,kelompok,id_tipe,gaji_harian,gaji_lembur,tanggal_mulai,tanggal_akhir) VALUES (?,?,?,?,?,?,?,?)'
    const value = [
        jabatan || null,
        jabatan_pk || null,
        kelompok || null,
        id_tipe || null,
        gaji_harian || null,
        gaji_lembur || null,
        tanggal_mulai || null,
        tanggal_akhir || null
    ];
        return db.execute(query,value)
}

const deleteGajiDb = (id) => {
    const query = 'DELETE FROM gaji WHERE id = ?'
        return db.execute(query,[id])
}

const putGaji = (jabatan,jabatan_pk,kelompok,id_tipe,gaji_harian,gaji_lembur,tanggal_mulai,tanggal_akhir,id) => {
    const query = `
    UPDATE gaji 
    SET jabatan = ?, 
        jabatan_pk = ?, 
        kelompok = ?, 
        id_tipe = ?, 
        gaji_harian = ?, 
        gaji_lembur = ?, 
        tanggal_mulai = ?, 
        tanggal_akhir = ? 
    WHERE id = ?`;
    const value = [
        jabatan || null,
        jabatan_pk || null,
        kelompok || null,
        id_tipe || null,
        gaji_harian || null,
        gaji_lembur || null,
        tanggal_mulai || null,
        tanggal_akhir || null,
        id
    ];
        return db.execute(query,value)
}
module.exports = {getGajiDb,postGajiDb,deleteGajiDb,putGaji}