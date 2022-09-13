import "./App.css";
// import soundQ from "./sounds/qkeyboard.wav";
import sounds from "./sounds/sounds.js";

function App() {
  const start = (sound) => {
    const keyboard = new Audio(sound);
    keyboard.play();
  };

  const showVolumeValue = document.getElementById("showVolumeValue");
  const manipulateVolume = document.getElementById("manipulateVolume");

  return (
    <div className="App">
      <div className="drumMain">
        <div className="drumButtons">
          {sounds.map(({ key, sound }) => {
            return (
              <button key={key} onClick={start.bind(this, sound)}>
                {key}
              </button>
            );
          })}
        </div>
        {/* controls */}
        <div className="controls">
          <div className="switches">
            {" "}
            <p>On/Off</p>
            <input
              type="range"
              className="onOff"
              min="1"
              max="2"
            />
          </div>

          {/* volume controls */}
          <span className="volumeMain">
            <div className="manipulateVolume">
              <p id="showVolumeValue">showVolumeValue </p>
              <input
                type="range"
                min="0"
                max="100"
                className="manipulateVolume"
                id="manipulateVolume"
              />
            </div>
          </span>
          <div className="options">
            <p>Options</p>
            <input type="range" className="options" min="1" max="2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
