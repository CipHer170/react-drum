const sounds = [
  {
    key: "Q",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
  {
    key: "W",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "E",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "A",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "S",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "D",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "Z",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "X",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "C",
    sound1: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    sound2: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
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
