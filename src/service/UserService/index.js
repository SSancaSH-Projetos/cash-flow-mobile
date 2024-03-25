const usuarios = [];
const url = process.env.EXPO_PUBLIC_API_URL;

export async function serviceLoginMethod (username, password) {
    try {
        const response = await fetch(url+"/api/login", {
          method: 'POST',
          body: `email=${username}&password=${password}`,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        if(response.ok){
          return true;
        }
        console.log(response);
       } catch (error) {
        console.log("erro: "+ error)
       }
       console.log("url global:"+url);
       return false;  
}
