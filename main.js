heroi = {
  nome: "Gandalf",
  xp: 10001,

  classificador() {
    if (this.xp <= 1000) {
      return "Ferro";
    } else if (this.xp > 1000 && this.xp <= 2000) {
      return "Bronze";
    } else if (this.xp > 2000 && this.xp <= 5000) {
      return "Prata";
    } else if (this.xp > 5000 && this.xp <= 7000) {
      return "Ouro";
    } else if (this.xp > 7000 && this.xp <= 8000) {
      return "Platina";
    } else if (this.xp > 8000 && this.xp <= 9000) {
      return "Ascendente";
    } else if (this.xp > 9000 && this.xp <= 10000) {
      return "Imortal";
    } else if (this.xp > 10000) {
      return "Radiante";
    }
  },
};

console.log(
  `O heroi de nome ${heroi.nome} está no nível de ${heroi.classificador()}`
);
