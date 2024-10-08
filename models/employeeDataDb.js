const db = require("../config/connection");

const postEmployeeData = (
        jabatan,bagian,kelompok,id_kp,
        kontrak,keterangan_kontrak,bpjs_kategori,
        awal_kontrak,akhir_kontrak,mulai_kerja,
        akhir_kerja,kpj,kode_bag,nik,id_jenis
) => {
    const query = `
        INSERT INTO employee_data 
        (jabatan, bagian, kelompok, id_kp, kontrak, keterangan_kontrak, 
        bpjs_kategori, awal_kontrak, akhir_kontrak, mulai_kerja, akhir_kerja, 
        kpj, kode_bag, nik, id_jenis) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        jabatan, bagian, kelompok, id_kp, kontrak, keterangan_kontrak, 
        bpjs_kategori, awal_kontrak, akhir_kontrak, mulai_kerja, akhir_kerja,
        kpj, kode_bag, nik, id_jenis
    ];
    return db.execute(query, values);
};


const putEmployeeData = (
            jabatan,bagian,kelompok,id_kp,
            kontrak,keterangan_kontrak,bpjs_kategori,
            awal_kontrak,akhir_kontrak,mulai_kerja,
            akhir_kerja,kpj,kode_bag,nik,id_jenis,id
)=> {
    const query =`
            UPDATE employee_data SET jabatan = ?,bagian = ?,kelompok = ?,id_kp =?,
            kontrak = ?,keterangan_kontrak = ?,bpjs_kategori = ?,
            awal_kontrak = ?,akhir_kontrak = ?,mulai_kerja = ?,
            akhir_kerja = ?,kpj = ?,kode_bag = ?,nik = ?,id_jenis = ? WHERE id = ?`

    const value = [  jabatan, bagian, kelompok, id_kp, kontrak, keterangan_kontrak, 
        bpjs_kategori, awal_kontrak, akhir_kontrak, mulai_kerja, akhir_kerja,
        kpj, kode_bag, nik, id_jenis,id
    ]
    return db.execute(query,value)
}

const deleteEmployeeData = (id) => {
    const query = "DELETE FROM employee_data WHERE id = ?  "
    return db.execute(query,[id])
}

module.exports = { postEmployeeData,putEmployeeData,deleteEmployeeData};
