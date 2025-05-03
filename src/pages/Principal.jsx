import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const Principal = () => {
  const [usuario, setUsuario] = useState(null);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;

    if (user) {
      const fetchUserData = async () => {
        try {
          const docRef = doc(db, 'usuarios', user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            setUsuario(docSnap.data());
          } else {
            setErro('Usuário não encontrado');
          }
        } catch (error) {
          setErro('Erro ao buscar dados');
        }
      };

      fetchUserData();
    }
  }, []);

  return (
    <div>
      <h1>Página Principal</h1>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      {usuario ? (
        <div>
          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Sobrenome:</strong> {usuario.sobrenome}</p>
          <p><strong>Data de Nascimento:</strong> {usuario.dataNascimento}</p>
        </div>
      ) : (
        <p>Carregando dados do usuário...</p>
      )}
    </div>
  );
};

export default Principal;
