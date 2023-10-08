document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../json/kia.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("kianames");
      const kelasElement = document.getElementById("kiakelas");
      const npmElement = document.getElementById("kianpm");
      const instagramElement = document.getElementById("kiainstagram");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      instagramElement.textContent = userData.Instagram;

    } catch (error) {
      console.error('Error:', error);
    }
  });

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch('../json/wita.json'); // Mengambil file userData.json
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const userData = await response.json();

    // Select elements by their IDs
    const namaElement = document.getElementById("witanames");
    const kelasElement = document.getElementById("witakelas");
    const npmElement = document.getElementById("witanpm");
    const instagramElement = document.getElementById("witainstagram");


    // Populate HTML elements with user data
    namaElement.textContent = userData.Nama;
    kelasElement.textContent = userData.Kelas;
    npmElement.textContent = userData.NPM;
    instagramElement.textContent = userData.Instagram;

  } catch (error) {
    console.error('Error:', error);
    }
  });