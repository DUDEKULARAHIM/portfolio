
// import React from 'react';
// import '../styles/video.css';

// const VideoCV = () => {
//   return (
//     <section className="video-section">
//       <h2>My Video CV</h2>
//       <video controls width="80%">
//         <source src="/assets/mycvvideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </section>
//   );
// };

// export default VideoCV;




import React from 'react';
import '../styles/video.css';

const VideoCV = () => {
  return (
    <section className="video-section">
      <h2>My Video CV</h2>
      <div className="underline"></div>
      <div className="video-wrapper">
        <video controls>
          <source src="/assets/mycvvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoCV;
