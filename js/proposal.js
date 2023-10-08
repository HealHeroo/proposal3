document.addEventListener("DOMContentLoaded", () => {
  const proyekInfoDiv = document.getElementById("proyek-info");

  // Menggunakan URL relatif untuk mengambil file JSON dari folder yang sama
  const url = "../json/proposal.json";

  // Mengambil data JSON menggunakan fetch
  fetch(url)
    .then((response) => response.json())
    .then((proyekData) => {
      // Membuat elemen-elemen HTML untuk menampilkan data proyek
      const proyekTitle = document.createElement("h1");
      proyekTitle.textContent = proyekData.Judul;

      const proyekProposal = document.createElement("p");
      proyekProposal.textContent = `Proposal: ${proyekData.Proposal}`;

      const proyekDescription = document.createElement("p");
      proyekDescription.textContent = proyekData.Ditunjukan;

      const Ditunjukan = document.createElement("p");
      Ditunjukan.textContent = `Ditunjukan: ${proyekData.Ditunjukan}`;

      const Abstrak = document.createElement("p");
      Abstrak.textContent = `Abstrak: ${proyekData.Abstrak}`;

      const LatarBelakang = document.createElement("p");
      Abstrak.textContent = `LatarBelakang: ${proyekData.LatarBelakang}`;

      const Tujuan = document.createElement("p");
      Tujuan.textContent = `Tujuan: ${proyekData.Tujuan}`;

      // Menambahkan elemen-elemen HTML ke dalam div proyek-info
      proyekInfoDiv.appendChild(proyekTitle);
      proyekInfoDiv.appendChild(proyekDescription);
      proyekInfoDiv.appendChild(Ditunjukan);
      proyekInfoDiv.appendChild(Abstrak);
      proyekInfoDiv.appendChild(LatarBelakang);
      proyekInfoDiv.appendChild(Tujuan);
    })
    .catch((error) => {
      console.error("Terjadi kesalahan saat mengambil data JSON:", error);
    });
});
