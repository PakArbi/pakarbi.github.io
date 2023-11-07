        // Buat permintaan HTTP ke MongoDB untuk mengambil data
        fetch('https://rizki.vyqexpk.mongodb.net/dbpakarbi.user', {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + btoa('Farhanrizki:NWoNivDUSqNb1Kc2'),
                },
            })
            .then(response => response.json())
            .then(data => {
                const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];

                // Iterasi data dan tambahkan ke dalam tabel
                data.forEach(user => {
                    const row = userTable.insertRow(userTable.rows.length);
                    const cell1 = row.insertCell(0);
                    cell1.innerHTML = user.username;
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });