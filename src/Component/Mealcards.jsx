import React from 'react'
import {NavLink} from 'react-router-dom';

const Mealcards = ({detail}) => {
    console.log(detail);

    if(detail===undefined){
      return null;// Don't show anything before search
    }
    if(detail===null){
      return<h2 style={{textAlign:"center"}}> Oops! Data Not Found</h2>
    }
      return (
    <div className='meals'>
        {detail.map((curItem)=>(
                  <div className='mealImg' key={curItem.idMeal}>
                  <img src={curItem.strMealThumb}/>
                  <p>{curItem.strMeal}</p>
                  <NavLink to={`/${curItem.idMeal}`}><button> View Recipe</button></NavLink>
                 </div>
        )
            )
        }

    </div>
    )
};

export default Mealcards;