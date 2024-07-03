import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function GetRoles({setAllRoles}) {
    const url = 'http://193.19.100.32:7000/api/get-roles';
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false);

    const makeList = () => {
        const listItems = roles.map((role, index) => (
            <li key={index}>{role}</li>
        ));
        return <ul>{listItems}</ul>;
    }

    const getAnswer = () => {
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setRoles(data.roles);
            setAllRoles(data.roles);
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
            <h3>Шаг 1. Получите перечень ролей</h3>
            <button onClick={() => (getAnswer(), setLoading(true))}>Получить</button>
            {loading ? <CircularProgress size='2vw' color="secondary" /> : makeList()}
        </div>
  )
}
