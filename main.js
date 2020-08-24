// Unsplash API
const count = 10;
const apiKey = "yKOYhVLwH08G6eNBKOK4oWbrwJebAhp-dseexjAjrkA";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = response.json();
    console.log(data);
  } catch (error) {
    // Catch error here
  }
}

// On Load
getPhotos();
