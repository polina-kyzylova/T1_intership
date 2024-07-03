import React from 'react'

export default function Base64 ({baseCode, setBase64, userEmail, userCode}) {
    const base64Coding = (email, code) => {
        let myBase = `${email}:${code}`;
        let encodedString = btoa(myBase);
        //console.log(`${email}:${code} + BASE64 = ${encodedString}`);
        setBase64(encodedString)
    } 

  return (
    <div className='card'>
        <h3>Шаг 4. Закодируйте данные в BASE64</h3>
        <button onClick={() => base64Coding(userEmail, userCode)}>Закодировать</button>
        {baseCode ? <p className='answer'>email:code + BASE64 = <span>{baseCode}</span></p> : null}
    </div>
  )
}
