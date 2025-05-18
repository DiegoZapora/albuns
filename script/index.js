const escolhe = document.getElementById("btn")
const res = document.getElementById("res")
const a = document.getElementById("a")
const img = document.getElementById("img")

let album = [
    {
       nome: "Algels Cry", 
       img: "imagens/angels.jpg"
    },

    {
       nome: "Fireworks",
       img: "imagens/fire.jpg"
    },

    {
       nome: "Holy Land",
       img: "imagens/holy.jpg"
    },

    {
       nome: "Mentalize",
       img: "imagens/mentalize.jpeg",
    },

    {
       nome: "In Paradisum",
       img: "imagens/paradisum.jpg",
        
    }, 
    {
       nome: "Reason",
       img: "imagens/reason.jpg",
    },

    {
       nome: "Ritual",
       img: "imagens/ritual.jpg",
    },

    {
       nome: "Ritualive",
       img: "imagens/ritualive.jpg", 
    },

    {
       nome: "Soldiers of Sunrise",
       img: "imagens/soldiers.jpg",
    },

    {
       nome: "Theatre of Fate",
       img: "imagens/theatre.jpg",
    },

    {
       nome: "The Turn of The Lights",
       img: "imagens/theturn.jpg",
    },

    {
       nome: "Time to be Free",
       img: "imagens/time.jpg",
    },

    {
       nome: "Virgo",
       img: "imagens/virgo.jpg", 
    },
    
    {
       nome: "To live Again Live",
       img: "imagens/tolive.jpg",
    },
]

escolhe.addEventListener("click", () => {
    let aleatorio = Math.floor(Math.random() * album.length)
    let escolhido = album[aleatorio]

    img.src = escolhido.img
    res.textContent = "I É PRA ESCUTAR JOAO!"
    a.textContent = `Album escolhido para ser escutado: ${escolhido.nome}`
})