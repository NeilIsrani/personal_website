'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const experiences = [
    {
      image: '/chlor.png',
      label: 'Software Engineering Intern at Chloris Geospatial'
    },
    {
      image: '/lank.png',
      label: 'Research Assistant at Lankenau Medical Center'
    }
  ]

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Neil_Israni_Resume_2026.pdf'
    link.download = 'Neil_Israni_Resume_2026.pdf'
    link.click()
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.name}>Neil Israni</h1>
      <h1 className={styles.description}>Software and Data Engineer</h1>
      <h1 className={styles.domain}>Geospatial and Biomedical Sciences</h1>
      
      <h2 className={styles.subtitle}>Past Experiences</h2>
      
      <div className={styles.experiencesContainer}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceCard}>
            <Image
              src={experience.image}
              alt={experience.label}
              width={400}
              height={300}
              className={styles.experienceImage}
              priority
            />
            <p className={styles.imageLabel}>{experience.label}</p>
          </div>
        ))}
      </div>

      <div className={styles.bottomButtons}>
        <Link href="/personal" className={styles.button}>
          Personal
        </Link>
        <a 
          href="https://www.linkedin.com/in/neil-israni/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.button}
        >
          LinkedIn
        </a>
        <button onClick={handleDownloadResume} className={styles.button}>
          Download Resume
        </button>
      </div>
    </main>
  )
}

