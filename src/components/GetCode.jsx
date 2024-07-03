import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function GetCode ({userEmail, setUserCode}) {
    const url = `http://193.19.100.32:7000/api/get-code?email=${userEmail}`;
    const [hideCode, setHideCode] = useState('');
    const [loading, setLoading] = useState(false);

    const showResult = () => {
      if (loading) return ( <CircularProgress size='2vw' color="secondary" /> )
      else if (hideCode.length) return (<p className='answer'>Код кандидата: <span>{hideCode}</span></p>)
      else return null; 
    }

    const getAnswer = () => {
      setLoading(true);
      fetch(url)
      .then(response => {
          response.json().then((data) => {
              setUserCode(data);
              //console.log(data)
                let numbers = data.replace(data.slice(5, data.length - 5), '*'.repeat(data.length-10));
                //console.log(numbers);
              setHideCode(numbers)
          })
      })
      .catch(error => {
          console.log('Error fetching data: ', error);
      })
      .finally(() => {
        setLoading(false);
    })
    }

  return (
    <div className='card'>
        <h3>Шаг 3. Получите код кандидата</h3>
        <p>Email: {userEmail}</p>
        <button onClick={() => getAnswer()}>Получить</button>
        {showResult()}
    </div>
  )
}
