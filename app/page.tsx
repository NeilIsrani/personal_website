'use client'
import Image from 'next/image'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [isResumeExpanded, setIsResumeExpanded] = useState(false)

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerText}>
          <h1 className={styles.name}>Neil Israni</h1>
          <h1 className={styles.description}>Backend Software Engineer and Data Engineer</h1>
        </div>
        <div className={styles.profileSection}>
          <Image
            src="/person.jpeg"
            alt="Neil Israni"
            width={200}
            height={200}
            className={styles.profileImage}
          />
          <button
            onClick={() => setIsResumeExpanded(!isResumeExpanded)}
            className={styles.resumeToggle}
          >
            {isResumeExpanded ? 'Hide' : 'Resume'}
          </button>
          {isResumeExpanded && (
            <div className={styles.resumeViewer}>
              <iframe
                src="/Neil_Israni_Resume_Vanguard.pdf"
                className={styles.resumeIframe}
                title="Neil Israni Resume"
              />
            </div>
          )}
        </div>
      </div>

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
    </main>
  )
}

