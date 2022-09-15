import soundQ from "../sounds/qkeyboard.wav";
import soundW from "../sounds/wkeyboard.wav";
import soundE from "../sounds/ekeyboard.wav";
import soundS from "../sounds/skeyboard.wav";
import soundD from "../sounds/dkeyboard.wav";
import soundZ from "../sounds/zkeyboard.wav";
import soundX from "../sounds/xkeyboard.wav";
import soundC from "../sounds/ckeyboard.wav";
import soundA from "../sounds/akeyboard.wav";

const sounds = [
  { key: "Q", sound1: soundQ, sound2: soundC },
  { key: "W", sound1: soundW, sound2: soundX },
  { key: "E", sound1: soundE, sound2: soundZ },
  { key: "A", sound1: soundA, sound2: soundD },
  { key: "S", sound1: soundS, sound2: soundS },
  { key: "D", sound1: soundD, sound2: soundA },
  { key: "Z", sound1: soundZ, sound2: soundE },
  { key: "X", sound1: soundX, sound2: soundW },
  { key: "C", sound1: soundC, sound2: soundQ },
];

export default sounds;

// api version;

// import React, { useEffect, useState } from "react";

// function Sounds() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetch("https://s3.amazonaws.com/freecodecamp/drums/");
//       const data = await res.json();
//       setData(data);
//     };
//     getData();
//   });

//   const start = (sound) => {
//     const keyboard = new Audio(sound);
//     keyboard.play();
//     keyboard.volume = 0.75;
//   };

//   return data?.map(({ key, sound }) => {
//     return <button onClick={start.bind(this, sound)}>{key}</button>;
//   });
// }

// export default Sounds;
