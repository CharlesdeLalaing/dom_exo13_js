// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements
// ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet
// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété
// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle
// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4

let myObject = {
    nom: 'nicolas',
    age: 18,
}

//1
let myElement = Array.from(document.querySelector('div#object').children);
console.log(myElement);

//2
let exo2 = Object.entries(myObject);
console.log(exo2);

//3
exo2.forEach(element => {
    console.log(element);
});

//4
exo2.forEach(element => {
    console.log(element[0]);
});

//5
exo2.forEach((element,index) => {
    console.log(index + ' ' + element[0]);
});

//6
myElement.forEach(element => {
    console.log(element);
});




