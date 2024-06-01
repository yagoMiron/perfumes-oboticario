const radios = document.querySelectorAll(".radio_btn");
const delay = (millisegundos) => {
  return new Promise((resolve) => setTimeout(resolve, millisegundos));
};
radios[0].checked = true;

for (let index = 0; index < radios.length; index++) {
  radios[index].addEventListener("click", () => {
    setThema(index);
  });
}

for (let index = 0; index < 15; index++) {
  await delay(10000);
  passaSlide();
}

function passaSlide() {
  const posicaoAtual = achaPosicao();
  const proximaPosicao = posicaoAtual + 1 >= 4 ? 0 : posicaoAtual + 1;
  radios[proximaPosicao].checked = true;
  setThema(proximaPosicao);
}

function achaPosicao() {
  for (let index = 0; index < radios.length; index++) {
    if (radios[index].checked == true) {
      return index;
    }
  }
  return 0;
}
function setThema(temaId) {
  switch (temaId) {
    case 0:
      document.documentElement.style.setProperty("--header-main", "#ffbc6fb5");
      document.documentElement.style.setProperty("--footer-border", "#d38519");
      document.documentElement.style.setProperty("--svg-menu", "url(../icons/menu-slide1.svg)");
      document.getElementById("logo").contentDocument.all[1].attributes[
        "fill"
      ].value = "#bd7615";
      break;
    case 1:
      document.documentElement.style.setProperty("--header-main", "#ffd3e4");
      document.documentElement.style.setProperty("--footer-border", "#b50036");
      document.documentElement.style.setProperty("--svg-menu", "url(../icons/menu-slide2.svg)");
      document.getElementById("logo").contentDocument.all[1].attributes[
        "fill"
      ].value = "#b50036";
      break;
    case 2:
      document.documentElement.style.setProperty("--header-main", "#ffe771");
      document.documentElement.style.setProperty("--footer-border", "#b08802");
      document.documentElement.style.setProperty("--svg-menu", "url(../icons/menu-slide3.svg)");
      document.getElementById("logo").contentDocument.all[1].attributes[
        "fill"
      ].value = "#b08802";
      break;
    case 3:
      document.documentElement.style.setProperty("--header-main", "#01494b");
      document.documentElement.style.setProperty("--footer-border", "#daa520");
      document.documentElement.style.setProperty("--svg-menu", "url(../icons/menu-slide4.svg)");
      document.getElementById("logo").contentDocument.all[1].attributes[
        "fill"
      ].value = "#daa520";
      break;
    default:
      break;
  }
}
