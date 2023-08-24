import React from 'react';
import videoSrc from '../../video.mp4';

export function UseRefExercicio() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const video = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    console.log(video.current);
  }, []);

  function handleVideoSpeed(speed: number) {
    if (video.current) {
      video.current.playbackRate = speed;
    }
  }

  async function handlePictureInPicture() {
    if (video.current) {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else {
        await video.current.requestPictureInPicture();
      }
    }
  }

  function handleForward(time: number) {
    if (video.current) {
      video.current.currentTime += time;
    }
  }

  function handleMute() {
    if (video.current) {
      video.current.muted = !video.current.muted;
    }
  }

  return (
    <div>
      <div className="flex">
        {!isPlaying ? (
          <button onClick={() => video.current?.play()}>Play</button>
        ) : (
          <button onClick={() => video.current?.pause()}>Pause</button>
        )}
        <button onClick={() => handleForward(2)}>+ 2s</button>
        <button onClick={() => handleVideoSpeed(1)}>1x</button>
        <button onClick={() => handleVideoSpeed(2)}>2x</button>
        <button onClick={handlePictureInPicture}>PiP</button>
        <button onClick={handleMute}>M</button>
      </div>
      <video
        controls
        ref={video}
        src={videoSrc}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      ></video>
    </div>
  );
}
