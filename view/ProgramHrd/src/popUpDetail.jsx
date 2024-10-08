import PropTypes from 'prop-types';
import './PopupDetail.css';

const PopupDetail = ({ employeeData, closePopup }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <button className="close-button" onClick={closePopup}>X</button>
                
                {/* Profile Section */}
                <div className="popup-content">
                    <div className="left-section">
                        <img src="/profile-pic-placeholder.png" alt="Profile" className="profile-img" />
                        <div className="employee-info">
                            <h2>{employeeData.name}</h2>
                            <p>{employeeData.birthDate} ({employeeData.age}) {employeeData.gender}</p>
                            <p>NIK: {employeeData.nik}</p>
                            <p>{employeeData.phone}</p>
                            <p>{employeeData.address}</p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="right-section">
                        <div className="education-job">
                            <p><strong>Pendidikan</strong>: {employeeData.education}</p>
                            <p><strong>Jabatan</strong>: {employeeData.jobTitle} ({employeeData.jobDetails})</p>
                        </div>

                        {/* Details Section */}
                        <div className="popup-details">
                            <h3>Details</h3>
                            <div className="details-grid">
                                <div>
                                    <p>Awal Kontrak</p>
                                    <p>{employeeData.contractStart}</p>
                                </div>
                                <div>
                                    <p>Akhir Kontrak</p>
                                    <p>{employeeData.contractEnd}</p>
                                </div>
                                <div>
                                    <p>Status</p>
                                    <p>{employeeData.maritalStatus}</p>
                                </div>
                                <div>
                                    <p>Jenis</p>
                                    <p>{employeeData.type}</p>
                                </div>
                                <div>
                                    <p>Kontrak Ke</p>
                                    <p>{employeeData.contractNumber}</p>
                                </div>
                                <div>
                                    <p>Bpjs</p>
                                    <p>{employeeData.bpjs}</p>
                                </div>
                                <div>
                                    <p>Mulai Kerja</p>
                                    <p>{employeeData.workStart}</p>
                                </div>
                                <div>
                                    <p>Akhir Kerja</p>
                                    <p>{employeeData.workEnd}</p>
                                </div>
                                <div>
                                    <p>Status Kontrak</p>
                                    <p>{employeeData.contractStatus}</p>
                                </div>
                                <div>
                                    <p>NIK</p>
                                    <p>{employeeData.nik}</p>
                                </div>
                                <div>
                                    <p>Keterangan Kontrak</p>
                                    <p>{employeeData.contractDetails}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

PopupDetail.propTypes = {
    employeeData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        birthDate: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        nik: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        education: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        jobDetails: PropTypes.string.isRequired,
        contractStart: PropTypes.string.isRequired,
        contractEnd: PropTypes.string.isRequired,
        maritalStatus: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        contractNumber: PropTypes.string.isRequired,
        bpjs: PropTypes.string.isRequired,
        workStart: PropTypes.string.isRequired,
        workEnd: PropTypes.string.isRequired,
        contractStatus: PropTypes.string.isRequired,
        contractDetails: PropTypes.string.isRequired,
    }).isRequired,
    closePopup: PropTypes.func.isRequired,
};

export default PopupDetail;
