document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/proposal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const namaProdukElement = document.getElementById("namaproduk-proposal");
        const judulElement = document.getElementById("judul-proposal");
        const abstrakElement = document.getElementById("abstrak-proposal");


        // Populate HTML elements with user data
        namaProdukElement.textContent = userData.namaProduk;
        judulElement.textContent = userData.judul;
        abstrakElement.textContent = userData.abstrak;

    } catch (error) {
        console.error('Error:', error);
    }
});