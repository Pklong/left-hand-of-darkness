export const Client_ID = "0b2a71cd658ee68ea74a"

export const loginUser = code => {
  return fetch(`http://localhost:8080/auth?code=${code}`)
}
