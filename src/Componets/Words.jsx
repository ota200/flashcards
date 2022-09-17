import { useState } from "react";

import Card from './Cards'

export default function Word() {

    const [titles,setTitles] = useState()
    const [infor,setInfor] = useState()

    const [list,setList] = useState([])

    const [numbers,setNumber] = useState(0)

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
    
    return (
      <div>

        
        <div className="base" id="base">
        {list.map(item => {
          return (
            <div key={item.key} id={item.id}>

              <img  alt="trash" id={item.id} onClick={() => delCard(item.id)} className="del"></img>
              <Card  title={item.title} info={item.para} > </Card>
              <p>Key: {item.key}</p>
              <p>Id: {item.id}</p>

            </div>

          )
        })}


        </div>

        <div>

          <label>
            <p>Title</p>
            <input type="text" onChange={(e) => {setTitles(e.target.value)}} name="title"/>
          </label>

          <label>
            <p>Not Title</p>
            <textarea type="text" onChange={e => setInfor(e.target.value)} name="info"/>
          </label>

        </div>

        <button onClick={addCard}>Submit</button>

      </div>

    );
  }