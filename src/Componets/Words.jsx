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
    }
    
    return (
      <div>
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

        <div className="base">
        {list.map(item => {
          return (
            <div key={item.key} id={item.id}>

              
              <Card  title={item.title} info={item.para} > <button id={item.id} onClick={() => delCard(item.id)}>Del</button> </Card>
              <p>Key: {item.key}</p>
              <p>Id: {item.id}</p>

            </div>
          )
        })}

        </div>



      </div>
    );
  }