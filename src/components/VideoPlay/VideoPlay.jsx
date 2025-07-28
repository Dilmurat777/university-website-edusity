import './VideoPlay.css';
import video_1 from '../../assets/video.mp4';
import { useRef } from 'react';

const VideoPlay = ({ showVideo, setShowVideo }) => {
  const closeRef = useRef(null);

  const closeVideo = (e) => {
    if (e.target === closeRef.current) {
      setShowVideo(false);
    }
  };

  return (
    <div
      className={`video-player ${showVideo === true ? '' : 'hide'}`}
      onClick={closeVideo}
      ref={closeRef}>
      <video src={video_1} autoPlay controls muted></video>
    </div>
  );
};

export default VideoPlay;
