import { v4 as uuidv4 } from "uuid";

const ChillHop = () => {
  return [
    {
      name: "Kinsfolk",
      artist: "Aarigod",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      colors: ["#A6C26D", "#312D21"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12997",
    },
    {
      name: "sopha",
      artist: "Plusma, Von Wegen",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      colors: ["#B7A9CA", "#DD9BAD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9061",
    },
    {
      name: "Hereafter",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      colors: ["#5B6EA8", "#436CAE"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
    },
    {
      name: "1993",
      artist: "Loupo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      colors: ["#005375", "#E18B8B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8683",
    },
  ];
};

export default ChillHop;
