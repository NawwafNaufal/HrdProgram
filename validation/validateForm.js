const validator =require("validator")

const sanitaize = (data) => {
    return {
        nama_karyawan : (validator.escape(data.nama_karyawan)),
        nik : (validator.escape(data.nik)),
        jenis_kelamin : (validator.escape(data.jenis_kelamin)),
        pendidikan : (validator.escape(data.pendidikan)),
        tanggal_masuk : (validator.escape(data.tanggal_masuk)),
        tanggal_lahir : (validator.escape(data.tanggal_lahir)),
        id_status : (validator.escape(data.id_status)),
        awal_kontrak : (validator.escape(data.awal_kontrak)),
        akhir_kontrak : (validator.escape(data.akhir_kontrak)),
        alamat : (validator.escape(data.alamat)),
    }
}

const validate = (dt) => {
    const message = []
    const data = sanitaize(dt)
    if(validator.isEmpty(data.nama_karyawan)){
        message.push("Data Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.nik)){
        message.push("Data Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.jenis_kelamin)){
        message.push("Data Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.pendidikan)){
        message.push("Data Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.tanggal_masuk)){
        message.push("Data Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.tanggal_lahir)){
        message.push("Data Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.id_status)){
        message.push("Data Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.awal_kontrak)){
        message.push("Data Tidak Boleh Kosong")
    }
    if(validator.isEmpty(data.alamat)){
        message.push("Data Tidak Boleh Kosong")
    }
}

module.exports = validate