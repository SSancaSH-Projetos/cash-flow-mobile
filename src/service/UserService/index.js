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
       return false;  
}


export async function serviceLogoutMethod () {
  try {
      const response = await fetch(url+"/api/logout", {
        method: 'POST',
      });
      if(response.ok){
        console.log(response);
        return true;
      }
      console.log(response);
     } catch (error) {
      console.log("erro: "+ error)
     }
     return false;  
}

export async function verifyLoginMethod () {
    /*
      try {
        const response = await fetch(url+"/api/logout", {
          method: 'POST',
        });
        if(response.ok){
          console.log(response);
          return true;
        }
        console.log(response);
      } catch (error) {
        console.log("erro: "+ error)
      }
      return false;  
  */
      return false;
  
}

