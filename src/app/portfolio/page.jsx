// "use client"
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {

  return (
    
   <>
     <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.link}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/portfolio/illustrations" className={styles.link}>
          <span className={styles.title}>Website</span>
        </Link>
        <Link href="/portfolio/illustrations" className={styles.link}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
     </div>
   </>
  )
}

export default Portfolio