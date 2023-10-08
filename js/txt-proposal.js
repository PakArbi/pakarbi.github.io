document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('../json/text-proposal.json'); // Mengambil file userData.json
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const userData = await response.json();

        // Select elements by their IDs
        const judulTxtProposal1Element = document.getElementById("judul1-txtproposal");
        const isiTxtProposal1Element = document.getElementById("isi1-txtproposal");
        const judulTxtProposal2Element = document.getElementById("judul2-txtproposal");
        const isiTxtProposal2Element = document.getElementById("isi2-txtproposal");
        const judulTxtProposal3Element = document.getElementById("judul3-txtproposal");
        const isiTxtProposal3Element = document.getElementById("isi3-txtproposal");

        // Populate HTML elements with user data
        judulTxtProposal1Element.textContent = userData.judultxtproposal1;
        isiTxtProposal1Element.textContent = userData.isitxtproposal1;
        judulTxtProposal2Element.textContent = userData.judultxtproposal2;
        isiTxtProposal2Element.innerHTML = userData.isitxtproposal2.replace(/\n/g, '<br>');
        judulTxtProposal3Element.textContent = userData.judultxtproposal3;
        isiTxtProposal3Element.innerHTML = userData.isitxtproposal3.replace(/\n/g, '<br>');

    } catch (error) {
        console.error('Error:', error);
    }
});