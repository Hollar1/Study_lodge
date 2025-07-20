import React from "react";
import styles from "../privacyPolicy/privacyPolicy.module.scss"
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

function PrivacyPolicy() {
  return (
    <div className={styles.parent_ramp}>
      <div className={styles.ramp}>
        <NavBar />

        <section className={styles.sec_1}>
          <header>
            <h3>Privacy Policy </h3>
          </header>

          <p>
            At Study Lodge Limited, we prioritize your privacy and are committed
            to ensuring the confidentiality and protection of your personal
            information. This Privacy Policy outlines how we collect, use, and
            safeguard the information you provide when accessing or using our
            website. By using our services, you agree to the collection and use
            of information in accordance with this policy.
          </p>

          <div>
            <b>Personal Information Collected</b>
            <p>
              We may collect personal information that you provide directly to
              us, such as:
            </p>

            <li>Name</li>
            <li>Gender</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Home Address</li>
            <li>Identity Card</li>
            <li>Emergency Contact person Information</li>
            <li>Payment Information (if applicable)</li>
          </div>

          <div>
            <b>How We Use Your Information</b>
            <li>
              To process accommodation bookings and manage your reservations.
            </li>
            <li>
              To communicate important updates regarding your accommodation,
              such as availability and payment reminders.
            </li>
            <li>To respond to your inquiries, requests, or complaints</li>
            <li>
              To comply with legal obligations or protect the rights, safety,
              and security of our users.
            </li>
            <li>To provide, operate, and maintain our services</li>
            <li>To improve our website and user experience.</li>
          </div>

          <div>
            <b> Data Security</b>
            <p>
              We take the security of your personal data seriously and implement
              a variety of security measures to ensure its protection. These
              include encryption, firewalls, and secure data storage protocols.
              However, please note that no method of data transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <b>Sharing of Information</b>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. However, we may share your information with trusted
              third-party service providers who assist us in operating our
              website and providing services to you. These third parties are
              required to keep your information confidential and are prohibited
              from using it for any other purpose. We may also disclose personal
              information when required by law or in response to legal requests,
              such as to comply with a subpoena, court order, or legal process.
            </p>
          </div>

          <div>
            <b>Cookies and Tracking Technologies</b>

            <p>
              Our website uses cookies and similar tracking technologies to
              enhance your experience. These technologies help us understand how
              you interact with our website, allowing us to improve its
              functionality and tailor content to your preferences. You can
              control the use of cookies through your browser settings. However,
              disabling cookies may impact your experience and limit the
              features available on the website.
            </p>
          </div>
          <div>
            <b>Third-Party Links</b>
            <p>
              Our website may contain links to third-party websites that are not
              operated or controlled by us. We are not responsible for the
              privacy practices or content of these external sites. We encourage
              you to review the privacy policies of any third-party websites you
              visit.
            </p>
          </div>

          <div>
            <b>Your Rights and Choices</b>

            <main>
              {" "}
              <i>
                As a user of our website, you have the following rights
                regarding your personal information:
              </i>
            </main>

            <li>
              Access: You can request a copy of the personal information we hold
              about you.
            </li>
            <li>
              Correction: You can update or correct inaccurate or incomplete
              personal information.
            </li>
            <li>
              Deletion: You can request the deletion of your personal
              information, subject to legal obligations.
            </li>
            <li>
              Opt-Out: You can opt-out of receiving promotional emails or other
              marketing communications from us by following the unsubscribe
              instructions provided in the email.
            </li>
          </div>

          <main>
            <i>
              To exercise any of these rights, please contact us using the
              contact information provided at the end of this policy.
            </i>
          </main>

          <div>
            <b>Retention of Data</b>
            <p>
              We will retain your personal information only for as long as
              necessary for the purposes outlined in this policy, or as required
              by law. Once your data is no longer needed, it will be securely
              deleted or anonymized.
            </p>
          </div>

          <div>
            <b>Changes to This Privacy Policy</b>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technologies, or legal requirements. Any
              updates to this policy will be posted on this page, and the
              “Effective Date” at the top of the page will be revised. We
              encourage you to review this policy periodically for any updates.
            </p>
          </div>

          <div className={styles.sec_2}>
            <i>
              If you have any questions or concerns about this Privacy Policy,
              or if you would like to exercise your rights regarding your
              personal information, please contact us at:
            </i>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default PrivacyPolicy;