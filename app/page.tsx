'use client'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Neil_Israni_Resume_2026.pdf'
    link.download = 'Neil_Israni_Resume_2026.pdf'
    link.click()
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.name}>Neil Israni</h1>
          <h1 className={styles.description}>Backend Software Engineer and Data Engineer</h1>
        </div>
        <div className={styles.profileImageContainer}>
          <Image
            src="/person.jpeg"
            alt="Neil Israni"
            width={200}
            height={200}
            className={styles.profileImage}
          />
        </div>
      </div>

      <h2 className={styles.subtitle}>Past Experiences</h2>

      <section className={styles.experiencesSection}>
        {/* Chloris Geospatial Experience */}
        <div className={styles.experienceBox}>
          <div className={styles.companyLogo}>
            <Image
              src="/chlor.png"
              alt="Chloris Geospatial"
              width={320}
              height={320}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.experienceTitle}>Chloris Geospatial</h3>
            <ul className={styles.descriptionList}>
              <li>Built backend software and tools for carbon data products</li>
            </ul>
          </div>
          <div className={styles.projectImage}>
            <Image
              src="/pipelines.png"
              alt="Pipelines Project"
              width={200}
              height={200}
              className={styles.bottomImage}
            />
          </div>
        </div>

        {/* Lankenau Experience */}
        <div className={styles.experienceBox}>
          <div className={styles.companyLogo}>
            <Image
              src="/lank.png"
              alt="Lankenau"
              width={320}
              height={384}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.experienceTitle}>Lankenau Institute for Medical Research</h3>
            <ul className={styles.descriptionList}>
              <li>Researched antibody-based therapies for autoimmune diseases</li>
            </ul>
          </div>
          <div className={styles.projectImage}>
            <Image
              src="/bioart.png"
              alt="Bioart Project"
              width={200}
              height={200}
              className={styles.bottomImage}
            />
          </div>
        </div>
      </section>

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

