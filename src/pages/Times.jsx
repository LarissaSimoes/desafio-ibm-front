import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Times.css';
import { useNavigate } from 'react-router-dom';

const Times = () => {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/times'); 
        setTimes(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        console.error("Detalhes do erro:", error.response || error.message)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  const deleteAllPlayers = async () => {
    try {
      const response = await axios.delete('http://localhost:8080/jogador/all');
      if (response.status === 200) {
        alert('Todos os jogadores foram apagados com sucesso!');
        setTimes([]);
      }
    } catch (error) {
      alert('Erro ao apagar jogadores.');
      console.error("Erro ao apagar todos os jogadores:", error);
    }
  };

  const goToJogadorPage = () => {
    navigate('/jogador');
    };

  return (
    <div>
      <h1>Lista de Times</h1>
      <button onClick={deleteAllPlayers}>Apagar Todos os Jogadores</button>
      <button onClick={goToJogadorPage}>Adicionar Jogador ou Jogadora</button>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {Object.keys(times).map((timeKey, index) => (
            <div key={index}>
              <h2>{timeKey}</h2>
              <ul>
                {times[timeKey].map((nomeSobrenome, idx) => (
                  <li key={idx}>{nomeSobrenome}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Times;

