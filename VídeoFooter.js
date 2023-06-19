import React from "react";
import "./vídeoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VídeoFooter({name, description, music}) {
  return (
    <div className="vídeoFooter">
      <div className="vídeoFooter__text">
        <h3>@{ name }</h3>
        <p>{ description }</p>
        <div className="vídeoFooter__music">
          <MusicNoteIcon className="vídeoFooter__icon" />
          <div className="vídeoFooterMusic__text">
            <p>{ music }</p>
          </div>
          
        </div>
      </div>
      <img 
        className="vídeoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      
      />
    </div>
  );
}

export default VídeoFooter;
