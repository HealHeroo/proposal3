// document.addEventListener("DOMContentLoaded", () => {
//   const proyekInfoDiv = document.getElementById("proyek-info");

//   // Menggunakan URL relatif untuk mengambil file JSON dari folder yang sama
//   const url = "../json/proposal.json";

//   // Mengambil data JSON menggunakan fetch
//   fetch(url)
//     .then((response) => response.json())
//     .then((proyekData) => {
//       // Membuat elemen-elemen HTML untuk menampilkan data proyek
//       const proyekTitle = document.createElement("h1");
//       proyekTitle.textContent = proyekData.Judul;

//       const proyekProposal = document.createElement("p");
//       proyekProposal.textContent = `Proposal: ${proyekData.Proposal}`;

//       const proyekDescription = document.createElement("p");
//       proyekDescription.textContent = proyekData.Ditunjukan;

//       const Ditunjukan = document.createElement("p");
//       Ditunjukan.textContent = `Ditunjukan: ${proyekData.Ditunjukan}`;

//       const Abstrak = document.createElement("p");
//       Abstrak.textContent = `Abstrak: ${proyekData.Abstrak}`;

//       const LatarBelakang = document.createElement("p");
//       Abstrak.textContent = `LatarBelakang: ${proyekData.LatarBelakang}`;

//       const Tujuan = document.createElement("p");
//       Tujuan.textContent = `Tujuan: ${proyekData.Tujuan}`;

//       // Menambahkan elemen-elemen HTML ke dalam div proyek-info
//       proyekInfoDiv.appendChild(proyekTitle);
//       proyekInfoDiv.appendChild(proyekDescription);
//       proyekInfoDiv.appendChild(Ditunjukan);
//       proyekInfoDiv.appendChild(Abstrak);
//       proyekInfoDiv.appendChild(LatarBelakang);
//       proyekInfoDiv.appendChild(Tujuan);
//     })
//     .catch((error) => {
//       console.error("Terjadi kesalahan saat mengambil data JSON:", error);
//     });
// });

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch('../json/proposal.json'); // Mengambil file .json
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const Data = await response.json();

    // Select elements by their IDs
    const judulElement = document.getElementById("judul");
    const proposalElement = document.getElementById("proposal");
    const ditujukanElement = document.getElementById("ditujukan");
    const ditujukan2Element = document.getElementById("ditujukan2");
    const ditujukan3Element = document.getElementById("ditujukan3");
    const abstrakElement = document.getElementById("abstrak");
    const latarbelakangElement = document.getElementById("latarbelakang");
    const tujuanElement = document.getElementById("tujuan");
    const tujuan2Element = document.getElementById("tujuan2");
    const tujuan3Element = document.getElementById("tujuan3");
    const tujuan4Element = document.getElementById("tujuan4");
    const waktuElement = document.getElementById("waktu");
    const kesimpulanElement = document.getElementById("kesimpulan");

    // Populate HTML elements with user data
    judulElement.textContent = Data.Judul;
    proposalElement.textContent = Data.Proposal;
    ditujukanElement.textContent = Data.Ditujukan;
    ditujukan2Element.textContent = Data.Ditujukan2;
    ditujukan3Element.textContent = Data.Ditujukan3;
    abstrakElement.textContent = Data.Abstrak;
    latarbelakangElement.textContent = Data.LatarBelakang;
    tujuanElement.textContent = Data.Tujuan;
    tujuan2Element.textContent = Data.Tujuan2;
    tujuan3Element.textContent = Data.Tujuan3;
    tujuan4Element.textContent = Data.Tujuan4;
    waktuElement.textContent = Data.Waktu;
    kesimpulanElement.textContent = Data.Kesimpulan;

  } catch (error) {
    console.error('Error:', error);
    }
  });