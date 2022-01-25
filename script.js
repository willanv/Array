// Crie um array que receba 5 itens e exiba no console.
let num = [4, 2, 7, 9, 1]
console.log(`aqui tem ${num.length} itens`)

// Utilize um método para adicionar um nome ao inicio do array.

let Names = ['jose, maria, rafael']
Names.splice(0,0, "leo")
console.log(Names)

// Utilize um método para remover o último nome do array.

let names = ["jose", "maria", "rafael"]
let splice1 = names.splice(2,1)
console.log(names)

// Utilize um método para adicionar dois nomes ao fim do array.

let nome = ['jose, maria, rafael']
nome.push('alberto, felipe')
console.log(nome)

// Utilize um método para remover o primeiro nome do array.

let Nome = ["jose", "maria", "rafael"]
let splice2 = Nome.splice(0,1)
console.log(Nome)

// Utilize um método para organizar em ordem crescente o seguinte array:
// const numbers = [7,5,6,3,8,9,2,1,4]

let con = [7,5,6,3,8,9,2,1,4]
con.sort()
console.log(con)