import { useEffect, useState } from "react";
import "./App.css";
import sounds from "./sounds/Sounds.js";
import Switch from "@mui/material/Switch";

function App() {
  const [showButton, setShowButton] = useState("");
  const [vol, setVol] = useState(50);
  const [switchState, setSwitchState] = useState(true);
  const [switchOption, setSwitchOption] = useState(true);

  const typeVol = vol / 100;

  useEffect(() => {
    handleButton();
  }, []);

  const handleButton = () => {
    document.addEventListener("keydown", (event) => {
      start(event.key.toUpperCase());
    });
  };

  const start = (sound) => {
    const keyboard = document.getElementById(sound);
    setShowButton(sound);
    keyboard.play();
    if (switchState) {
      keyboard.volume = typeVol;
    }
    if (!switchState) {
      keyboard.volume = 0;
    }
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{showButton}</div>
        <div className="drumButtons">
          {sounds.map((sound) => {
            return (
              <button
                key={sound.key}
                onClick={() => {
                  start(sound.key);
                }}
                className="drum-pad"
                id={sound.sound1}
              >
                {sound.key}
                <audio
                  src={switchOption ? sound.sound1 : sound.sound2}
                  className="clip"
                  id={sound.key}
                ></audio>
              </button>
            );
          })}
        </div>
        {/* controls */}
        <div className="controls">
          <div className="switches">
            {" "}
            <p>{switchState ? "On" : "Off"}</p>
            <Switch
              className="switch"
              checked={switchState}
              onChange={() => setSwitchState(!switchState)}
            />
          </div>
          {/* volume controls */}
          <p id="showVolumeValue">Volume {vol} </p>
          <div className="manipulateVolume">
            <input
              type="range"
              min="0"
              max="100"
              className="manipulateVolume"
              id="manipulateVolume"
              onChange={(e) => setVol(e.target.value)}
              value={vol}
            />
          </div>
          {/* options */}
          <div className="options">
            <p>Options</p>
            <Switch
              className="switch"
              checked={switchOption}
              onChange={() => setSwitchOption(!switchOption)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
