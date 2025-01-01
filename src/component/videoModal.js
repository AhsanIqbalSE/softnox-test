import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

function VideoModal(props) {
  return (
    <div>
        <ModalVideo
          chanel="youtube"
          autoplay
          loop="1"
          isOpen={props.isOpen}
          videoId="lmY_WoTztJ8"
          onClose={props.close}
        />
    </div>
  );
}

export default VideoModal;
