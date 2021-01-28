import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { User } from './types/usuario';

function App() {

   const [usuarios, setUsuarios] = useState([])

   useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
          .then(resposta => setUsuarios(resposta.data))
   }, [])
 
  return (
    <ul className="App">
      {
        usuarios !== null && 
        usuarios.map((usuario: User) => (
          <li key={usuario.id}>
            <p>{usuario.name}</p>
            <p>{usuario.phone}</p>
            <p>{usuario.email}</p>
            <p>{usuario.company.name}</p>
            <p>{usuario.address.city}</p>
            <p>{usuario.address.street}</p>
          </li>
        ))
      }
    </ul>
  );
}

export default App;
