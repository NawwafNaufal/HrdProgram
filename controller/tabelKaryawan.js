const tabel = require("../models/tabelKaryawan")

const getDataControl =async (req,res,next) => {
    const [result] = await tabel.getDataKarywanDb()
        res.status(200).json({
            message : "Data Karyawan",
            data : result
        })
        const user = result[0]
        const payload = {
            nama : user.nama_karyawan
        }
        console.log(payload)
        next()
}

// connection.query(query, (error, results) => {
//     if (error) {
//         return res.status(500).json({ error: 'Error retrieving data' });
//     }

//     const cleanedResults = results.map(row => {
//         const cleanedRow = {};
//         Object.keys(row).forEach(key => {
//         if (row[key] !== null) { 
//             cleanedRow[key] = row[key];
//         }
//         });
//         return cleanedRow;
//     });

//     res.json(cleanedResults);
// });


module.exports = {getDataControl}