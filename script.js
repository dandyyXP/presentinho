const mensagens = [
  "eu amo seu sorriso ✨",
    "amo seus olhos perto dos meus 🙃",
    "você é minha pessoa favorita  🤍",
    "adoro quando você me abraça 💕",
    "sentir seu cheiro de perto me dá paz 🌸",
    "penso em você o dia todo 🗯️",
    "eu anseio pelo o teu beijo 💋",
    "meu sonho é que você fique comigo para sempre 🌟",
    "gosto mais de mim quando estou com você 😁",
    "quero ser a minha melhor versão para você 🤠",
    "o mundo com você fica mais colorido 🌈",
    "eu te quero tanto 💗",
    "você é meu lar favorito 🏡",
    "eu amo você ❣️"
  
];

let indice = 0;

function mostrarMensagem() {
  const container = document.getElementById("mensagens");
  const balao = document.createElement("div");

  balao.className = "balao";
  balao.innerText = mensagens[indice];

  // posição inicial acima do coração
  balao.style.top = "calc(50% - 80px)";

  container.appendChild(balao);

  // remove após animação
  setTimeout(() => {
    balao.remove();
  }, 3000);

  indice = (indice + 1) % mensagens.length;
}