import { Login } from '../components/Login';
import styles from '../styles/pages/Login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div>
        <img src="assets/logo_gradient.png" alt="Logo" />
      </div>
      <Login />
    </div>
  );
}
