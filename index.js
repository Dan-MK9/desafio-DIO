let heroi = ""
let xp = 1000

switch (true) {

    case xp <= 1000:
        console.log("O herói de nome " + heroi + "está no elo FERRO, o mais baixo elocom " + xp + " xp!")

    case xp >= 1000 && xp <= 2000:
        console.log ("O herói de nome " + heroi + "está no elo BRONZE com " + xp + " xp!")
        break;

    case xp >= 2000 && xp <= 5000:
        console.log("O herói de nome " + heroi + " está no elo PRATA com " + xp + " xp!")
        break;

    case xp >= 5000 && xp <= 7000:
        console.log("O herói de nome " + heroi + " está no elo OURO com " + xp + " xp!")
        break;

    case xp >= 7000 && xp <= 8000:
        console.log("O herói de nome " + heroi + " está no elo PLATINA com " + xp + " xp!")
        break;

    case xp >= 8000 && xp <= 9000:
        console.log("O herói de nome " + heroi + " está no elo ASCENDENTE com " + xp + " xp!")
        break;

    case xp >= 9000 && xp <= 10000:
        console.log("O herói de nome " + heroi + " está no elo IMORTAL com " + xp + " xp!")
        break;

    case xp >= 10000:
        console.log("O herói de nome " + heroi + " está no elo RADIANTE, o mais alto elo com " + xp + " xp!") 
}