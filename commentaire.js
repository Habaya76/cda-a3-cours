var bouton = document.querySelector('button')

console.log('hello');

function ajouterCommentaires() {
    var commentaire = document.querySelector('#commentaire')
    var comments = document.querySelector('#comments')
    comments.innerHTML += `<p> ${commentaire.value} </p>`
    var p = document.createElement('p')
    comments.appendChild(p)
    commentaire.value = ''
    bouton.removeEventListener('click',ajouterCommentaires)
}
bouton.addEventListener('click',ajouterCommentaires)
var somme = (a= 0, b= 0)=>{
    var resultat = a +b
    return resultat
}