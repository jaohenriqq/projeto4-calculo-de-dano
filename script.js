/*Escreva um programa que permita inserir o nome e o poder de um ataque de um personagem. Depois, de outro personagem, o nome, a quantidade de pontos de vida, o poder de defesa e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

Se o poder de ataque for maior do que a defesa e o defensor não possui um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.
Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de abmos os personagens.

EXEMPLO DE SAÍDA:

Situação 1:
John atacou. Wick sofreu 4 de dano e não possui escudo. Sua vida agora é 6.
Situação 2:
John atacou. Wick sofreu 2 de dano por possuir escudo. Sua vida agora é 8.
Situação 3:
John atacou, mas não afetou Wick. Nenhum dano causado!*/


let name1 =prompt('qual nome do personagem que vai atacar?')
let power = prompt(`qual é o nível do poder de ataque do ${name1}`)
let name2 = prompt('qual o nome do personagem que vai defender?')
let defense= prompt(`qual é o nível de defesa do ${name2}`)
let shield = prompt(`o ${name2} 
possui escudo?`)


if(power>defense & shield == 'não'){
 alert(`${name1} atacou. ${name2} sofreu ${power-defense} de dano,sua vida agora é de ${defense-(power-defense)}`)
} else if(shield =='sim'){
  alert(`${name1} atacou. ${name2} sofreu ${(power-defense)/2} de dano,sua vida agora é de ${defense-(power-defense)/2}`)
} else{
  alert(`${name1} atacou mas não afetou ${name2}.Nenhum dano causado`)
}
