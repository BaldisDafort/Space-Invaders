// missile.js

// Déclaration des variables pour l'emplacement du missile
var posMissileX;
var posMissileY;

// Fonction pour représenter un tir de missile
function pewPew() {
    // Initialiser les variables pour que le missile démarre juste au-dessus du vaisseau
    posMissileX = posShipX;
    posMissileY = posShipY -1; // Juste au-dessus du vaisseau

    // Modifier le plateau pour afficher le missile à l'emplacement correspondant
    plateau[posMissileY][posMissileX].src = 'Bomb_missile-removebg-preview.png'; // Remplacez 'missile_image.jpg' par le chemin de votre image de missile

    // Appelle récursivement la fonction deplacementMissile avec un délai
    setTimeout(function() {
        deplacementMissile(posMissileY, posMissileX);
    }, 150);
}

function deplacementMissile(y, x) {
    // Efface l'image du missile des coordonnées actuelles
    plateau[y][x].src = 'fond_blanc.jpg';

    // Détermine les nouvelles coordonnées du missile
    var newY = y - 1;
    var newX = x;

    // Vérifie si le missile est sorti du plateau
    if (newY < 0) {
        return; // Sort de la fonction si le missile est sorti du plateau
    }

    // Affiche l'image du missile aux nouvelles coordonnées
    plateau[newY][newX].src = 'Bomb_missile-removebg-preview.png';

    // Appelle récursivement la fonction deplacementMissile avec un délai

    setTimeout(function() {
        deplacementMissile(newY, newX);
    }, 150);
}

