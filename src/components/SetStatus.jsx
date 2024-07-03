import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function SetStatus({userEmail, userCode}) {
  const url = 'http://193.19.100.32:7000/api/set-status';
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState('');

  const getAnswer = () => {
    let myBase = `${userEmail}:${userCode}`;
    let encodedString = btoa(myBase);
    setToken(encodedString);
    //console.log('base', encodedString);

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            "token": token,
            "status": "increased"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        response.json().then((data) => {
            setRes(data);
        })
    })
    .catch(error => {
        console.log('Error fetching data: ', error);
    })
    .finally(() => {
        setLoading(false);
    })
};

  return (
    <div className='card'>
        <h3>Шаг 5. Установите статус записи в таблицу кандидатов</h3>
        <button onClick={() => getAnswer()}>Получить</button>
        {loading ? <CircularProgress size='2vw' color="secondary" /> :<p className='answer'>{res}</p>}
    </div>
  )
}
