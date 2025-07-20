import React from 'react'
import NavBar from "../../components/navBar/NavBar"
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import styles from "../../screens/about/about.module.scss"

function About() {
    const navigate = useNavigate()
  return (
   <div className={styles.parent_ramp}>
      <NavBar />

      <div className={styles.ramp}>
        <section className={styles.sec_1}>
          <main>
            <h3>About Us</h3>
          </main>

          <p>
            Welcome to Study Lodge Limited – Your Home Away from Home, At Study
            Lodge Limited, we understand that finding the perfect student
            accommodation is more than just securing a place to stay – it's
            about creating a comfortable, safe, and inspiring environment where
            students can thrive. Our mission is to provide high-quality,
            affordable, and well-located housing that caters to the unique needs
            of students from all backgrounds.{" "}
          </p>



<article className={styles.sec_00}>

<b>Who We Are</b>
         
         <p>
           Study Lodge Limited is a dedicated student accommodation provider
           committed to enhancing the student living experience. With years of
           experience in the industry, we have helped countless students find
           their ideal home, ensuring they have everything they need to focus
           on their studies and enjoy university life to the fullest.
         </p>
</article>


        <article className={styles.sec_00}>
        <b>What We Offer</b>

<li>
  {" "}
  <b>Prime Locations – </b>
  <span>
    Our accommodations are strategically located near major
    universities, public transport, and essential amenities to make
    student life convenient and enjoyable.
  </span>
</li>
<li>
  <b>Fully Furnished Spaces – </b>{" "}
  <span>
    We provide stylish, modern, and fully furnished rooms with all the
    essentials, so you can move in hassle-free.
  </span>
</li>

<li>
  <b>Safe & Secure – </b>
  <span>
    Your safety is our priority. We offer 24/7 security, CCTV
    surveillance, secure key access, and on-site management to ensure
    a worry-free stay.
  </span>
</li>

<li>
  <b>All-Inclusive Living – </b>
  <span>
    Say goodbye to unexpected bills! Our rent covers utilities like
    Wi-Fi, electricity, water, and heating, so you can budget easily.
  </span>
</li>

<li>
  <b>Vibrant Student Community – </b>
  <span>
    {" "}
    Living with us means being part of a friendly, diverse, and
    inclusive student community where you can make lifelong friends
    and connections.
  </span>
</li>

<li>
  <b>Dedicated Support –</b>
  <span>
    Our responsive support team is always available to assist you with
    any issues, ensuring a smooth and comfortable living experience.
  </span>
</li>
        </article>

        <article className={styles.sec_00}>
        <b>Why Choose Us?</b>
          <p>
            We are more than just a place to stay; we are a home where students
            can feel comfortable, safe, and supported. Our properties are
            designed with students in mind, offering an environment that
            encourages academic success, social interactions, and personal
            growth. Whether you're a first-year student looking for your first
            accommodation or a returning student in need of a better housing
            experience, we have the perfect space for you.
          </p>

        </article>


         <article className={styles.sec_00}>
         <b>Our Commitment</b>
          <div>
            {" "}
            <i>At Study Lodge Limited, we are committed to:</i>
          </div>
          <li>
            Providing high-quality student housing with top-notch facilities.
          </li>
          <li>Ensuring a safe and welcoming environment for all students.</li>
          <li>Ensuring a safe and welcoming environment for all students.</li>
          <li>
            Continuously improving our accommodations based on student feedback.
          </li>
         </article>
        </section>

        <div className={styles.sec_2}>
          <i>
            {" "}
            "Join the thousands of students who have made Study Lodge Limited
            their home away from home. We can’t wait to welcome you!"
          </i>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default About