// Fonction pour initialiser l'alien et démarrer son parcours
function initAlien() {
    // Placer l'alien en haut à gauche de l'écran
    plateau[posAlienY][posAlienX].src = 'Mario-running.jpg'; // Remplacez 'alien_image.jpg' par le chemin de votre image d'alien

    // Démarrer le parcours de la grille par l'alien
    parcoursGrille();
}

// Fonction pour démarrer une partie
function lancerPartie() {
    // Appeler la fonction pour placer le vaisseau sur le plateau
    // (votre code existant pour placer le vaisseau sur le plateau)

    // Appeler la fonction pour initialiser l'alien et démarrer son parcours
    initAlien();
}

// Déclaration des variables pour la position de l'alien
var posAlienX = 0;
var posAlienY = 0;

// Fonction pour initialiser la position de l'alien
function initAlien() {
    // Placer l'alien en haut à gauche du tableau
    plateau[posAlienY][posAlienX].src = 'Mario-running.jpg'; // Remplacez 'Mario-running.jpg' par le chemin de votre image d'alien
}

// Fonction pour déplacer l'alien à une nouvelle position
function deplaceAlien(x, y) {
    // Efface l'image de l'alien de sa position actuelle
    plateau[posAlienY][posAlienX].src = 'fond_blanc.jpg'; // Remplacez 'fond_blanc.jpg' par le chemin de votre image vide

    // Met à jour les nouvelles coordonnées de l'alien
    posAlienX = x;
    posAlienY = y;

    // Affiche l'image de l'alien à la nouvelle position
    plateau[posAlienY][posAlienX].src = 'Mario-running.jpg'; // Remplacez 'Mario-running.jpg' par le chemin de votre image d'alien
}

// Fonction pour déplacer l'alien selon le schéma spécifié
function deplacerAlien() {
    // Si l'alien atteint le bord droit du plateau, descend d'une case et change de direction
    if (posAlienX === largeur - 1) {
        posAlienY++; // Descend d'une case
        // Déplace l'alien vers la gauche
        for (let x = largeur - 1; x >= 0; x--) {
            deplaceAlien(x, posAlienY);
        }
    } 
    // Si l'alien atteint le bord gauche du plateau, descend d'une case et change de direction
    else if (posAlienX === 0) {
        posAlienY++; // Descend d'une case
        // Déplace l'alien vers la droite
        for (let x = 0; x < largeur; x++) {
            deplaceAlien(x, posAlienY);
        }
    } 
    // Sinon, continue de déplacer l'alien dans sa direction actuelle
    else {
        // Si la direction est vers la droite, déplace l'alien vers la droite
        if (posAlienY % 2 === 0) {
            deplaceAlien(posAlienX + 1, posAlienY);
        } 
        // Sinon, déplace l'alien vers la gauche
        else {
            deplaceAlien(posAlienX - 1, posAlienY);
        }
    }
}

// Fonction pour initialiser l'alien et démarrer son déplacement
function initAlien() {
    // Placer l'alien en haut à gauche du tableau
    plateau[posAlienY][posAlienX].src = 'Mario-running.jpg'; // Remplacez 'Mario-running.jpg' par le chemin de votre image d'alien

    // Déplacer l'alien selon le schéma spécifié
    setInterval(deplacerAlien, 1000); // Appeler la fonction deplacerAlien toutes les secondes (ajustez selon vos besoins)
}
