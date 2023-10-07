document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../filejson/maul.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-maul");
      const kelasElement = document.getElementById("kelas-maul");
      const npmElement = document.getElementById("npm-maul");
      const kontakElement = document.getElementById("kontak-maul");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;

    } catch (error) {
      console.error('Error:', error);
    }
  });

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../filejson/raul.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-raul");
      const kelasElement = document.getElementById("kelas-raul");
      const npmElement = document.getElementById("npm-raul");
      const kontakElement = document.getElementById("kontak-raul");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;
    } catch (error) {
      console.error('Error:', error);
    }
  });
