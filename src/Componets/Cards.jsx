import '../App.css';
import { useState } from "react";

const Card = (props) =>{

  const [num,setNum] = useState("first")
  const [num2,setNum2] = useState(0)

  const enter = () =>{
    setNum2(1)
    console.log("enter")
  }

  const leave = () =>{
    setNum2(0)
    console.log("leave")

  }


  const flip = (e) => {

    if (num === "second" && num2 === 0){
      setNum("first")
      console.log("flip test")

    } 
    
    if (num === "first" && num2 === 0){
      setNum("second")
    }

    //console.log(event.currentTarget.id)

  }

  return (
    
    <div className="container" onClick={flip} >
      <div className="center" id={num}>

        <div className="front" id="front-card">
          <input id="front-card-text" type="text" onChange={props.titlechange} placeholder="Add your title" onMouseEnter={enter} onMouseLeave={leave} wrap="soft" maxlength="20" ></input>
          
          <p onClick={props.click}><svg className="trash" viewBox="0 0 54 68" xmlns="http://www.w3.org/2000/svg">
<path d="M2.91699 14.6388H51.5558V60.9999C51.5558 64.8659 48.4218 67.9999 44.5558 67.9999H9.917C6.05101 67.9999 2.91699 64.8658 2.91699 60.9999V14.6388Z" fill="#C6C6C6"/>
<path d="M10.4335 4.48611C10.7689 4.48611 11.0988 4.4018 11.393 4.24093L18.701 0.245175C18.9953 0.0843095 19.3252 0 19.6605 0H27.3543H35.0481C35.3834 0 35.7134 0.0843094 36.0076 0.245175L43.3156 4.24093C43.6098 4.4018 43.9398 4.48611 44.2751 4.48611H50.2243C51.089 4.48611 51.8558 5.04178 52.1249 5.86349L53.0576 8.7107C53.4813 10.0038 52.5178 11.3333 51.157 11.3333H3.07555C1.65049 11.3333 0.682639 9.88539 1.22751 8.56862L2.40567 5.7214C2.71506 4.9737 3.44452 4.48611 4.2537 4.48611H10.4335Z" fill="#C6C6C6"/>
</svg></p>


        </div>
        <div className='back'>
          
          <textarea id="front-card-text" type="text" onChange={props.infochange} placeholder="Add your information" onMouseEnter={enter} onMouseLeave={leave} wrap="soft" ></textarea>

          <p onClick={props.click}><svg className="trash" viewBox="0 0 54 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.91699 14.6388H51.5558V60.9999C51.5558 64.8659 48.4218 67.9999 44.5558 67.9999H9.917C6.05101 67.9999 2.91699 64.8658 2.91699 60.9999V14.6388Z" fill="#C6C6C6"/>
<path d="M10.4335 4.48611C10.7689 4.48611 11.0988 4.4018 11.393 4.24093L18.701 0.245175C18.9953 0.0843095 19.3252 0 19.6605 0H27.3543H35.0481C35.3834 0 35.7134 0.0843094 36.0076 0.245175L43.3156 4.24093C43.6098 4.4018 43.9398 4.48611 44.2751 4.48611H50.2243C51.089 4.48611 51.8558 5.04178 52.1249 5.86349L53.0576 8.7107C53.4813 10.0038 52.5178 11.3333 51.157 11.3333H3.07555C1.65049 11.3333 0.682639 9.88539 1.22751 8.56862L2.40567 5.7214C2.71506 4.9737 3.44452 4.48611 4.2537 4.48611H10.4335Z" fill="#C6C6C6"/>
</svg></p>

        </div>


      </div>
    </div>
  );
}

export default Card

