//Créer une fonction score qui prend en paramètre un nombre et affiche “C’est gagné” si le nombre est supérieur ou égal à 80, 
// “Presque !” si le score est compris entre 50 et 80 non inclus 
// et “Retente ta chance !” si le score est strictement inférieur à 50

function score(value) {
  if (value >= 80) {
    console.log("C'est gagné !");
  } else if (value >= 50 && value < 80) {
    console.log("Presque !");
  } else {
    console.log("Retente ta chance !");
  }
}
score(91);