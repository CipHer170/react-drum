import { useState } from "react";
import "./App.css";
import sounds from "./sounds/sounds.js";
import Switch from "@mui/material/Switch";

function App() {
  const [vol, setVol] = useState(50);
  const [switchState, setSwitchState] = useState(true);
  const [switchOption, setSwitchOption] = useState(true);

  const typeVol = vol / 100;

  console.log(switchState);

  const start = (sound) => {
    const keyboard = new Audio(sound);
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
        <div className="drumButtons" id="display">
          {sounds?.map(({ key, sound1, sound2 }) => {
            return (
              <button
                id="drum-pad"
                className="drum-pad"
                onClick={
                  switchOption
                    ? start.bind(this, sound1)
                    : start.bind(this, sound2)
                }
                key={key}
              >
                {key}
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
