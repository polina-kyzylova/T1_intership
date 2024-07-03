import React, { useState } from 'react';
import GetRoles from '../components/GetRoles';
import SignUp from '../components/SignUp';
import GetCode from '../components/GetCode';
import SetStatus from '../components/SetStatus';
import Base64 from '../components/Base64';
import '../index.css';

export default function MainPage() {
  const [allRoles, setAllRoles] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const [userCode, setUserCode] = useState('');
  const [baseCode, setBase64] = useState('');


  return (
      <div className='container'>
          <h1>Работа с API</h1>
          <h2>Выполнила Кызылова Полина <span>:)</span></h2>
          <GetRoles setAllRoles={setAllRoles} />
          {allRoles.length ? <SignUp allRoles={allRoles} setUserEmail={setUserEmail} /> : null}
          {userEmail ? <GetCode userEmail={userEmail} setUserCode={setUserCode} /> : null}
          {userCode ? <Base64 setBase64={setBase64} baseCode={baseCode} userCode={userCode} userEmail={userEmail} /> : null}
          {baseCode ? <SetStatus userEmail={userEmail} userCode={userCode} /> : null}
      </div>
  )
}
