document.addEventListener("DOMContentLoaded", () => {
  const artistsData = [
    { name: "Fernandinho", image: "./img/cantor-fernandinho.jpeg" },
    { name: "FHOP Music", image: "./img/cantor-fhopmusic.jpeg" },
    { name: "Isadora Pompeo", image: "./img/cantora-isadora.jpeg" },
    { name: "Morada", image: "./img/cantor-morada.jpeg" },
    { name: "Theo Rubia", image: "./img/cantor-theo.jpeg" },
    { name: "Alessandro Villas Boas", image: "./img/cantor-alesandro.jpeg" },
    { name: "Julliany Souza", image: "./img/cantora-julliany-souza.jpeg" },
    { name: "Gabriela Rocha", image: "./img/cantora-gabriela.jpeg" },
    { name: "Midian Lima", image: "./img/cantora-midian.jpeg" },
    { name: "Nivia Soares", image: "./img/cantora-nivia.jpeg" },
    { name: "Israel Salazar", image: "./img/cantor-israel.jpeg" },
    { name: "Aline Barros", image: "./img/cantora-aline.jpeg" },
    { name: "Laura Souguellis", image: "./img/cantora-laura.jpeg" },
    { name: "Gabriel Guedes de Almeida", image: "./img/cantor-gabriel.jpeg" },
  ];

  const albumsData = [
    {
      name: "Teus Sonhos",
      artist: "Fernandinho",
      image: "./img/album-fernandinho.jpg",
    },
    { name: "A Boa Parte", artist: "FHOP", image: "./img/album-fhop.jpeg" },
    {
      name: "Processo",
      artist: "Isadora Pompeo",
      image: "./img/album-isadora.jpeg",
    },
    {
      name: "Lembre-se 2000s",
      artist: "Morada",
      image: "./img/album-morada.png",
    },
    {
      name: "Peregrino",
      artist: "Theo Rubia",
      image: "./img/album-theorubia.jpeg",
    },
    {
      name: "Ao Meu Coração",
      artist: "Alessandro Vilas Boas",
      image: "./img/album-vilaboas.png",
    },

    {
      name: "Lindo Momento",
      artist: "Julliany Souza",
      image: "./img/album-julliany.jpg",
    },
    {
      name: "A Presença (Deluxe)",
      artist: "Gabriela Rocha",
      image: "./img/album-gabriela.jpeg",
    },
    {
      name: "Midian Lima (Ao Vivo)",
      artist: "Midian Lima",
      image: "./img/album-midian.jpeg",
    },
    {
      name: "Abre os Olhos",
      artist: "Nivia Soares",
      image: "./img/album-nivia.jpeg",
    },
    {
      name: "Eu tô no Culto",
      artist: "Israel Salazar",
      image: "./img/album-israel.jpeg",
    },
    {
      name: "30 Anos Na Casa",
      artist: "Aline Barros",
      image: "./img/album-aline.jpeg",
    },
    {
      name: "Fornalla Laura Souguellis ",
      artist: "Laura Souguellis",
      image: "./img/album-laura.jpeg",
    },
    {
      name: "In Concert (Ao Vivo)",
      artist: "Gabriel Guedes de Almeida",
      image: "./img/album-gabriel.jpeg",
    },
  ];

  const artistsGrid = document.querySelector(".artists-grid");
  const albumsGrid = document.querySelector(".albums-grid");

  artistsData.forEach((artist) => {
    const artistCard = document.createElement("div");
    artistCard.classList.add("artist-card");

    artistCard.innerHTML = `
        <img src="${artist.image}" alt="imagem do ${artist.name}">
        <h3 style="font-size: 14px;">${artist.name}</h3> 
       <p style="font-size: 13px;  color: #b7b3b6;">Artista</p>
        `;

    artistsGrid.appendChild(artistCard);
  });

  albumsData.forEach((album) => {
    const albumCard = document.createElement("div");
    albumCard.classList.add("album-card");

    albumCard.innerHTML = `
        <img src="${album.image}" alt="imagem do ${album.name}">
        <h3 style="font-size: 14px;">${album.name}</h3>
        <p style="font-size: 12px; color: #b7b3b6;">${album.artist}</p>

        
        
        `;

    albumsGrid.appendChild(albumCard);
  });
});
