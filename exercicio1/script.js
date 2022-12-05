
let querMaisCoxinha = prompt("Deseja comer mais coxinhas?\nDigite 'S' para Sim,\nDigite 'N' para Não").toLocaleLowerCase()
let conta = 0

while(querMaisCoxinha === 's'){
    conta = conta + 2.50
    querMaisCoxinha = prompt("Deseja comer mais coxinhas?\nDigite 'S' para Sim,\nDigite 'N' para Não").toLocaleLowerCase()
 // conta+=2.50

}

console.log("Valor total=", conta)