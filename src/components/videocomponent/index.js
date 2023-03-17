// import React from "react";
// import ReactPlayer from "react-player";

// const VideoComponent = () => {
//   return (
//     <ReactPlayer
//       url="path/to/video.mp4"
//       width="100%"
//       height="auto"
//       playing
//       controls
//     />
//   );
// };

// export default VideoComponent;

import React, { forwardRef } from "react";

const VideoComponent = (
  props = {
    autoPlay,
    loops,
    controls,
    controlsList,
    muted,
    source: { src, type, autoPlay, controls },
  },
  ref
) => {
  return (
    <video ref={ref} {...props}>
      <source
        src="https://ik.imagekit.io/4w8k3nskbx/Batman5.mp4?updatedAt=1679043126953"
        type="video/mp4"
        autoPlay
        controls
        {...props.source}
      />
    </video>
  );
};

export default forwardRef(VideoComponent);
