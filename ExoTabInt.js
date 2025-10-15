//L’objectif de cet exercice est de créer un tableau comprenant 
//tous les nombres entiers compris entre les valeurs stockées 
//dans les variables min et max. Complétez la fonction rangeTable 
//afin que celle-ci renvoie la liste ordonnée des nombres 
//compris entre les valeurs min et max fournies en argument 
//(résultat attendu : [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5] )
//
function getRangeTable(minVal, maxVal) {
    const list = [];
    for(let i=minVal; i <= maxVal ; i++){
        list.push(i)
    }
return list
};
console.log(getRangeTable(-5, 5));