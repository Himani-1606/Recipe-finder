import React, { useState } from 'react'
import Mealcards from './Mealcards';


const Mainpage = () => {
    const [data,setData]  =useState();
    const [search, setSearch] = useState("");
    const [msg, setMsg] = useState("")
    const [searched, setSearched] = useState(false);
     

    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const myFun = async () =>{
        if(search == ""){
            setMsg("Please Enter Something")
            setData(null); // clear previous results
            setSearched(false);
        }else{
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
        console.log(jsonData.meals);

        setData(jsonData.meals)
         setSearched(true);

           if (jsonData.meals === null) {
                setMsg("No result found");
            } else {
                setMsg("")
        }
    }
}
     console.log(data);
  return (
    <>
        <h1 className='head'>FOOD RECIPE APP</h1>
        <div className='container'>
            <div className='searchBar'>
                <input type='text' placeholder='Enter Dish' onChange={handleInput}/>
                <button onClick={myFun}>Search</button>
            </div>
            <h4 className='msg'>{msg}</h4>
              {/* ✅ Show "Your result is:" when data is valid */}
                {searched && data && <h3 className='msg'>Your result is:</h3>}
            <div>
            <Mealcards detail={data}/>
            </div>
        </div>
    </>
  )
}

export default Mainpage