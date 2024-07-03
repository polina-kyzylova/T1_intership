import React, { useState } from 'react'

export default function SignUp({allRoles, setUserEmail}) {
  const [userRole, setUserRole] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const url = 'http://193.19.100.32:7000/api/sign-up';


  const getAnswer = () => {
    if (name && lastName && email) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                "last_name": lastName,
                "first_name": name,
                "email": email,
                "role": userRole
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => {
            response.json().then((data) => {
                setAnswer(data);
            })
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('Error fetching data: ', error);
        })

        setUserEmail(email);
    } else {
        setAnswer('Не корректный ввод данных');
    }
  };


  return (
    <div className='card'>
        <h3>Шаг 2. Запишите нового кандидата</h3>

        <label>Имя:</label>
        <input value={name} onChange={e => setName(e.target.value)} required></input>

        <label>Фамилия:</label>
        <input value={lastName} onChange={e => setLastName(e.target.value)} required></input>

        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>

        <label>Роль:</label>
        <select onChange={e => setUserRole(e.target.value)}>
            {allRoles.map((role, index) => (
                <option key={index}>
                    {role}
                </option>
            ))}
        </select>

        <button onClick={getAnswer}>Записать</button>

        {answer ? <p className='answer'>{answer}</p> : null}
    </div>
  )
}
