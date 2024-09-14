let hero = 
{
    nome: "Fulano de Tal",
    idade: 32,
    tipo: 
    {
        0: ["mago", "magia"],
        1: ["gurreiro", "espada"],
        2: ["monge", "artes marciais"],
        3: ["ninja", "shuriken"]
    }
}

console.log(`Nome do personagem: ${hero.nome}`)
console.log(`idade: ${hero.idade}`)


generateAtaque(hero)
function generateAtaque(hero)
{
  
    for(const index in hero.tipo)
    {
        let [tipoClasse, tipoAtaque] = hero.tipo[index]
        console.log(`O ${tipoClasse} atacou usando ${tipoAtaque}`)
    }
}
