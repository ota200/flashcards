import { useState } from "react";

import Card from './Cards'

export default function Word() {

    const [titles,setTitles] = useState()

    const [infor,setInfor] = useState()

    const [list,setList] = useState([])

    const [numbers,setNumber] = useState(0)

    const base = {
      display: "flex",
      flexWrap: "nowrap",
      overflowX: "auto",
      webkitOverflowScrolling: "touch",
      msOverflowStyle: "-ms-autohiding-scrollbar", 
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    }

   /* const [clicks,setClicks] = useState(0)

    const [styles,setStyles] = useState()*/

    /*const ogposition = {
      right:"120%"
    }

    const newposition = {
      right:"80%"
    }*/


    const addCard =  (e) => {
      e.preventDefault()

      setNumber(numbers + 1)

      setList([...list, {

        title:titles,
        para:infor,
        key: numbers,
        id: Math.random()
        

      }])

      /*console.log(list)
      console.log("Title: " + titles)
      console.log("Info: " + infor)*/
    
    }

    const delCard = id => {
      setList(list.filter(item => item.id !== id))



    /*  for ( let x in list){
        x++
        console.log(list[x])
        setList(list.filter(item => item.id ))


      }*/
    }

    /*const clickStyle = (e) =>{
      if (clicks === 0){
        //alert("click")
        setClicks(1)
        setStyles(newposition)
      } 
      
      if (clicks === 1){
        //alert("click == 1")
        setClicks(0)
        setStyles(ogposition)


      }
    }*/
    

    return (
      <div>

        
        <div style={base} id="base">
        {list.map(item => {
          return (
            <div key={item.key} id={item.id}>

              <Card  title={item.title} info={item.para} click={() => delCard(item.id)} titlechange={(e) => {setTitles(e.target.value)}} infochange={e => setInfor(e.target.value)}> </Card>
              <p>Key: {item.key}</p>
              <p>Id: {item.id}</p>

            </div>

          )
        })}


        </div>

        <button onClick={addCard} className="create" title="create a new card"> + </button>




      </div>

    );
  }

  /*
          <label>
            <p>Title</p>
            <input type="text" onChange={(e) => {setTitles(e.target.value)}} name="title"/>
          </label>

          <label>
            <p>Not Title</p>
            <textarea type="text" onChange={e => setInfor(e.target.value)} name="info"/>
          </label>
          
                  <div className="forms">


          <button onClick={addCard}>Submit</button>

        </div>*/ 