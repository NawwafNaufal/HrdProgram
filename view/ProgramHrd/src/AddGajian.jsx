import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './AddGajian.css';

const EmployeeForm = ({ resetFormState }) => {
    const [isActive, setIsActive] = useState(true);
    const [isHidden, setIsHidden] = useState(false);
    const [jabatan, setJabatan] = useState('');
    const [showAdditionalInputs, setShowAdditionalInputs] = useState(false);

    const formRef = useRef(null); // Ref untuk mendeteksi klik di luar form

    useEffect(() => {
        if (isHidden) {
            resetFormState();
        }
    }, [isHidden, resetFormState]);

    // Fungsi untuk menutup form jika klik di luar form
    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setIsActive(false);
            setTimeout(() => {
                setIsHidden(true);  // Sembunyikan form setelah animasi selesai
            }, 500);  // Durasi animasi sinkron dengan CSS
        }
    };

    useEffect(() => {
        // Tambahkan event listener ketika komponen dimount
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup event listener ketika komponen di-unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleJabatanChange = (event) => {
        setJabatan(event.target.value);
        setShowAdditionalInputs(event.target.value === 'Potong Kepala');
    };

    return (
        <div>
            {!isHidden && (
                <div className={`slide-up-form name-scroll ${isActive ? 'active' : ''}`}>
                    <div className="employee-form-containerx mt-2" ref={formRef}>
                        <div className="bu-s">
                            <h2 className='judul-gaji mb-2'>Input Gaji Karyawan</h2>
                        </div>
                        <div className="row mt-1">
                            {/* Form Gaji Karyawan */}
                            <div className="col-md-6">
                                <div className="card p-3 backgorund-input">

                                    {/* Jabatan */}
                                    <div className="mb-1">
                                        <label htmlFor="jabatan" className="form-label">Jabatan</label>
                                        <select className="form-select" id="jabatan" value={jabatan} onChange={handleJabatanChange}>
                                            <option value="">Pilih Jabatan</option>
                                            <option value="HRD">HRD</option>
                                            <option value="Direktur">Direktur</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Asisten Manager">Asisten Manager</option>
                                            <option value="SPV">SPV</option>
                                            <option value="Satpam">Satpam</option>
                                            <option value="Office Boy">Office Boy</option>
                                            <option value="Teknisi">Teknisi</option>
                                            <option value="Penerimaan">Penerimaan</option>
                                            <option value="Produksi">Produksi</option>
                                            <option value="QC">QC</option>
                                            <option value="Gudang">Gudang</option>
                                            <option value="Packing">Packing</option>
                                            <option value="Dapur">Dapur</option>
                                            <option value="Limbah">Limbah</option>
                                            <option value="Tally">Tally</option>
                                            <option value="FM">FM</option>
                                            <option value="Potong Kepala">Potong Kepala</option>
                                        </select>
                                    </div>
                                    {showAdditionalInputs && (
                                        <div className="additional-inputs">
                                            <div className="mb-1">
                                                <label htmlFor="jabatanKetua" className="form-label">Jabatan (Ketua/Wakil Ketua/Anggota)</label>
                                                <select className="form-select" id="jabatanKetua">
                                                    <option value="">Pilih Jabatan</option>
                                                    <option value="Ketua">Ketua</option>
                                                    <option value="Wakil Ketua">Wakil Ketua</option>
                                                    <option value="Anggota">Anggota</option>
                                                </select>
                                            </div>

                                            <div className="mb-1">
                                                <label htmlFor="kelompok" className="form-label">Kelompok</label>
                                                <select className="form-select" id="kelompok">
                                                    <option value="">Pilih Kelompok</option>
                                                    {[...Array(10).keys()].map(i => (
                                                        <option key={i + 1} value={i + 1}>Kelompok {i + 1}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    )}
                                    {/* Tanggal Akhir */}
                                    <div className="row mb-1">
                                        <div className="col-md-6">
                                            <label htmlFor="tanggalAkhir1" className="form-label">Tanggal Mulai</label>
                                            <input type="date" className="form-control" id="tanggalAkhir1" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="tanggalAkhir2" className="form-label">Tanggal Akhir </label>
                                            <input type="date" className="form-control" id="tanggalAkhir2" />
                                        </div>
                                    </div>

                                    {/* Tipe */}
                                    <div className="mb-1">
                                        <label htmlFor="tipe" className="form-label">Tipe</label>
                                        <select className="form-select" id="tipe">
                                            <option value="">Pilih Tipe</option>
                                            <option value="harian">Harian</option>
                                            <option value="mingguan">Mingguan</option>
                                            <option value="bulanan">Bulanan</option>
                                        </select>
                                    </div>

                                    {/* Gaji Harian */}
                                    <div className="mb-1">
                                        <label htmlFor="gajiHarian" className="form-label">Gaji Harian</label>
                                        <input type="number" className="form-control" id="gajiHarian" />
                                    </div>

                                    {/* Gaji Lembur */}
                                    <div className="mb-1">
                                        <label htmlFor="gajiLembur" className="form-label">Gaji Lembur</label>
                                        <input type="number" className="form-control" id="gajiLembur" />
                                    </div>

                                    {/* Input tambahan untuk Potong Kepala */}
                                    
                                </div>
                                            <button className="btn btn-dark button-gaji">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Validasi props
EmployeeForm.propTypes = {
    resetFormState: PropTypes.func.isRequired,
};

export default EmployeeForm;
