document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#tanggal_masuk", {
        dateFormat: "Y-m-d"
    });
    flatpickr("#tanggal_lahir", {
        dateFormat: "Y-m-d"
    });
    flatpickr("#awal_kontrak", {
        dateFormat: "Y-m-d"
    });
    flatpickr("#akhiri_kontrak", {
        dateFormat: "Y-m-d"
    });

    document.getElementById('employee-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('http://localhost:4000/FromEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan: ' + error.message);
        }
    });

    document.querySelector('button[type="reset"]').addEventListener('click', function() {
        console.log('Form has been reset');
    });
});
