// CLASE
class Song {
  // caracteristicas <-- atributos
  author: string;
  name: string;

  constructor(author: string, ipsum: string) {
    this.author = author;
    this.name = ipsum;
  }

  // comportamientos <-- metodos
  play(): string {
    return `Playing... ${this.name} by ${this.author}`;
  }
}

// Obj e Instancia
const song1 = new Song('phoenix', 'LASSO');
// metodos
console.log(song1.play());
// attributos
console.log(song1.author);

const song2 = new Song('bad bunny', 'safaera');
console.log(song2.play());
console.log(song2.author);
