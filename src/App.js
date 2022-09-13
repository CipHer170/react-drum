import "./App.css";
// import soundQ from "./sounds/qkeyboard.wav";
import sounds from "./sounds/sounds.js";

function App() {
  const start = (sound) => {
    const keyboard = new Audio(sound);
    keyboard.play();
  };
  return (
    <div className="App">
      <div className="drumMain">
        {/* drum buttons */}
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
        <div className="remoteDrum">
          <input type="range" min="1" max="2" className="onOff" />
          <span className="volumeMain">
            <p className="showVolumeValue">showVolumeValue </p>
            <div className="manipulateVolume">
              <input
                type="range"
                min="0"
                max="100"
                className="manipulateVolume"
              />
            </div>
          </span>
          <div className="options">options</div>
        </div>
      </div>
    </div>
  );
}

export default App;
