// Fungsi untuk memformat tanggal ke dalam format "Month day, year"
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  
  // Fungsi untuk memperbarui elemen HTML dengan tanggal yang sesuai dengan hari ini
  function updateCurrentDate() {
    const currentDateElement = document.getElementById('current-date');
    const today = new Date();
    const formattedDate = formatDate(today);
    currentDateElement.textContent = formattedDate;
  }
  
  // Memanggil fungsi updateCurrentDate untuk pertama kali
  updateCurrentDate();
  
  // Memperbarui tanggal setiap detik (1000 milidetik)
  setInterval(updateCurrentDate, 1000);
  