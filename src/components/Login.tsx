import styles from '../styles/components/Login.module.css';
import { GithubLogin } from './GithubLogin';

export function Login() {
  return (
    <div className={styles.loginWrapper}>
      <div>
        <img src="assets/moveit.png" alt="Logo" />
      </div>

      <div>
        <h1>Bem-Vindo ao Move.it!</h1>
        <p>
          Misture a técnica de Pomodoro com a realização de exercícios físicos,
          para você, que passa muito tempo na frente do computador.
        </p>
      </div>

      <div>
        <p>
          <img src="icons/github.svg" alt="github" />
          Faça login com seu GitHub para começar
        </p>
        <GithubLogin />
      </div>
    </div>
  );
}
