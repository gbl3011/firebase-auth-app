import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import { firebaseConfig } from '../firebase/config'; // Certifique-se de que está importando a configuração

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [erro, setErro] = useState('');

  const navigate = useNavigate(); // Hook para navegação

  const handleCadastro = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const db = getFirestore();

    try {
      // Criação do usuário com email e senha
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Salvar dados adicionais no Firestore
      await setDoc(doc(db, 'usuarios', user.uid), {
        nome,
        sobrenome,
        dataNascimento,
        email,
      });

      alert('Cadastro realizado com sucesso!');

      // Após o cadastro, redireciona para a página de Login
      navigate('/login'); // Navegar para a página de Login
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleCadastro}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Sobrenome:</label>
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
};

export default Cadastro;
