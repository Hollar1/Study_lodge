import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import Studio_room from "../../assets/images/studio.jpeg";
import shared_room from "../../assets/images/shared_room.jpeg";
import single_room from "../../assets/images/single_room.jpeg";
import styles from "../home/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faMapLocation,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <div>
            <h3>
              Welcome to Study Lodge Student Accommodation, where Comfort Meets
              Convenience.
            </h3>
          </div>
        </section>

        <section className={styles.sec_02}>
          <h4>We are trusted partner in quality students accommodation!</h4>
          <p>
            Discover the ultimate comfort at our student accommodations,
            thoughtfully designed to make you feel right at home. Whether you're
            staying for a semester or the full academic year, our welcoming
            spaces, modern amenities, and supportive environment help you settle
            in with ease. With fully furnished rooms and a prime location near
            major universities and colleges, we provide everything you need for
            a successful and enjoyable student life. Our accommodations offer
            more than just a place to sleep — they're built for living,
            learning, and connecting. Enjoy dedicated study areas, cozy
            lounges,communal kitchens all maintained to the highest standards.{" "}
            {!readMore && (
              <button onClick={() => setReadMore(true)}>Reed More...</button>
            )}
            {readMore && (
              <p>
                Join a vibrant student community through organized events,
                social spaces, and inclusive common areas where friendships are
                formed and memories are made. With on-site staff, 24/7 security,
                and flexible lease options, you can focus on your studies while
                we take care of the rest. Come and experience a true home away
                from home — where comfort meets convenience, and student life
                thrives.
              </p>
            )}
          </p>
        </section>

        <section className={styles.sec_03}>
          <h4> Our Students Accommodation Services </h4>
          <p>
            Discover the ultimate comfort at our hostels, designed to make you
            feel right at home. Whether you're here for a short stay or an
            extended visit, our welcoming spaces modern amenities, and friendly
            atmosphere ensure that you enjoy a peaceful, comfortable
            environment.
          </p>

          <article>
            <div>
              <img src={Studio_room} alt="" />
              <h5>Studio Room</h5>
              <p>
                Our studio is a fully self-contained living space designed with
                your comfort and independence in mind. Each studio includes a
                private bedroom, en-suite bathroom, and a personal kitchenette,
                giving you everything.
              </p>
            </div>

            <div>
              <img src={shared_room} alt="" />
              <h5>Shared Room</h5>
              <p>
                "Our shared room is a comfortable and budget-friendly option
                where two students share a bedroom,bathroom & toilet. Ideal for
                those who enjoy meeting new people and living in a friendly
                environment.",
              </p>
            </div>

            <div>
              <img src={single_room} alt="" />
              <h5>Non-en-suite</h5>
              <p>
                "Our non-en-suite room offers a private bedroom while sharing
                bathroom and kitchen facilities with other students. It’s a
                great choice for those who want a balance between privacy and
                interaction providing chance to be part of a community.
              </p>
            </div>
          </article>
        </section>

        <section className={styles.sec_04}>
          <header>
            <h4>Why Choose Us?</h4>
            <p>Check our services benefit below </p>
          </header>

          <article>
            <div>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faHandHoldingDollar}
              />{" "}
              <span>Affordable</span>
              <p>
                Our hostel studio spaces are thoughtfully designed to provide a
                perfect blend of comfort, functionality and style. Eachstudio
                offers a private retreat Read More...
              </p>
            </div>
            <div>
              <FontAwesomeIcon className={styles.icon} icon={faHandshake} />{" "}
              <span>Trust</span>
              <p>
                Our hostel studio spaces are thoughtfully designed to provide a
                perfect blend of comfort, functionality and style. Eachstudio
                offers a private retreat Read More...
              </p>
            </div>
            <div>
              <FontAwesomeIcon className={styles.icon} icon={faScaleBalanced} />{" "}
              <span>Affordable</span>
              <p>
                Our hostel studio spaces are thoughtfully designed to provide a
                perfect blend of comfort, functionality and style. Eachstudio
                offers a private retreat Read More...
              </p>
            </div>
            <div>
              <FontAwesomeIcon className={styles.icon} icon={faMapLocation} />{" "}
              <span>Affordable</span>
              <p>
                Our hostel studio spaces are thoughtfully designed to provide a
                perfect blend of comfort, functionality and style. Eachstudio
                offers a private retreat Read More...
              </p>
            </div>
          </article>
        </section>

        <section className={styles.sec_05}>
          <div>
            <h3>Online Rental Process</h3>
            <p>
              {" "}
              The online hostel rental process is simple and convenient. Start
              by visiting the website, where you can search and browse through a
              wide range of hostels using filters for location, price, and
              amenities. <button>Read More</button>
            </p>
          </div>
        </section>

        <section className={styles.sec_06}>
          <div>
            <h3>See what students are saying about our accommodation</h3>
          </div>

          <aside>
            <p>Somebody Someone</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              assumenda corporis repudiandae dolore laudantium iusto suscipit
              cumque? Id labore perspiciatis placeat non culpa nihil quia
              possimus, dolorem, alias, error fuga.
            </span>
          </aside>
          <button onClick={()=>{navigate("/review")}}>See All Reviews</button>
        </section>

        <section className={styles.sec_07}>
          <h3>Subscribe for Exclusive Offers</h3>
          <p>
            Be the first to know about special discounts and exclusive deals.
          </p>
          <input type="text" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
