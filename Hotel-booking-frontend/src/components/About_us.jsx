import React from 'react'

const About_us = () => {
  return (
    <section className="about--us-block container">
          <article className="about--us-leftside">
            <h4 className="text-warning">ABOUT US</h4>
            <h1  className="about--us-title">
              Welcome To <br />
              Hotel Booking
            </h1>
            <p className='about--us-description'>
              With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect stay no matter where your destination. <br />
              So when it comes to booking the perfect hotel, vacation rental, resort, apartment, guest house, or tree house, we’ve got you covered.

            </p>
          </article>
          <article className='about--us-rightside'>
            <div className="about--us-card about--us-img1 card1-sz">
              <img src="./img/hotel-2.jpg" alt="hotel photo" width={ 300 } height={ 250 } className="card-image"/>
            </div>
            <div className="about--us-card about--us-img2 card2-sz">
              <img src="./img/14.jpg.webp" alt="hotel photo" width={ 300 } height={ 250 } className="card-image"/>
            </div>
            <div className="about--us-card about--us-img3 card3-sz">
              <img src="./img/15.jpg.webp" alt="hotel photo"  width={ 300 } height={ 516 } className="card-image"/>
            </div>
          </article>
        </section>
  )
}

export default About_us


