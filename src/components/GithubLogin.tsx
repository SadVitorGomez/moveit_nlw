import styles from '../styles/components/Login.module.css';

export function GithubLogin() {
  return (
    <div className={styles.githubLoginContainer}>
      <input type="text" placeholder="Preencha com o seu username" />
      <button className={styles.loginButton}>
        <img src="icons/arrow-right.svg" alt="arrow right" />
      </button>
    </div>
  );
}
