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
          <a class="trash" onClick={props.click}>ijoijioj</a>

        </div>
        <div className='back'>
          <p> {props.info} </p>
          <a class="trash" onClick={props.click}><img src="./g.png" alt="g"></img></a>

        </div>


      </div>
    </div>
  );
}

export default Card

