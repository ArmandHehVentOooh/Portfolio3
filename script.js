const phrases = [
  "Jeux Python",
  "Création et agencement de pages Internet : avec HTML, PHP, CSS & frameworks Bootstrap",
  "Programmation mobile Android avec Java",
  "Gestion de parc informatique avec GLPI et Cisco Packet Tracer",
  "Mise en place d'environnements Docker",
  "Data Analyse avec PowerBI",
  "Création de documentation"
];

let currentPhraseIndex = 0; // Index de la phrase actuelle
let isDeleting = false;     // Indique si on supprime ou écrit
let charIndex = 0;          // Index des caractères dans la phrase

// Paramètres d'animation
const typingSpeed = 100;        // Vitesse de frappe (ms)
const deletingSpeed = 50;       // Vitesse de suppression (ms)
const pauseAfterTyping = 1500;  // Pause après affichage complet
const pauseAfterDeleting = 500; // Pause après suppression complète

function typeWriter() {
  const fullText = phrases[currentPhraseIndex]; // Récupère la phrase actuelle

  if (!isDeleting) {
    // Ajouter un caractère
    charIndex++;
    document.getElementById("typewriter").textContent = fullText.substring(0, charIndex);

    // Si toute la phrase est affichée
    if (charIndex === fullText.length) {
      setTimeout(() => {
        isDeleting = true; // Passe au mode suppression
        typeWriter();
      }, pauseAfterTyping);
      return;
    }
  } else {
    // Supprimer un caractère
    charIndex--;
    document.getElementById("typewriter").textContent = fullText.substring(0, charIndex);

    // Si toute la phrase est supprimée
    if (charIndex === 0) {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Change de phrase
      isDeleting = false; // Passe au mode écriture
      setTimeout(typeWriter, pauseAfterDeleting); // Pause avant de reprendre
      return;
    }
  }

  // Continue l'animation avec la vitesse appropriée
  setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
}

// Démarrage de l'animation au chargement de la page
window.onload = typeWriter;
