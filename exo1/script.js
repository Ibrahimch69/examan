class Personage{
    constructor(nom,prenom,force){
        this.nom=nom;
        this.prenom=prenom;
        this.force=force; 

    }
    sebattre(valeur){
        this.force=this.force + valeur;
    }
}
let ibra = new Personage('chergui','ibrahim',20)
let bilal = new Personage('chergui','bilal',20)
console.log(ibra);
ibra.sebattre(5);
console.log(ibra);