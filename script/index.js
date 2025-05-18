const escolhe = document.getElementById("btn")
const res = document.getElementById("res")
const a = document.getElementById("a")
const img = document.getElementById("img")

let album = ["imagens/angels.jpg", "imagens/fire.jpg", "imagens/holy.jpg", "imagens/mentalize.jpeg", "imagens/paradisum.jpg", "imagens/reason.jpg", "imagens/ritual.jpg", "imagens/ritualive.jpg", "imagens/soldiers.jpg", "imagens/theatre.jpg", "imagens/theturn.jpg", "imagens/time.jpg", "imagens/virgo.jpg", "imagens/tolive.jpg"]

escolhe.addEventListener("click", () => {
    let aleatorio = Math.floor(Math.random() * album.length)
    let escolhido = album[aleatorio]

    img.src = escolhido
    res.textContent = "I É PRA ESCUTAR JOAO!"
    a.textContent = "Escuta seu album legal ai dogão"
})