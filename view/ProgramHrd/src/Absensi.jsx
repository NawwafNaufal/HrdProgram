import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'; 
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Form, Button } from 'react-bootstrap'; 
import { CiSearch } from "react-icons/ci";
import { CSSTransition, TransitionGroup } from "react-transition-group"; // Import untuk animasi
import "./Absensi.css"; 

function AppAbsensi() {
  const initialData = Array(10).fill({
    name: "AYUK RETNO WULAN",
    nik: "23456789",
    status: { masuk: false, izin: false, alpha: false, cuti: false },
  });

  const [employees, setEmployees] = useState(initialData);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("absensi");
  const [searchTerm] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const handleInputChange = (index, field) => {
    if (!isEditable) return;

    const newEmployees = employees.map((employee, i) =>
      i === index
        ? {
            ...employee,
            status: { masuk: false, izin: false, alpha: false, cuti: false, [field]: true },
          }
        : employee
    );
    setEmployees(newEmployees);
  };

  const handleSubmit = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, index) => index + 1); // Array of dates

  return (
    <div className="container">
      <h1 className='h1-absen'>Absensi</h1>

      <ul className="mb-3 tabs">
        <li className={activeTab === "absensi" ? "active" : ""} onClick={() => setActiveTab("absensi")}>
          Absensi
        </li>
        <li className={activeTab === "rekap" ? "active" : ""} onClick={() => setActiveTab("rekap")}>
          Rekap Absensi
        </li>
      </ul>
      <hr className="mt-1"/>

      {/* TransitionGroup digunakan untuk membungkus konten tab */}
      <TransitionGroup>
        {activeTab === "absensi" && (
          <CSSTransition
            key="absensi"
            timeout={500}
            classNames="slide"
          >
            <div className="tab-content active">
              <div className="controls">
                <div className="col-md-6 ">
                  <label htmlFor="gender" className="form-label"></label>
                  <select className="form-select controls-select" id="gender">
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="date-picker-container">
                  <div className="date-picker-wrapper">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="date-picker"
                      id="date-picker"
                    />
                    <IoCalendarNumberOutline className="calendar-icon" />
                  </div>
                </div>
              </div>

              <MDBTable align="middle" className="mdb-table table-responsive">
                <MDBTableHead>
                  <tr>
                    <th>No</th>
                    <th>Nama Karyawan</th>
                    <th>Masuk</th>
                    <th>Izin</th>
                    <th>Alpha</th>
                    <th>Cuti</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {filteredEmployees.map((employee, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{employee.name}</td>
                      <td>
                        <input
                          type="radio"
                          name={`status-${index}`}
                          checked={employee.status.masuk}
                          onChange={() => handleInputChange(index, "masuk")}
                          disabled={!isEditable}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name={`status-${index}`}
                          checked={employee.status.izin}
                          onChange={() => handleInputChange(index, "izin")}
                          disabled={!isEditable}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name={`status-${index}`}
                          checked={employee.status.alpha}
                          onChange={() => handleInputChange(index, "alpha")}
                          disabled={!isEditable}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name={`status-${index}`}
                          checked={employee.status.cuti}
                          onChange={() => handleInputChange(index, "cuti")}
                          disabled={!isEditable}
                        />
                      </td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>

              <div className="buttons">
                <button className="b-1" onClick={handleEdit}>Edit</button>
                <button className="b-2" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </CSSTransition>
        )}

        {activeTab === "rekap" && (
          <CSSTransition
            key="rekap"
            timeout={500}
            classNames="slide"
          >
            <div className="tab-content active">
              {/* Search Bar */}
              <div className="d-flex justify-content-between align-items-center mb-3 ">
                <div className="search-container ">
                  <Form.Control
                    type="text"
                    placeholder="Search Employee"
                    className="search-input"
                  />
                  <CiSearch className="search-icon" />
                </div>
                <div className="d-flex align-items-center ga-d ">
                  <Form.Select className="categ-e" onChange={(e) => console.log(e.target.value)}>
                    <option>Select Category</option>
                    <option>Satpam</option>
                    <option>Manager</option>
                  </Form.Select>
                  <Form.Select className="tahun-c" onChange={(e) => setYear(e.target.value)}>
                    <option>Tahun</option>
                    {[2022, 2023, 2024].map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </Form.Select>
                  <Button className="button-pdf">Convert to PDF</Button>
                </div>
              </div>

              {/* Month Tabs */}
              <div className="bulan-bt">
                <Button
                  variant={month === 0 ? "primary active" : "outline-secondary"}
                  className={`januari-button ${month === 0 ? 'active' : ''}`} 
                  onClick={() => setMonth(0)}
                >
                  Januari
                </Button>
                {['Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((monthName, index) => (
                  <Button
                    variant={month === index + 1 ? "primary active" : "outline-secondary"}
                    key={index + 1}
                    className={`${month === index + 1 ? 'active' : ''}`}
                    onClick={() => setMonth(index + 1)}
                  >
                    {monthName}
                  </Button>
                ))}
              </div>

              {/* Absensi Table dengan animasi */}
              <TransitionGroup component={null}>
                <CSSTransition
                  key={month} // Gunakan bulan sebagai key untuk transisi
                  timeout={500}
                  classNames="slide"
                >
                  <div className="new-tab">
                    <h5 className="sa-tpam">Satpam</h5>
                    <MDBTable align="middle" className="table-bordered">
                      <MDBTableHead className="table table-header">
                        <tr>
                          <th>No</th>
                          <th>Tanggal</th>
                          <th>Nama Karyawan</th>
                          <th>Jabatan</th>
                          <th>NIK</th>
                          <th>Masuk</th>
                          <th>Izin</th>
                          <th>Absen</th>
                          <th>Cuti</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {dates.map((date, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{`${date}/${month + 1}/${year}`}</td> {/* Format Tanggal */}
                            <td>AYUK RETNO WULAN</td>
                            <td>Satpam</td>
                            <td>23456789</td>
                            <td>25</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        ))}
                      </MDBTableBody>
                    </MDBTable>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default AppAbsensi;
