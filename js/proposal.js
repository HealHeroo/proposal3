document.addEventListener('DOMContentLoaded', () => {
    const proyekInfoDiv = document.getElementById('proyek-info');

    // Menggunakan URL relatif untuk mengambil file JSON dari folder yang sama
    const url = '../filejson/proposal.json';

    // Mengambil data JSON menggunakan fetch
    fetch(url)
        .then(response => response.json())
        .then(proyekData => {
            // Membuat elemen-elemen HTML untuk menampilkan data proyek
            const proyekTitle = document.createElement('h1');
            proyekTitle.textContent = proyekData.Judul;

            const proyekProposal = document.createElement('p');
            proyekProposal.textContent = `Proposal: ${proyekData.Proposal}`;

            const proyekDescription = document.createElement('p');
            proyekDescription.textContent = proyekData.Ditunjukan;

            const proyekLogo = document.createElement('img');
            proyekLogo.src = proyekData.logo;
            proyekLogo.alt = 'Logo Proyek';

            const proyekProgram = document.createElement('p');
            proyekProgram.textContent = `Program: ${proyekData.Program}`;

            const Ditunjukan = document.createElement('p');
            Ditunjukan.textContent = `Ditunjukan: ${proyekData.Ditunjukan}`;

            const Program = document.createElement('p');
            Program.textContent = `Program: ${proyekData.Program}`;

            const Abstrak = document.createElement('p');
            Abstrak.textContent = `Abstrak: ${proyekData.Abstrak}`;

            const deskripsiaplikasi = document.createElement('p');
            deskripsiaplikasi.textContent = `Deskripsi Aplikasi: ${proyekData.deskripsiaplikasi}`;

            const latarbelakang = document.createElement('p');
            latarbelakang.textContent = `Latar Belakang: ${proyekData.latarbelakang}`;

            const Tujuan = document.createElement('p');
            Tujuan.textContent = `Tujuan: ${proyekData.Tujuan}`;

            const LingkupDanManfaat = document.createElement('p');
            LingkupDanManfaat.textContent = `Lingkup Dan Manfaat: ${proyekData.LingkupDanManfaat}`;

            const kajianpustaka = document.createElement('p');
            kajianpustaka.textContent = `Kajian Pustaka: ${proyekData.kajianpustaka}`;

            const pembimbing = document.createElement('p');
            pembimbing.textContent = `Pembimbing: ${proyekData.pembimbing}`;

            const tanggalMulai = document.createElement('p');
            proyekProgram.textContent = `Tanggal Mulai: ${proyekData.tanggalMulai}`;

            const tanggalSelesai = document.createElement('p');
            tanggalSelesai.textContent = `Tanggal Selesai: ${proyekData.tanggalSelesai}`;

            const hasilProyek = document.createElement('p');
            hasilProyek.textContent = `Hasil Proyek: ${proyekData.hasilProyek}`;

           const kontak = document.createElement('p');
           kontak.textContent = `Kontak: ${proyekData.kontak}`;

            const targetAudience = document.createElement('p');
            targetAudience.textContent = `Target Audience: ${proyekData.targetAudience}`;

            const fiturUTamam = document.createElement('p');
            fiturUTamam.textContent = `Fitur Utama: ${proyekData.fiturUTama}`;
             
            const Manfaat = document.createElement('p');
            Manfaat.textContent = `Manfaat: ${proyekData.Manfaat}`;

            // Menambahkan elemen-elemen HTML ke dalam div proyek-info
            proyekInfoDiv.appendChild(proyekTitle);
            proyekInfoDiv.appendChild(proyekProposal);
            proyekInfoDiv.appendChild(proyekDescription);
            proyekInfoDiv.appendChild(proyekLogo);
            proyekInfoDiv.appendChild(proyekProgram);
            proyekInfoDiv.appendChild(Ditunjukan);
            proyekInfoDiv.appendChild(Program);
            proyekInfoDiv.appendChild(Abstrak);
            proyekInfoDiv.appendChild(deskripsiaplikasi);
            proyekInfoDiv.appendChild(latarbelakang);
            proyekInfoDiv.appendChild(Tujuan);
            proyekInfoDiv.appendChild(LingkupDanManfaat);
            proyekInfoDiv.appendChild(kajianpustaka);
            proyekInfoDiv.appendChild(pembimbing);
            proyekInfoDiv.appendChild(tanggalMulai);
            proyekInfoDiv.appendChild(tanggalSelesai);
            proyekInfoDiv.appendChild(hasilProyek);
            proyekInfoDiv.appendChild(kontak);
            proyekInfoDiv.appendChild(targetAudience);
            proyekInfoDiv.appendChild(fiturUTamam);
            proyekInfoDiv.appendChild(Manfaat);



            // Anda dapat melanjutkan dengan menambahkan elemen-elemen lainnya sesuai dengan data JSON Anda.
        })
        .catch(error => {
            console.error('Terjadi kesalahan saat mengambil data JSON:', error);
        });
});
