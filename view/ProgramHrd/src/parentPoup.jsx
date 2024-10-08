import { useState } from 'react';
import PopupDetail from './popUpDetail';

const MainComponent = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const employeeData = {
        name: "Jajang Firmansyah",
        birthDate: "08/03/2003",
        age: "21",
        gender: "Laki-laki",
        nik: "2273276327",
        phone: "089644452055",
        address: "Sedayulawas Brondong Lamongan, No 16 A",
        education: "S1 Teknik Informatika",
        jobTitle: "Manager",
        jobDetails: "Ketua Kel 9",
        contractStart: "08/03/2003",
        contractEnd: "08/03/2003",
        maritalStatus: "Menikah",
        type: "Staff",
        contractNumber: "3",
        bpjs: "Tetap",
        workStart: "08/03/2003",
        workEnd: "08/03/2003",
        contractStatus: "Aktif",
        contractDetails: "Keterangan detail kontrak",
    };

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div>
            <button onClick={openPopup}>Show Employee Details</button>
            {isPopupOpen && (
                <PopupDetail employeeData={employeeData} closePopup={closePopup} />
            )}
        </div>
    );
};

export default MainComponent;
