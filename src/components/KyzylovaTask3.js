
const base64Coding = (email, code) => {
    let myBase = `${email}:${code}`;
    let encodedString = btoa(myBase);
    console.log(`${email}:${code} + BASE64 = ${encodedString}`);
} 


let email = 'test@mail.ru'
let code = '12345'

base64Coding(email, code)

