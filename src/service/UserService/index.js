const usuarios = [];

export async function serviceLoginMethod (username, password) {
    return true;
}


//try {
//  const response = await fetch('http://10.110.12.25:8080/api/login', {
//    method: 'POST',
//    body: `email=${username}&password=${password}`,
//    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//  });
//  if(response.ok){
//    return true;
//  }
//  console.log(response);
//} catch (error) {
//  console.log("erro: "+ error)
//}
//return false;  