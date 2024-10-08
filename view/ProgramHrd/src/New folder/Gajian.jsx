import { useState } from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBIcon } from 'mdb-react-ui-kit';
import { GoPencil, GoTrash } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { GoFilter } from "react-icons/go";
import "./Gajian.css";
import EmployeeForm from './AddGajian'; // Mengimpor EmployeeForm

const EmployeeTable = () => {
    const [showForm, setShowForm] = useState(false); // State untuk mengatur tampilan form
    const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini
    const [itemsPerPage, setItemsPerPage] = useState(10); // State untuk jumlah item per halaman
    const totalItems = 100; // Total item (misalkan dari data API)

    // Fungsi untuk membuka form ketika ikon pencil diklik
    const handleToggleForm = () => {
        setShowForm(true); // Membuka form
    };

    // Fungsi untuk menutup form ketika klik di luar pop-up
    const handleCloseForm = () => {
        setShowForm(false); // Menutup form
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleItemsPerPageChange = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset ke halaman 1 setiap kali jumlah item per halaman diubah
    };

    // Menghitung data yang ditampilkan berdasarkan halaman aktif
    const data = Array.from({ length: totalItems }, (_, i) => ({ id: i + 1 })).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="container mt-5">
            <div className='title-employee' >
                <h1 className='d-inline-block border-bottom border-2 border-black pb-1' >Tambah Gaji</h1>
            </div>

            <div className="input-group mb-3 search-input">
                <span className="input-group-text" id="basic-addon1">
                    <CiSearch className='fs-3 text-black' />
                </span>
                <input type="text" className="form-control" placeholder="Search Employee" aria-label="Search" aria-describedby="basic-addon1" style={{ fontFamily: "'Inter'" }} />
            </div>

            <div className="mb-3">
                <GoFilter className='fs-2 ms-2' style={{ marginBottom: '-16px'}} />
                <select className="form-select w-25 small-dropdown category-line">
                    <option value="">Category</option>
                    <option value="Manager">Manager</option>
                    <option value="Engineer">Engineer</option>
                    <option value="HR">HR</option>
                </select>
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3 button-add">
                <button className="btn btn-dark new-add" onClick={handleToggleForm}>Add New Employee</button>
            </div>

            <MDBTable align="middle" className="mdb-table table-responsive">
                <MDBTableHead>
                    <tr className='name-table'>
                        <th>No</th>
                        <th className="action-column">Jabatan</th>
                        <th>Tipe</th>
                        <th>Gaji Karyawan</th>
                        <th>Gaji Lembur</th>
                        <th>Tanggal Mulai</th>
                        <th>Tanggal Akhir</th>
                        <th>Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {data.map((_, index) => (
                        <tr key={index}>
                            <td style={{ fontFamily: "'Inter'" }}>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                            <td style={{ fontFamily: "'Inter'" }}>YAYUK RETNO WULAN</td>
                            <td style={{ fontFamily: "'Inter'" }}>22111302</td>
                            <td style={{ fontFamily: "'Inter'" }}>Direktur</td>
                            <td style={{ fontFamily: "'Inter'" }}>Laki-Laki</td>
                            <td style={{ fontFamily: "'Inter'" }}>Lamongan</td>
                            <td style={{ fontFamily: "'Inter'" }}>Lamongan</td>
                            <td>
                                <span style={{ marginRight: '10px' }} onClick={handleToggleForm}>
                                    <GoPencil className='fs-4 text-dark' />
                                </span>
                                <span style={{ marginRight: '10px' }}>
                                    <GoTrash className='fs-4 text-dark' />
                                </span>
                            </td>
                        </tr>
                    ))}
                </MDBTableBody>
            </MDBTable>

            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <label style={{ fontFamily: "'Inter'" }} className='rows-name'>Rows per page</label>
                    <select 
                        className="ms-2 custom-select" 
                        value={itemsPerPage} 
                        onChange={handleItemsPerPageChange}
                    >
                        <option style={{ fontFamily: "'Inter'" }} value="10">10</option>
                        <option style={{ fontFamily: "'Inter'" }} value="20">20</option>
                        <option style={{ fontFamily: "'Inter'" }} value="50">50</option>
                    </select>
                </div>
                <div>
                    <span style={{ fontFamily: "'Inter'", fontSize: '14px' }}>
                        {`${(currentPage - 1) * itemsPerPage + 1}-${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems}`}
                    </span>
                    <button 
                        className="btn btn-link btn-sm" 
                        disabled={currentPage === 1} 
                        onClick={() => handlePageChange(currentPage - 1)}
                    >
                        <MDBIcon fas icon="chevron-left" />
                    </button>
                    {[...Array(Math.ceil(totalItems / itemsPerPage))].map((_, index) => (
                        <button 
                            key={index} 
                            className={`btn btn-link btn-sm ${currentPage === index + 1 ? 'active' : ''}`} 
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button 
                        className="btn btn-link btn-sm" 
                        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)} 
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        <MDBIcon fas icon="chevron-right" />
                    </button>
                </div>
            </div>

            {/* Overlay pop-up yang hanya menutup form ketika klik di luar form */}
            {showForm && (
                <div className="popup-overlay" onClick={handleCloseForm}>
                    {/* Pop-up form */}
                    <div className="popup-form" onClick={e => e.stopPropagation()}>
                        <EmployeeForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default EmployeeTable;
