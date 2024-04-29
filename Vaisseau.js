var posShipY = hauteur - 1; // Position en Y (ligne)
var posShipX = Math.floor((largeur - 1) / 2); // Position en X (colonne)

// Fonction pour lancer la partie en plaçant le vaisseau sur le plateau
function lancerPartie() {
    plateau[posShipY][posShipX].src = 'Bowser_ship.jpg'; 
}

function effaceShip() {
    plateau[posShipY][posShipX].src = 'fond_blanc.jpg'
}

function afficheShip() {
    plateau[posShipY][posShipX].src = 'Bowser_ship.jpg'
}
// Fonction pour déplacer le vaisseau en fonction de la touche de clavier appuyée
function deplacerVaisseau(event) {
    switch (event.code) {
        case "ArrowLeft":
        effaceShip();
        if (posShipX > 0) {
            posShipX--;
        }
        afficheShip();
        break;
    case "ArrowRight":
        effaceShip();
        if (posShipX < largeur - 1) {
            posShipX++;
        }
        afficheShip();
        break;
    case "ArrowUp":
        pewPew();
        break;
    }
}

// Ajouter un écouteur d'événement pour gérer les touches de clavier
window.addEventListener('keydown', deplacerVaisseau);