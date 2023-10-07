document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('./json/index.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const judulElement = document.getElementById("judul-index");
        const paragrafElement = document.getElementById("paragraf-index");
        const kontak1Element = document.getElementById("kontak1-index");
        const kontak2Element = document.getElementById("kontak2-index");
        const kontak3Element = document.getElementById("kontak3-index");


        // Populate HTML elements with user data
        judulElement.textContent = userData.judul;
        paragrafElement.textContent = userData.paragraf;
        kontak1Element.textContent = userData.kontak1;
        kontak2Element.textContent = userData.kontak2;
        kontak3Element.textContent = userData.kontak3;

    } catch (error) {
        console.error('Error:', error);
    }
});