document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/dt-faisal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const npmElement = document.getElementById("npm-faisal");
        const namaElement = document.getElementById("nama-faisal");
        const kelasElement = document.getElementById("kelas-faisal");
        const emailElement = document.getElementById("email-faisal");


        // Populate HTML elements with user data
        npmElement.textContent = userData.NPM;
        namaElement.textContent = userData.Nama;
        kelasElement.textContent = userData.Kelas;
        emailElement.textContent = userData.Email;

    } catch (error) {
        console.error('Error:', error);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/dt-farhan.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const npmElement = document.getElementById("npm-farhan");
        const namaElement = document.getElementById("nama-farhan");
        const kelasElement = document.getElementById("kelas-farhan");
        const emailElement = document.getElementById("email-farhan");


        // Populate HTML elements with user data
        npmElement.textContent = userData.NPM;
        namaElement.textContent = userData.Nama;
        kelasElement.textContent = userData.Kelas;
        emailElement.textContent = userData.Email;
        
    } catch (error) {
        console.error('Error:', error);
    }
});