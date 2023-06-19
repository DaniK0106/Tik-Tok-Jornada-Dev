import React, { useEffect, useState } from "react";
import "./App.css";
import Vídeo from "./pages/Vídeo";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  
  let maxHeight;
  if(window.innerHeight <= 800){
    maxHeight = window.innerHeight
  }

  const [vídeo, setVídeos] = useState([]);

  async function getVídeos() {
    const vídeosCollection = collection(db, "vídeos");
    const vídeosSnapshot = await getDocs(vídeosCollection);
    const vídeosList = vídeosSnapshot.docs.map((doc) => doc.data());
    setVídeos(vídeosList);
  }

  useEffect(() => {
    getVídeos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app__vídeos">
        {vídeo.map((item) => {
          return (
            <Vídeo
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
