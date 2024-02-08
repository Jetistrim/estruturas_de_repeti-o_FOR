for(let i = 1; i <= 31; i++){
    dia.innerHTML += `<option>${i}</option>`
}

const meses = ["Janeiro", "Fevereiro", "Março", "Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]

for(let a = 0; a < meses.length; a++){
    mes.innerHTML += `<option>${meses[a]}</option>`
}

let data = new Date()
let anos = [data.getFullYear()]
let c = 1

for (let b = 0; b < 101; b++){
    ano.innerHTML += `<option>${anos[b]}</option>`
    anos.push(data.getFullYear() - c)
    c++
}