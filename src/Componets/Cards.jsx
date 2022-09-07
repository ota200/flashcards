import '../App.css';
import { useState } from "react";

const Card = (props) =>{

  const [tileVisable,setTitleVisable] = useState("visible")
  const [infoVisable,setInfoVisable] = useState("hidden")

  function vis(){
    if (tileVisable === "hidden"){
      setTitleVisable("visible")
      setInfoVisable("hidden")

      console.log("set Title visable")

    } else {
      setInfoVisable("visible")
      setTitleVisable("hidden")
      console.log("set Info visable")

    }
  }

  return (
    <div className="container">

      <a onClick={vis} >
        <h1 style={{visibility: tileVisable}}> {props.title}</h1>
        <p style={{visibility: infoVisable}}>{props.info}</p>
      </a>

    </div>
  );
}

export default Card

