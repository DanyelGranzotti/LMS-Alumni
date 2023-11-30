import { NavLink } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <main className="register">
      <div className="register-container">
        <img src="./svg/horizontal-logo.svg" alt="logo" className="mb-12" />
        <form onSubmit={handleSubmit}>
          <h1>Faça parte do Alumni.</h1>

          <label htmlFor="name">Nome completo</label>
          <input type="text" id="name" placeholder="Nome completo" required />

          <label htmlFor="email">Login</label>
          <input
            type="email"
            id="email"
            placeholder="Email ou telefone"
            required
          />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha" required />

          <button className="b2-btn-layout w-full my-6">Cadastrar</button>
          <button className="google-btn-layout w-full my-4">
            <img src="./svg/google.svg" alt="google" />
            ou entre com o Google
          </button>
        </form>
        <p>
          Já tem uma conta?{" "}
          <NavLink to="/login" className="text-blue-600">
            Acesse
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default Register;
