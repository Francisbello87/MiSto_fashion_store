const createNav = () => {
  let nav = document.querySelector(".header");

  nav.innerHTML = `
    <nav class="upper-nav nav top-nav">
    <div class="leftside-uppernav">
      <span class="leftside-uppernav-content">
        <img
          src="images/phone.jpg"
          alt="phone-icon"
          class="upper-nav-icon"
        />
        <p class="uppernav-text">+38(050)12 34 567</p>
      </span>
      <span class="leftside-uppernav-content">
        <img
          src="images/location-marker 2.png"
          alt="location-icon"
          class="upper-nav-icon"
        />
        <p class="uppernav-text">Ukraine, Kyiv,Khreshchatyk 1</p>
      </span>
      <span class="leftside-uppernav-content">
        <img
          src="images/timer.png"
          alt="clock-icon"
          class="upper-nav-icon"
        />
        <p class="uppernav-text">All week 24/7</p>
      </span>
    </div>
    <div class="rightside-uppernav">
      <ul>
        <li>
          <a href="">
            <img
              src="images/facebook.png"
              alt="facebook-icon"
              class="upper-nav-icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="images/twitter.png"
              alt="twitter-icon"
              class="upper-nav-icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="images/instagram.png"
              alt="instagram-icon"
              class="upper-nav-icon"
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src="images/pinterest.png"
              alt="pinterest-icon"
              class="upper-nav-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <nav class="primary-nav nav">
    <div class="logo-text"><h3><a href="index.html">MiSto</a></h3></div>
    <div class="middle-nav">
      <ul class="menu-items">
        <li><a href="">About Us</a></li>
        <li><a href="">Women</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">Beauty</a></li>
        <li><a href="">Accessories</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
    <ul class="primary-nav-icons leftside-uppernav-content">
      <li class="search-box">
      <input
      type="text"
      name="search"
      id="search"
      class="search-input"
      placeholder="Search Products, Brands, etc."
    />
        <a href=""><i class="fas fa-search desktop-search"></i></a>
      </li>
      <li>
        <a href=""><i class="fas fa-globe"></i></a>
      </li>
      <li class="cart">
        <a href=""><i class="fas fa-shopping-bag"></i></a>
        <p class="cart-count">0</p>
      </li>
      <li>
      <a href=""><i class="fas fa-user"></i></a>
    </li>
    </ul>
  </nav>
  <div class="mobile-nav tab-view">
    <div class="logo-text-mobile"><h3>MiSto</h3></div>
    <ul class="leftside-uppernav-content tablet-icon">
      <li>
        <a href=""><i class="fas fa-search"></i></a>
      </li>
      <li>
        <a href=""><i class="fas fa-globe"></i></a>
      </li>
      <li>
        <a href=""><i class="fas fa-user"></i></a>
      </li>
      <li>
        <a href=""><i class="fas fa-shopping-bag"></i></a>
      </li>
    </ul>

    <a href=""><i class="fas fa-search icon"></i></a>
    <a href=""><i class="fas fa-user icon"></i></a>
    <a href=""><i class="fas fa-shopping-bag icon"></i></a>

    <div id="hamburger-icon" onclick="toggleMobileMenu(this)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
      <ul class="mobile-menu">
        <li><a href="/">About Us</a></li>
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Beauty</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>
    `;
};

createNav();
