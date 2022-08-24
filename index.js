// CLASE
var Song = /** @class */ (function () {
    function Song(author, ipsum) {
        this.author = author;
        this.name = ipsum;
    }
    // comportamientos <-- metodos
    Song.prototype.play = function () {
        return "Playing... ".concat(this.name, " by ").concat(this.author);
    };
    return Song;
}());
// Obj e Instancia
var song1 = new Song('phoenix', 'LASSO');
// metodos
console.log(song1.play());
// attributos
console.log(song1.author);
var song2 = new Song('bad bony', 'safaera');
console.log(song2.play());
console.log(song2.author);
