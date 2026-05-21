import "./Dashboard.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const [dados, setDados] = useState(null);

  const [abaAtual, setAbaAtual] = useState("dashboard");

  const navigate = useNavigate();

  useEffect(() => {

    fetch("http://localhost:3000/dashboard")
      .then((response) => response.json())
      .then((data) => {
        setDados(data);
      });

  }, []);

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  if (!dados) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}

      <aside className="sidebar">

        <div className="logo">
          <h2> Viva Bem</h2>
          <p>Sistema nutricional</p>
        </div>

        <div className="menu">

          <button
            className={abaAtual === "dashboard" ? "active" : ""}
            onClick={() => setAbaAtual("dashboard")}
          >
             Dashboard
          </button>

          <button
            className={abaAtual === "pacientes" ? "active" : ""}
            onClick={() => setAbaAtual("pacientes")}
          >
             Pacientes
          </button>

          <button
            className={abaAtual === "planos" ? "active" : ""}
            onClick={() => setAbaAtual("planos")}
          >
             Criar Planos
          </button>

          <button
            className={abaAtual === "consultas" ? "active" : ""}
            onClick={() => setAbaAtual("consultas")}
          >
             Consultas
          </button>

        </div>

        <button
          className="logout-button"
          onClick={logout}
        >
          Sair
        </button>

      </aside>

      {/* CONTEÚDO */}

      <main className="dashboard-content">

        {/* DASHBOARD */}

        {abaAtual === "dashboard" && (
          <>
            <div className="dashboard-header">
              <h1>Dashboard</h1>
              <p>Resumo geral do sistema</p>
            </div>

            <div className="cards">

              <div className="card">
                <h3>Pacientes</h3>
                <p>{dados.usuarios}</p>
              </div>

              <div className="card">
                <h3>Consultas</h3>
                <p>{dados.consultas}</p>
              </div>

              <div className="card">
                <h3>Planos</h3>
                <p>{dados.atendimentos}</p>
              </div>

            </div>
          </>
        )}

        {/* PACIENTES */}

        {abaAtual === "pacientes" && (
          <>
            <div className="dashboard-header">
              <h1>Pacientes</h1>
              <p>Lista de pacientes cadastrados</p>
            </div>

            <div className="extra-section">

              <table className="table">

                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Ana Silva</td>
                    <td>24</td>
                    <td>Ativo</td>
                  </tr>

                  <tr>
                    <td>Lucas Costa</td>
                    <td>31</td>
                    <td>Ativo</td>
                  </tr>

                  <tr>
                    <td>Maria Souza</td>
                    <td>28</td>
                    <td>Inativo</td>
                  </tr>
                </tbody>

              </table>

            </div>
          </>
        )}

        {/* PLANOS */}

        {abaAtual === "planos" && (
          <>
            <div className="dashboard-header">
              <h1>Criar Plano Alimentar</h1>
              <p>Monte planos personalizados</p>
            </div>

            <div className="extra-section">

              <form className="form">

                <input
                  type="text"
                  placeholder="Nome do paciente"
                />

                <textarea
                  placeholder="Descrição do plano alimentar"
                ></textarea>

                <button type="submit">
                  Salvar Plano
                </button>

              </form>

            </div>
          </>
        )}

        {/* CONSULTAS */}

        {abaAtual === "consultas" && (
          <>
            <div className="dashboard-header">
              <h1>Consultas</h1>
              <p>Agenda nutricional</p>
            </div>

            <div className="extra-section">

              <div className="consulta-card">
                <h3>João Pedro</h3>
                <p>21/05/2026 - 14:00</p>
              </div>

              <div className="consulta-card">
                <h3>Fernanda Lima</h3>
                <p>22/05/2026 - 09:30</p>
              </div>

            </div>
          </>
        )}

      </main>

    </div>
  );
}