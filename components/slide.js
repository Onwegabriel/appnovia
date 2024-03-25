import React, { useEffect } from 'react';
import Swiper from 'swiper';

const MyComponent = () => {
  useEffect(() => {
    const TrandingSlider = new Swiper('.tranding-slider', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    // Cleanup function if necessary
    return () => {
      TrandingSlider.destroy();
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <section>
    <div class="container">
    <div class="swiper tranding-slider">
      <div class="swiper-wrapper">

        <div class="swiper-slide tranding-slide">
          <div class="tranding-slide-img">
            <img src="img/p12.jpg" alt="Tranding"/>
          </div>
          <div class="tranding-slide-content">
            <h1 class="food-price">$20</h1>
            <div class="tranding-slide-content-bottom">
              <h2 class="food-name">
                Special Pizza
              </h2>
              <h3 class="food-rating">
                <span>4.5</span>
                <div class="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </h3>
            </div>
          </div>
        </div>

        <div class="swiper-slide tranding-slide">
          <div class="tranding-slide-img">
            <img src="img/mansiut.png" alt="Tranding"/>
          </div>
          <div class="tranding-slide-content">
            <h1 class="food-price">$20</h1>
            <div class="tranding-slide-content-bottom">
              <h2 class="food-name">
                Meat Ball
              </h2>
              <h3 class="food-rating">
                <span>4.5</span>
                <div class="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </h3>
            </div>
          </div>
        </div>

        <div class="swiper-slide tranding-slide">
          <div class="tranding-slide-img">
            <img src="img/p0.jpg" alt="Tranding"/>
          </div>
          <div class="tranding-slide-content">
            <h1 class="food-price">$40</h1>
            <div class="tranding-slide-content-bottom">
              <h2 class="food-name">
                Burger
              </h2>
              <h3 class="food-rating">
                <span>4.5</span>
                <div class="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </h3>
            </div>
          </div>
        </div>

        <div class="swiper-slide tranding-slide">
          <div class="tranding-slide-img">
            <img src="img/p1.jpg" alt="Tranding"/>
          </div>
          <div class="tranding-slide-content">
            <h1 class="food-price">$15</h1>
            <div class="tranding-slide-content-bottom">
              <h2 class="food-name">
                Frish Curry
              </h2>
              <h3 class="food-rating">
                <span>4.5</span>
                <div class="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </h3>
            </div>
          </div>
        </div>

        <div class="swiper-slide tranding-slide">
          <div class="tranding-slide-img">
            <img src="img/p2.jpg" alt="Tranding"/>
          </div>
          <div class="tranding-slide-content">
            <h1 class="food-price">$15</h1>
            <div class="tranding-slide-content-bottom">
              <h2 class="food-name">
                Pane Cake
              </h2>
              <h3 class="food-rating">
                <span>4.5</span>
                <div class="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </h3>
            </div>
          </div>
        </div>

        <div class="swiper-slide tranding-slide">
          <div class="tranding-slide-img">
            <img src="img/p3.jpg" alt="Tranding"/>
          </div>
          <div class="tranding-slide-content">
            <h1 class="food-price">$20</h1>
            <div class="tranding-slide-content-bottom">
              <h2 class="food-name">
                Vanilla cake
              </h2>
              <h3 class="food-rating">
                <span>4.5</span>
                <div class="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </h3>
            </div>
          </div>
        </div>

        <div class="swiper-slide tranding-slide">
          <div class="tranding-slide-img">
            <img src="img/p4.jpg" alt="Tranding"/>
          </div>
          <div class="tranding-slide-content">
            <h1 class="food-price">$8</h1>
            <div class="tranding-slide-content-bottom">
              <h2 class="food-name">
                Straw Cake
              </h2>
              <h3 class="food-rating">
                <span>4.5</span>
                <div class="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </h3>
            </div>
          </div>
        </div>
    
      </div>

    </div>
  </div>
  </section>
  );
};

export default MyComponent;
