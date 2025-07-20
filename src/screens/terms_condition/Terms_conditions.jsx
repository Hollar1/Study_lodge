import React from "react";
import  styles from "../terms_condition/terms_conditions.module.scss"
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";

function Terms_conditions() {
  return (
    <div>
      <div className={styles.parent_ramp}>
        <div className={styles.ramp}>
          <NavBar />
          <header>
            <h3>Our Terms and Conditions </h3>
          </header>

          <section className={styles.sec_1}>
            <div>
              <b>Introduction</b>
              <p>
                Welcome to Study Lodge Limited ("Website"). These Terms and
                Conditions ("Terms") govern your use of our website and services
                related to student accommodation. By accessing or using our
                Website, you agree to be bound by these Terms.
              </p>
              <p>
                Accommodation" refers to the rooms and facilities provided by
                StudyLodge. "Tenant" refers to the student who occupies the
                accommodation. "Landlord" refers to StudyLodge or its managing
                entity.
              </p>
            </div>

            <div>
              <b>Use of the Website</b>
              <li>
                You must be at least 18 years old or have legal permission from
                a guardian to use our services.
              </li>
              <li>
                You agree to use the Website only for lawful purposes and in
                compliance with these Terms.
              </li>
              <li>
                Any fraudulent, abusive, or harmful use of the Website is
                strictly prohibited
              </li>
            </div>
            <div>
              <b> Account Registration</b>
              <li>
                Users may be required to create an account to access certain
                features.
              </li>
              <li>
                You are responsible for maintaining the confidentiality of your
                account information.
              </li>
              <li>
                We reserve the right to suspend or terminate accounts that
                violate these Terms.
              </li>
            </div>
            <div>
              <b>Listing and Booking Accommodation</b>
              <li>
                All accommodations listed on the Website are owned and managed
                by Study Lodge Limited.
              </li>
              <li>
                Listings will include accurate descriptions, pricing, and
                availability of rooms or apartments.
              </li>
              <li>
                Users must review and understand the terms of their rental
                agreement before making a booking
              </li>
              <li>
                Any requests for additional services must be communicated
                through the platform.
              </li>
              <li>
                Booking confirmations will be provided upon successful payment.
              </li>
              <li>
                Any disputes or concerns regarding accommodation should be
                directed to Study Lodge Limited's customer service team.
              </li>
            </div>

            <div>
              <b>Lease Agreement</b>
              <li>
                The lease is a fixed-term agreement for a period of [12 months
                and above], commencing on the same day the occupant moves in.
              </li>
              <li>
                The agreement may be renewed or extended upon mutual consent of
                both parties.
              </li>
              <li>
                Rent payments must be made on or before the due date as
                specified in the lease agreement.
              </li>
              <li>
                Occupants must comply with all house rules and regulations
                outlined in the lease.
              </li>
              <li>
                Any damages beyond normal wear and tear will be the
                responsibility of the occupant
              </li>
              <li>
                Failure to adhere to the terms of the lease may result in
                eviction or legal action.
              </li>
            </div>

            <div>
              <b>Fees and Payments</b>
              <li>
                Some services on the Website may require payment, which will be
                clearly communicated.
              </li>
              <li>
                Users agree to pay all applicable fees and charges in accordance
                with our pricing policies.
              </li>
              <li>
                Rent is per year, payable in advance by the day of each year.
              </li>
              <li>
                A security deposit of [₦50,000.00] may be required before
                occupancy, refundable upon the end of the tenancy subject to
                deductions for damages or unpaid rent.
              </li>
            </div>

            <div>
              <b>Use of Premises</b>
              <li>
                The accommodation is for residential use only and must not be
                used for commercial activities.
              </li>
              <li>
                Subletting is strictly prohibited without prior written consent
                from Study Lodge Limited
              </li>
              <li>
                Occupants are expected to maintain cleanliness and good order
                within the premises.
              </li>
              <li>
                Noise levels must be kept at a reasonable level to avoid
                disturbances to other residents.
              </li>
              <li>
                Any illegal activities conducted within the premises will result
                in immediate termination of the lease and possible legal action.
              </li>
            </div>

            <div>
              <b>Maintenance and Repairs</b>
              <li>
                Tenants must keep the accommodation in good condition and report
                any damages or needed repairs immediately.
              </li>
              <li>
                Routine maintenance will be carried out by Study Lodge Limited.
              </li>
              <li>
                Tenants may be charged for repairs caused by negligence or
                misuse.
              </li>
              <li>
                Tenants must conduct themselves in a manner that does not
                disturb other residents.
              </li>
              <li>
                Noise levels should be minimized, especially during nighttime
                hours (10 PM to 6 AM).
              </li>
            </div>

            <div>
              <b>Termination of Tenancy</b>
              <li>
                The Landlord may terminate the lease for breach of terms,
                including non-payment of rent, damage to property, or
                misconduct.
              </li>
              <li>
                Tenants may terminate the lease by giving [e.g., 1 month’s]
                written notice.
              </li>
              <li>
                Upon termination, tenants must vacate the premises and return
                all keys and access cards.
              </li>
              <li>
                Any outstanding rent or charges must be settled before the
                tenant vacates the property.
              </li>
              <li>
                Failure to comply with move-out procedures may result in
                additional charges.
              </li>
            </div>

            <div>
              <b>Security and Safety</b>
              <li>
                Tenants must ensure that doors and windows are locked when
                leaving the premises.
              </li>
              <li>
                {" "}
                The use of illegal substances and hazardous materials is
                prohibited.{" "}
              </li>
              <li>
                {" "}
                Fire safety measures must be adhered to at all times, including
                keeping exits clear and not tampering with smoke detectors.{" "}
              </li>
              <li>
                Any security concerns should be reported to management
                immediately.
              </li>
              <li>
                Personal belongings should be kept secure; the Landlord is not
                responsible for lost or stolen items.
              </li>
            </div>

            <div>
              <b>Utilities and Bills</b>
              <p>
                Rent includes/excludes utilities such as water, electricity, and
                internet. [Specify included utilities.] Tenants are responsible
                for the payment of excluded utilities. Meters will be provided
                for fair calculation.
              </p>
            </div>

            <div>
              <b>Intellectual Property Rights</b>
              <p>
                All content on the Website, including text, images, videos,
                logos, and software, is owned or licensed by us, therefor users
                may not copy, distribute, or reproduce any content without our
                permission.
              </p>
            </div>

            <div>
              <b>Amendments</b>
              <p>
                The Landlord reserves the right to amend these terms and
                conditions with [e.g., 30 days] notice to tenants.
              </p>
            </div>

            <main className={styles.sec_2}>
              <p>
                Note:
                <i>
                  This agreement shall be governed by and construed in
                  accordance with the laws of Nigeria. Any disputes arising from
                  this agreement shall be settled in Nigerian courts.
                </i>
              </p>
            </main>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Terms_conditions;
