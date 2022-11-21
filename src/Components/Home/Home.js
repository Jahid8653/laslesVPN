import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo-wrapper">
            <a href="#">
              <img src="images/logo.png" alt="LaslesVPN logo" />
            </a>
          </div>

          <nav className="nav">
            <ul>
              <li className="nav-item">
                <a  href="#about"><b>About</b></a>
              </li>
              <li className="nav-item">
                <a  href="#features"><b>Features</b></a>
              </li>
              <li className="nav-item">
                <a  href="#pricing"><b>Pricing</b></a>
              </li>
              <li className="nav-item">
                <a  href="#testimonials"><b>Testimonials</b></a>
              </li>
              <li className="nav-item">
                <a  href="#help"><b>Help</b></a>
              </li>
            </ul>
          </nav>

          <div className="header-right">
            <a className="sign-in-btn" href="#signin">Sign In</a>
            <button className='ibtn2'
              href="#signup"
            >Sign Up</button
            >
          </div>

          
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-left">
            <h1 className="section-title">
              Want anything to be <br />
              easy with <span>LaslesVPN.</span>
            </h1>
            <p className="section-subtitle">
              Provide a network for all your needs with ease and fun using
              <span>LaslesVPN</span> discover interesting features from us.
            </p>
            <button className='ibtn' href="#"
            ><b>Get Started</b></button
            >
          </div>

          <div className="hero-right">
            <img src="images/Illustration 1.png" alt="illustration" />
          </div>
        </div>
      </section>

      <section id="about" className="quick-stats">
        <div className="container">
          <div>
            <img className='custimg' src="images/Group 1215.png" alt="location icon" />
            <div>
              <p><b>30+</b></p>
              <p>Locations</p>
            </div>
          </div>
          <div>
            <img className='custimg' src="images/Group 1217.png" alt="server icon" />
            <div>
              <p><b>50+</b></p>
              <p>Servers</p>
            </div>
          </div>
          <div>
            <img className='custimg' src="images/Group 1216.png" alt="user icon" />
            <div>
              <p><b>90+</b></p>
              <p>Users</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="features-left">
            <img src="images/Illustration 2.png" alt="illustration" />
          </div>
          <div className="features-right">
            <h2 className="section-title">
              We Provide Many <br />
              Features You Can Use
            </h2>
            <p className="section-subtitle">
              You can explore the features that we provide with fun and have their
              own functions each feature.
            </p>

            <ul className="features-list">
              <li>Powerfull online protection.</li>
              <li>Internet without borders.</li>
              <li>Supercharged VPN</li>
              <li>No specific time limits.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="plans">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-subtitle">
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </p>
          </div>
          <div className="plans-wrapper">
            <div className="plan">
              <div className="plan-image">
                <img src="images/Free.png" alt="Free plan" />
              </div>
              <h3>Free Plan</h3>
              <div className="plan-features">
                <ul>
                  <li>Unlimited Bandwitch</li>
                  <li>Encrypted Connection</li>
                  <li>No Traffic Logs</li>
                  <li>Works on All Devices</li>
                </ul>
              </div>
              <div className="plan-bottom">
                <h4 className="plan-price">Free</h4>
                <button className='ibtn2'
                  href="#"
                ><b>Select</b></button
                >
              </div>
            </div>
            <div className="plan">
              <div className="plan-image">
                <img src="images/Free.png" alt="Standard plan" />
              </div>
              <h3>Standard Plan</h3>
              <div className="plan-features">
                <ul>
                  <li>Unlimited Bandwitch</li>
                  <li>Encrypted Connection</li>
                  <li>Yes Traffic Logs</li>
                  <li>Works on All Devices</li>
                  <li>Connect Anywhere</li>
                </ul>
              </div>
              <div className="plan-bottom">
                <h4 className="plan-price">$9 <span className="font-400">/ mo</span></h4>
                <button className='ibtn2'
                  href="#"
                ><b>Select</b></button
                >
              </div>
            </div>
            <div className="plan plan--recommended">
              <div className="plan-image">
                <img src="images/Free.png" alt="Premium plan" />
              </div>
              <h3>Premium Plan</h3>
              <div className="plan-features">
                <ul>
                  <li>Unlimited Bandwitch</li>
                  <li>Encrypted Connection</li>
                  <li>Yes Traffic Logs</li>
                  <li>Works on All Devices</li>
                  <li>Connect Anywhere</li>
                  <li>Get New Features</li>
                </ul>
              </div>
              <div className="plan-bottom">
                <h4 className="plan-price">$12 <span className="font-400">/ mo</span></h4>
                <button className='ibtn2'
                  href="#"
                ><b>Select</b></button
                >
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="locations">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Huge Global Network of Fast VPN
            </h2>

            <h4 className="section-subtitle">
              See LaslesVPN everywhere to make it easier for you when you move
              locations.
            </h4>
          </div>

          <div className="locations-map-wrapper">
            <img src="images/Huge Global.png" alt="Locations Map" />
          </div>

          <div className="sponsored">
            <div className="sponsor">
              <img src="images/Mask Group.png" alt="Netflix logo" />
            </div>
            <div className="sponsor">
              <img src="images/Mask Group (1).png" alt="Reddit logo" />
            </div>
            <div className="sponsor">
              <img src="images/Mask Group (2).png" alt="Amazon logo" />
            </div>
            <div className="sponsor">
              <img src="images/Mask Group (3).png" alt="Discord logo" />
            </div>
            <div className="sponsor">
              <img src="images/Mask Group (4).png" alt="Spotify logo" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">
              Trusted by Thousands of Happy Customer
            </h1>
            <h4 className="section-subtitle">
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </h4>
          </div>

          <div className="testimonials-wrapper owl-carousel">
            <div className="testimonial testimonial--active item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img className='custimg' src="images/Ellipse 175.png" alt="Customer photo" />
                </div>

                <div>
                  <h4 className="customer-name font-500">Viezh Robert</h4>
                  <p className="customer-location">Warsaw, Poland</p>
                </div>

                <div className="customer-rating">4.5</div>
              </div>

              <div className="testimonial-body">
                “Wow... I am very happy to use this VPN, it turned out to be more
                than my expectations and so far there have been no problems.
                LaslesVPN always the best”.
              </div>
            </div>
            <div className="testimonial item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img className='custimg' src="images/Ellipse 175 (1).png" alt="Customer photo" />
                </div>

                <div>
                  <h4 className="customer-name font-500">Yessica Christy</h4>
                  <p className="customer-location">Shanxi, China</p>
                </div>

                <div className="customer-rating">4.5</div>
              </div>

              <div className="testimonial-body">
                “I like it because I like to travel far and still can connect with
                high speed.”.
              </div>
            </div>
            <div className="testimonial item">
              <div className="testimonial-top">
                <div className="customer-photo">
                  <img className='custimg' src="images/Ellipse 175 (2).png" alt="Customer photo" />
                </div>

                <div>
                  <h4 className="customer-name font-500">Kim Young Jou</h4>
                  <p className="customer-location">Seoul, South Korea</p>
                </div>

                <div className="customer-rating">4.5</div>
              </div>

              <div className="testimonial-body">
                “This is very unusual for my business that currently requires a
                virtual private network that has high security.”.
              </div>
            </div>
          </div>

          <div className="controls">
            <div className="container">
              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>

              <div className="arrows">
                <div className="arrow-left">
                  <img src="images/arrow-left.svg" alt="" />
                </div>
                <div className="arrow-right">
                  <img src="images/arrow-right.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="help" className="container">
        <div className="subscribe">
          <div className="subscribe-left">
            <h2 className="section-title font-500">
              Subscribe Now for Get Special Features!
            </h2>
            <h4>Let's subscribe with us and find the fun.</h4>
          </div>

          <div className="subscribe-right">
            <button className='ibtn' href="#"
            ><b>Subscribe Now</b></button
            >
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div>
            <div className="footer-logo">
              <a href="#"><img src="images/logo.png" alt="logo" /></a>
            </div>
            <p>
              LaslesVPN is a private virtual network that has unique features and
              has high security.
            </p>

            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <img src="images/Facebook.png" alt="" />
              </a>
              <a className="social-icon" href="https://twitter.com/" target="_blank">
                <img src="images/Twitter.png" alt="" />
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <img src="images/Instagram.png" alt="" />
              </a>
            </div>

            <p>&copy; 2020 LaslesVPN</p>
          </div>

          <div>
            <h4 className="font-500">Product</h4>
            <ul>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Server</a>
              </li>
              <li>
                <a href="#">Countries</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-500">Engage</h4>

            <ul>
              <li>
                <a href="#">LaslesVPN ?</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-500">Earn Money</h4>

            <ul>
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Become Partner</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
