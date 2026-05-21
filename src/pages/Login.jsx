import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo-area">
          <div className="logo">🥗</div>

          <h1>Viva Bem</h1>

          <p>
            Saúde e qualidade de vida
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="seuemail@gmail.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

          </div>

          <div className="input-group">

            <label>Senha</label>

            <input
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={(e)=>setSenha(e.target.value)}
            />

          </div>

          <button className="login-button">
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <button
            type="button"
            className="register-button"
          >
            Criar conta
          </button>

        </form>

      </div>
    </div>
  );
}