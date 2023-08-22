import React from 'react';
import videoSrc from './video.mp4';
import useLocalStorage from './Hooks/custom_hooks/useLocalStorage';

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage('volume', '0');

  React.useEffect(() => {
    if (!video.current) return;

    const vol = Number(volume);

    if (vol >= 0 && vol <= 1) {
      video.current.volume = Number(volume);
    }
  }, [volume]);

  return (
    <div>
      <div className="flex">
        <button onClick={() => setVolume('0')}>0</button>
        <button onClick={() => setVolume('0.5')}>50</button>
        <button onClick={() => setVolume('1')}>100</button>
        <button onClick={() => setVolume('2')}>200 (Erro)</button>
      </div>
      <video controls ref={video} src={videoSrc}></video>
    </div>
  );
}

export default App;
