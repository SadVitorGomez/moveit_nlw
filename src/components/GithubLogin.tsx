import Link from 'next/link';

import styles from '../styles/components/Login.module.css';

export function GithubLogin() {
  return (
    <Link href="/home">
      <button className={styles.githubButton}>
        <img src="icons/github.svg" alt="github" />
      </button>
    </Link>
  );
}
