import styles from "./Home.module.css"

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome To <br /><span className={styles.brandName}>rabiity</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus quia commodi ipsa esse veniam fugiat optio vero eos possimus asperiores, ullam beatae at expedita soluta repellat voluptas accusantium provident..
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum minus quia commodi ipsa esse veniam fugiat optio vero eos possimus asperiores, ullam beatae at expedita soluta repellat voluptas accusantium provident.
        </p>
        <button className={styles.ctaButton}>Start Booking</button>
      </div>
    </section>
  )
}
