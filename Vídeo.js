import React, { useRef, useState } from "react";
import VídeoFooter from "./components/footer/VídeoFooter"
import VídeoSidebar from "./components/sidebar/VídeoSidebar"
import "./vídeo.css";
import { MusicVídeo } from "@mui/icons-material";

function Vídeo({likes, messages, shares, name, description, music, url}) {
  const vídeoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      vídeoRef.current.pause();
      setPlay(false);
    } else {
      vídeoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="vídeo">
      <video
        className="vídeo__player"
        ref={vídeoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VídeoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      <VídeoFooter 
        name={name}
        description={description}
        music={music}
      />
    </div>
  );
}

export default Vídeo;
