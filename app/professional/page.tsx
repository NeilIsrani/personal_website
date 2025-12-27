import Link from 'next/link'
import styles from './page.module.css'

export default function Professional() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Professional</h1>
        <p className={styles.subtitle}>Welcome to my professional portfolio</p>
        <Link href="/" className={styles.backButton}>
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}

