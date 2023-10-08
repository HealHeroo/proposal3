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