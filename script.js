const passo = document.querySelectorAll(".part")
const inpuV = document.querySelectorAll("input")
let current = 0

function update() {
    passo.forEach((part,i)=>{
        part.classList.toggle("active", i === current)
    })
}

function next(){
    if(current < passo.length - 1){
        current++
        update()
    }
}

function recres(){
    if(current > 0){
        current--
        update()
    }
}

function check(){
    let erro = false
    inpuV.forEach(input => {
        if(input.value.trim() === ""){
            erro = true
        }
    })
    if(erro){
        alert("Erro: há campos vazios")
    } else {
        alert("Tudo certo!")
    }
}