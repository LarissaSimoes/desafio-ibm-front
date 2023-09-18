import React, { useState } from 'react';
import axios from 'axios';
import './Jogador.css';
import { useNavigate } from 'react-router-dom';

const AddPlayer = () => {
  const [player, setPlayer] = useState({ firstName: '', lastName: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({ ...player, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const fullName = `${player.firstName} ${player.lastName}`;
  console.log("Enviando nome completo:", fullName);

  try {
    const response = await axios.post('http://localhost:8080/jogador', { nome: fullName });
    if (response.status === 200) {
      alert('Jogador adicionado com sucesso!');
      setPlayer({ firstName: '', lastName: '' });
    }
  } catch (error) {
    alert('Erro ao adicionar jogador.');
  }
};

  const goToTimesPage = () => {
    navigate('/times');
  };

  return (
    <div className="add-player-container">
      <h1>Adicionar novo jogador</h1>
      <form className="add-player-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Primeiro nome:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={player.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Sobrenome:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={player.lastName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Adicionar Jogador ou Jogadora</button>
      </form>
      <button onClick={goToTimesPage}>Ir para Lista de Times</button> 
    </div>
  );
};

export default AddPlayer;
