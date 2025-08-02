import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const Mealinfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState();

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const data = await res.json();
      setInfo(data.meals[0]);
    };

    getInfo();
  }, [mealid]);

  return (
    <div
      style={{
        backgroundColor: '#fff8f0',
        minHeight: '100vh',
        padding: '40px 20px',
        position: 'relative',
        fontFamily: 'Segoe UI, sans-serif',
        boxSizing: 'border-box'
      }}
    >
      {/* Go to Home button */}
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <NavLink to="/" style={{ textDecoration: 'none' }}>
          <button
            style={{
              backgroundColor: '#fca311',
              color: '#14213d',
              padding: '10px 20px',
              border: '2px solid #14213d',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '15px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            ⬅ Go to Home
          </button>
        </NavLink>
      </div>

      {!info ? (
        <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Data Not Found</h2>
      ) : (
        <div
          style={{
            maxWidth: '800px',
            backgroundColor: '#fff',
            margin: '100px auto 0 auto',
            borderRadius: '16px',
            padding: '30px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <img
            src={info.strMealThumb}
            alt={info.strMeal}
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '12px',
              marginBottom: '20px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          />

          <h1
            style={{
              color: '#14213d',
              marginBottom: '10px',
              fontSize: '28px',
              textAlign: 'center'
            }}
          >
            Recipe Details
          </h1>

          <button
            style={{
              backgroundColor: '#e63946',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            {info.strMeal}
          </button>

          <div style={{ width: '100%' }}>
            <h3 style={{ color: '#14213d' }}>Instructions:</h3>
            <p
              style={{
                textAlign: 'justify',
                lineHeight: '1.7',
                fontSize: '16px',
                color: '#444',
                marginTop: '10px',
                whiteSpace: 'pre-line' // Ensures line breaks are preserved
              }}
            >
              {info.strInstructions}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mealinfo;
