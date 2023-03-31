// Sélectionner tous les boutons "Ajouter au panier"
const boutonsAjouter = document.querySelectorAll(".ajouter");//creer une liste ordonnée(nodeList) des boutons "Ajouter au panier

// Sélectionner la liste du panier et le total
const listePanier = document.querySelector("#panier-liste");
const totalPanier = document.querySelector("#panier-total");

// Initialiser un objet pour stocker les produits dans le panier
let panier = {};

// Ajouter un événement onclic à chaque bouton "Ajouter au panier"
boutonsAjouter.forEach(bouton => {
  bouton.addEventListener("click", () => {
    // Récupérer les données du produit
    const produit = bouton.getAttribute("data-produit");
    const prix = bouton.getAttribute("data-prix");
    const image = bouton.getAttribute("data-image");
    
    // Si le produit est déjà dans le panier, augmenter sa quantité
    if (panier[produit]) {
      panier[produit].quantite++;
    } else {
      // Sinon, ajouter le produit au panier avec une quantité de 1
      panier[produit] = {
        quantite: 1,
        prix: prix,
        image: image
      };
    }
    
    // Mettre à jour l'affichage du panier
    afficherPanier();
  });
});

// Ajouter un événement de clic au bouton "Vider le panier"
document.querySelector("#vider-panier").addEventListener("click", () => {
  panier = {};
  afficherPanier();
});

// Ajouter un événement de clic au bouton "Passer à la caisse"
document.querySelector("#paiement").addEventListener("click", () => {
       panier = {}; 
	   afficherPanier();
       alert("Merci d'avoir acheté sur notre site !");
});
// Fonction pour afficher les produits dans le panier
function afficherPanier() {
  // Effacer la liste
  listePanier.innerHTML = "";
  
  // Parcourir tous les produits dans le panier
  Object.keys(panier).forEach(produit => {
    // Créer un élément de liste pour chaque produit
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${panier[produit].image}" alt="${produit}" width=100 height=100>
      <span>${produit} </span><span>Quantitée: ${panier[produit].quantite}</span><span> P.U: ${panier[produit].prix} DT</span> `;
    // Ajouter un bouton pour supprimer le produit du panier
    const boutonSupprimer = document.createElement("button");
    boutonSupprimer.innerText = "Supprimer";
    boutonSupprimer.addEventListener("click", () => {
      delete panier[produit];
      afficherPanier();
    });
    li.appendChild(boutonSupprimer);
    
    // Ajouter l'élément de liste à la liste du panier
    listePanier.appendChild(li);
	
  });
  
  // Calculer le total du panier et l'afficher
  const total = Object.keys(panier).reduce((acc, produit) => {
    return acc + (panier[produit].quantite * panier[produit].prix);
  }, 0);
  totalPanier.innerText = total.toFixed(2);
}
// incrimenter le compteur favories
const boutonsfavori = document.querySelectorAll('.favor');
var nbFavoris = parseInt(localStorage.getItem('nbFavoris')) || 0;
var compteur = document.querySelector('.compteur');
compteur.innerHTML = nbFavoris;
boutonsfavori.forEach(bouton => {
bouton.addEventListener("click", (event) => { 
    nbFavoris++;
compteur.innerHTML = nbFavoris;
localStorage.setItem('nbFavoris', nbFavoris);
event.target.disabled = true;

    })
});
