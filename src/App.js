import { useState } from "react";
import "./App.css";
import sounds from "./sounds/Sounds.js";
import Switch from "@mui/material/Switch";

function App() {
  const [vol, setVol] = useState(50);
  const [switchState, setSwitchState] = useState(true);
  const [switchOption, setSwitchOption] = useState(true);

  // console.log(vol);

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
            // const  = sound;
            return (
              <button
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
            <p>Off/On</p>
            <Switch
              checked={switchState}
              onChange={() => setSwitchState(!switchState)}
            />
          </div>
          {/* volume controls */}
          <div className="manipulateVolume">
            <p id="showVolumeValue"> volume {vol}</p>
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
