import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

export default function Professional() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Professional</h1>
        <p className={styles.subtitle}>Welcome to my professional portfolio</p>

        <section className={styles.experiencesSection}>
          <h2 className={styles.sectionTitle}>Past Experiences</h2>

          {/* Chloris Geospatial Experience */}
          <div className={styles.experienceBox}>
            <div className={styles.companyLogo}>
              <Image
                src="/chlor.png"
                alt="Chloris Geospatial"
                width={80}
                height={80}
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
                width={100}
                height={100}
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
                width={80}
                height={80}
                className={styles.logoImage}
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.experienceTitle}>Lankenau Medical Center</h3>
              <ul className={styles.descriptionList}>
                <li>Researched antibody-based therapeutics for autoimmune disease</li>
              </ul>
            </div>
            <div className={styles.projectImage}>
              <Image
                src="/bioart.png"
                alt="Bioart Project"
                width={100}
                height={100}
                className={styles.bottomImage}
              />
            </div>
          </div>
        </section>

        <Link href="/" className={styles.backButton}>
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}

