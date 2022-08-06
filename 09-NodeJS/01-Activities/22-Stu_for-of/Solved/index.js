const songs = document.querySelectorAll("ul > li");

for (const song of songs) {
  console.log(song);
  console.log(songs);
  song.classList.add("green");
}
