import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password: senha
        })
      });

      if (!response.ok) {
        throw new Error("Login inválido");
      }

      const data = await response.json();

      // salva token
      localStorage.setItem("token", data.token);

      // redireciona
      navigate("/dashboard");

    } catch (error) {
      alert("Email ou senha inválidos");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo-area">
          <div className="logo">🥗</div>

          <h1>Viva Bem</h1>

          <p>Saúde e qualidade de vida</p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="seuemail@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button className="login-button" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <button
            type="button"
            className="register-button"
            onClick={() => alert("Cadastro ainda não implementado")}
          >
            Criar conta
          </button>

        </form>

      </div>
    </div>
  );
}