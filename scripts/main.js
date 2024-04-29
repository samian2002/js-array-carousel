let indiceCorrente = 0;
const immagini = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
];
function cambiaImmagine(direzione) {
    indiceCorrente += direzione;

    // Gestione dei limiti del carosello
    if (indiceCorrente >= immagini.length) {
        indiceCorrente = 0;
    } else if (indiceCorrente < 0) {
        indiceCorrente = immagini.length - 1;
    }

    // Aggiorna l'immagine visualizzata
    const immagineCorrente = document.getElementById('immagineCorrente');
    immagineCorrente.src = immagini[indiceCorrente];
}
// Imposta l'immagine iniziale
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('immagineCorrente').src = immagini[indiceCorrente];
});