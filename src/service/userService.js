const usuarios = [
  { username: "adm@gmail.com", password: "12345678" },
  { username: "senai@gmail.com", password: "87654321" },
  { username: "julio@gmail.com", password: "24681012" },
];

export async function login(username, password) {
  for (const usuario of usuarios) {
    if (usuario.username === username && usuario.password === password) {
      return true;
    }
  }
  return false;
}