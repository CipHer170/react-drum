import soundQ from "./qkeyboard.wav";
import soundW from "./wkeyboard.wav";
import soundE from "./ekeyboard.wav";
import soundS from "./skeyboard.wav";
import soundD from "./dkeyboard.wav";
import soundZ from "./zkeyboard.wav";
import soundX from "./xkeyboard.wav";
import soundC from "./ckeyboard.wav";
import soundA from "./akeyboard.wav";

const sounds = [
  { key: "q", sound1: soundQ, sound2: soundC },
  { key: "w", sound1: soundW, sound2: soundX },
  { key: "e", sound1: soundE, sound2: soundZ },
  { key: "a", sound1: soundA, sound2: soundD },
  { key: "s", sound1: soundS, sound2: soundS },
  { key: "d", sound1: soundD, sound2: soundA },
  { key: "z", sound1: soundZ, sound2: soundE },
  { key: "x", sound1: soundX, sound2: soundW },
  { key: "c", sound1: soundC, sound2: soundQ },
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
