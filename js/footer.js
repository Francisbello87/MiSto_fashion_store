const createFooter = () => {
  let nav = document.querySelector(".footer");

  nav.innerHTML = `
    <div class="top-footer">
    <p>BE IN TOUCH WITH US:</p>
    <div class="stay-in-touch">
      <input
        type="email"
        class="footer-input"
        placeholder="Enter your email"
      />
      <button class="stay-in-touch-cta">Join Us</button>
    </div>
    <div class="rightside-uppernav">
      <ul>
        <li>
          <a href="">
            <img
              src="images/facebook-1.png"
              alt="facebook-icon"
              class="footer-nav-icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="images/logo-twitter-1.png"
              alt="twitter-icon"
              class="footer-nav-icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="images/instagram-1.png"
              alt="instagram-icon"
              class="footer-nav-icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="images/logo-pinterest-1.png"
              alt="pinterest-icon"
              class="footer-nav-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="middle-footer container">
    <div class="middle-footer-content">
      <p class="middle-footer-content-title">CATEGORIES</p>
      <ul>
        <li><a href=""> Men</a></li>
        <li><a href=""> Women</a></li>
        <li><a href=""> Accessories</a></li>
        <li><a href=""> Beauty</a></li>
      </ul>
    </div>
    <div class="middle-footer-content">
      <p class="middle-footer-content-title">INFORMATION</p>
      <ul>
        <li><a href=""> About Us</a></li>
        <li><a href=""> Contact Us/a></li>
        <li><a href=""> Blog</a></li>
        <li><a href=""> FAQs</a></li>
      </ul>
    </div>
    <div class="middle-footer-content">
      <p class="middle-footer-content-title">USEFUL LINKS</p>
      <ul>
        <li><a href=""> Terms & Conditions</a></li>
        <li><a href=""> Returns & Exchanges</a></li>
        <li><a href=""> Shipping & Delivery</a></li>
        <li><a href=""> Privacy Policy</a></li>
      </ul>
    </div>
    <div class="middle-footer-content">
      <p class="middle-footer-content-title">CONTACT US</p>
      <ul class="footer-contact">
        <li>
          <a href="">
          <span class="contact-footer">
            <img src="images/location-marker 1.png" alt="location-marker " class="contact-footer-icon"/>
            <p> Ukraine, Kyiv, Khreshchatyk 1</p>
          </span>
        </a>
        </li>
        <li>
          <a href="">
            <span class="contact-footer">
              <img src="images/phone-1.png" alt="" class="contact-footer-icon"/>
              <p> +38(050) 12 34 567</p>
            </span>
        </a>
        </li>
        <li>
          <a href="">
          <span class="contact-footer">
            <img src="images/clock-1.png" alt="" class="contact-footer-icon"/>
            <p> All week 24/7</p>
          </span>
        </a>
        </li>
        <li>
          <a href="">
          <span class="contact-footer">
            <img src="images/mail-1.png" alt="" class="contact-footer-icon"/>
            <p> shaman.magic.music@gmail.com</p>
          </span>
        </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="bottom-footer">
    <div class="container">
      <div class="bottom-left-footer">
        <p>Copyright &#169 2022 all rights reserved</p>
      </div>
      <div class="bottom-middle-footer">
        <img src="images/Stripe_x42.png" alt="stripe logo">
        <img src="images/AES256_x42.png" alt="Aes-logo">
        <img src="images/paypal_2_x42.png" alt="paypal-logo">
        <img src="images/visa_x42.png" alt="visa-logo">
        <img src="images/mastercard_x42.png" alt="mastercard-logo">
        <img src="images/discover_x42.png" alt="discover-logo">
        <img src="images/american-express_x42.png" alt="american-express-logo">
      </div>
      <div class="bottom-right-footer">
        <p>Designed by <a href="">Oleh Chabanov</a> & Built by <a href="">Francis Bello</a> </p>
        <p></p>
      </div>
    </div>
  </div>
      `;
};

createFooter();
