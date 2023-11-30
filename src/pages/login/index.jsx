import { NavLink } from "react-router-dom";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <main className="login">
      <div className="login-container">
        <img src="./svg/horizontal-logo.svg" alt="logo" className="mb-12" />
        <form onSubmit={handleSubmit}>
          <h1>Faça parte do Alumni.</h1>

          <label htmlFor="email">Login</label>
          <input
            type="email"
            id="email"
            placeholder="Email ou telefone"
            required
          />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha" required />

          <p>Esqueceu sua senha?</p>
          <button className="b2-btn-layout w-full my-6">Acessar</button>
          <button className="google-btn-layout w-full my-4">
            <img src="./svg/google.svg" alt="google" />
            ou entre com o Google
          </button>
        </form>
        <p>
          Não tem uma conta?{" "}
          <NavLink to="/register" className="text-blue-600">
            Cadastre-se
          </NavLink>
        </p>
      </div>
    </main>
  );
};

export default Login;
