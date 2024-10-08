INSERT INTO personal_data (
    id,
    nik,
    nama_karyawan,
    jenis_kelamin,
    pendidikan,
    id_status,
    tanggal_lahir,
    alamat,
    no_hp,
    usia,
    asal
)
VALUES (
    'id:varchar',
    'nik:varchar',
    'nama_karyawan:varchar',
    'jenis_kelamin:varchar',
    'pendidikan:varchar',
    'id_status:varchar',
    'tanggal_lahir:date',
    'alamat:text',
    no_hp:int,
    usia:int,
    'asal:varchar'
);

SELECT * FROM personal_data