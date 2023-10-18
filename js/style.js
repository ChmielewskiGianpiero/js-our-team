// - Creare l’array di oggetti con le informazioni fornite
const infoTeam = [
    {
        nome: "Wayne Barnett",
        ruolo:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo:"Office Manager",
        foto:"walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo:"Social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo:"Developer",
        foto:"scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
    }
]
console.log("ciao")

// Stampare su console e poi su DOM, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

let imgCardDOMElement = document.querySelector(".img-card")
let nameDOMElement = document.querySelector(".name")
let roleDOMElement = document.querySelector(".role");

console.log(nameDOMElement)


for (let i = 0; i < infoTeam.length; i++){
    let currentInfo = infoTeam[i];
    imgCardDOMElement.innerHTML = currentInfo.foto
    nameDOMElement.innerHTML = currentInfo.nome
    roleDOMElement.innerHTML = currentInfo.ruolo
    console.log(roleDOMElement)
    // console.log(currentInfo.nome + ": " + currentInfo.ruolo + ", " + currentInfo.foto);
}



