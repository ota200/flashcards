import '../App.css';
import { useState } from "react";

const Card = (props) =>{

  const [num,setNum] = useState()


  const flip = (e) => {

    if (num === "second"){
      setNum("first")

    } else {
      setNum("second")
    }

  }

  return (
    <div className="container" onClick={flip}>

      <div className="center" id={num} >

        <div className="front">
          <h1> {props.title} </h1>
        </div>
        <div className='back'>
          <p> {props.info} </p>
        </div>

      </div>
    </div>
  );
}

export default Card

