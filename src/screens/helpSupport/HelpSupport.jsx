import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import styles from "../helpSupport/helpSupport.module.scss"

function HelpSupport() {
  return (
  <div className={styles.parent_ramp}>
      <NavBar />

      <div className={styles.ramp}>
        <section className={styles.sec_1}>
          <main>
            {" "}
            <h3>Help & Support </h3>
          </main>
        </section>

        <section className={styles.sec_2}>
          <p>
            Welcome to our Help & Support page! We’re here to make your student
            living experience as smooth and stress-free as possible. Below,
            you’ll find answers to common questions and ways to get in touch
            with our support team.
          </p>
        </section>

        <section className={styles.sec_3}>
          <b>How do I book a room?</b>
          <ol>
            <li>Browse available properties on our website.</li>
            <li>Select your preferred accommodation and room type.</li>
            <li>
              Complete the online application and provide necessary documents.
            </li>
            <li>Pay the required deposit to secure your booking.</li>
            <li>Receive confirmation and move-in details via email.</li>
          </ol>
        </section>

        <section className={styles.sec_4}>
          <b>What documents do I need to book a room?</b>
          <div>
            {" "}
            <i>You’ll typically need:</i>
          </div>

          <li>A valid student ID or university acceptance letter.</li>
          <li>A form of identification (passport or national ID).</li>
          <li>Proof of payment for the booking deposit.</li>
        </section>

        <section className={styles.sec_4}>
          <b>What payment methods do you accept?</b>
          <div>
            <i>We accept payments via:</i>
          </div>
          <li>Credit/Debit Card</li>
          <li>Bank Transfer</li>
          <li>PayPal (if applicable)</li>
        </section>

        <section className={styles.sec_4}>
          <b>Are there any additional fees?</b>
          <p>
            Depending on the property, you may be required to pay a security
            deposit, utility charges, or maintenance fees. Please check your
            lease agreement for details.
          </p>
        </section>

        <section className={styles.sec_4}>
          <b>When is rent due?</b>
          <p>
            {" "}
            Rent is typically due yearly or as per the contract agreement. You
            will receive reminders in a month before each due date.
          </p>
        </section>

        <section className={styles.sec_4}>
          <b>When can I move in?</b>
          <p>
            Move-in dates are specified in your contract. You will receive
            details about key collection and check-in procedures before your
            arrival.
          </p>
        </section>

        <section className={styles.sec_4}>
          <b>What should I bring?</b>
          <p>
            Most accommodations provide basic furnishings. However, you may need
            to bring bedding, kitchen utensils, and personal essentials.
          </p>
        </section>

        {/* <section>
  <b>Is Wi-Fi included?</b>
  <p>Yes, all our properties come with high-speed internet access. Details on how to connect will be provided at check-in.

</p>
</section> */}

        <section className={styles.sec_4}>
          <b>Can I have visitors?</b>
          <p>
            Yes, guests are allowed, but they must follow the property’s visitor
            policy. Some properties may have restrictions on overnight stays.
          </p>
          <div>
            However we do not allow men to enter our girls only accommodation
            for privacy reasons
          </div>
        </section>

        <section className={styles.sec_4}>
          <b>How do I report a maintenance issue?</b>
          <div>
            {" "}
            <i>You can report maintenance issues through:</i>
          </div>

          <li>Our online maintenance request form.</li>
          <li>
            Emailing our maintenance team at{" "}
            <a href="maintenance@studylodge.org">maintenance@studylodge.org</a>.
          </li>
          <li>Calling our 24/7 emergency helpline at [Phone Number].</li>
        </section>

        <section className={styles.sec_4}>
          <b>How long will it take to fix an issue?</b>
          <div>
            {" "}
            <i>Response times depend on the severity of the issue: </i>
          </div>
          <li>
            Emergency repairs (e.g., heating failure, water leaks): Within 24
            hours.
          </li>
          <li>
            General repairs (e.g., broken furniture, minor leaks): 3-5 business
            days.
          </li>
        </section>

        <section className={styles.sec_4}>
          <b>What is the notice period for moving out?</b>
          <p>
            Notice periods vary depending on your contract. Typically, you must
            give at least [X weeks/months] notice before moving out.
          </p>
        </section>

        <section className={styles.sec_4}>
          <b>Will I get my deposit back?</b>
          <p>
            Yes, provided there are no outstanding payments or damages to the
            property. Refunds are processed within [X] days after your move-out
            inspection.
          </p>
        </section>

        <section className={styles.sec_4}>
          <b>Need further assistance ?</b>
          <div>
            {" "}
            <i>Contact Us</i>
          </div>

          <main>
            {/* <img src="" alt="" /> */}
            <b>Phone:</b>
            <span> +234 7067276727</span>
          </main>

          <main>
            {/* <img src="" alt="" /> */}
            <b>Email:</b>
            <span>
              {" "}
              <a href="support@studylodge.org">support@studylodge.org</a>
            </span>
          </main>

          <main>
            {/* <img src="" alt="" /> */}
            <b>Whatsapp:</b>
            <span> +234 7067276727</span>
          </main>

          <main className={styles.last_main}>
            {/* <img src="" alt="" /> */}
            <b>Office Address:</b>
            <span> +234 7067276727</span>
          </main>
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default HelpSupport