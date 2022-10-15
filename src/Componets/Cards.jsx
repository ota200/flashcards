import '../App.css';
import { useState } from "react";

const Card = (props) =>{

  const [num,setNum] = useState("first")
  const [num2,setNum2] = useState(0)
  const [num3,setNum3] = useState("false")

  const [editTitles,setEditTitles] = useState()

  const [editInfos,setEditInfos] = useState()

  const enter = (e) =>{
    setNum2(1)
    console.log("Eenter")
  }

  const leave = (e) =>{
    console.warn(e.target.contenteditable)
    setNum2(0)
    console.log("Lleave")

  }


  const enter2 = (e) =>{
    if (num3 === "true"){
      setNum2(1)
      console.log("Eenter")
      } else {
        setNum2(0)
      }
  }

  const leave2 = (e) =>{
    console.warn(e.target.contenteditable)
    setNum2(0)
    console.log("Lleave")

  }

  const editMode = () =>{

    if (num3 === "true"){
      setNum3("false")
      /*setEditTitles(Title)
      setEditInfos(Info)*/
      console.log("Edit mode off")


    } else {
      setNum3("true")
     /* setEditTitles(editTitle)
      setEditInfos(editInfo)*/
      console.log("Edit mode on")

    }

  }


  const flip = (e) => {

    if (num === "second" && num2 === 0){
      setNum("first")
      console.log("flip test")

    } 
    
    if (num === "first" && num2 === 0 ){
      setNum("second")
    }

    //console.log(event.currentTarget.id)

  }



  /*const editTitle = <input id="front-card-text" type="text" onChange={props.titlechange} placeholder="Add your title"   wrap="soft" maxlength="20" onMouseEnter={enter} onMouseLeave={leave} ></input>

  const Title = <p>{props.title}</p>

  const Info = <p>{props.info}</p>

  const editInfo = <textarea id="front-card-text" type="text" onChange={props.infochange} placeholder="Add your information"  wrap="soft" onMouseEnter={enter} onMouseLeave={leave}></textarea>
*/

  return (
    
    <div className="container" onClick={flip} >
      
      <div className="center" id={num}>

        <div className="front" id="front-card">

          <h1 contenteditable={num3} onChange={props.titlechange} onMouseEnter={enter2} onMouseLeave={leave2}  >Title</h1>
          
          <button onClick={props.click}></button>
          <button onClick={editMode} onMouseEnter={enter} onMouseLeave={leave}>edit</button>


        </div>
        <div className='back'>
          
          <pre contenteditable={num3} onChange={props.infochange}  onMouseEnter={enter2} onMouseLeave={leave2}  >Info</pre>

          <button onClick={editMode} onMouseEnter={enter} onMouseLeave={leave} onDoubleClick={editMode}>edit</button>

          <button onClick={props.click}></button>

        </div>


      </div>

    </div>
  );
}

export default Card

