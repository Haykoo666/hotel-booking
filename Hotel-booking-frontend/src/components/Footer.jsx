import React from 'react';
import { Timeline } from 'antd';
import { Input, Space } from 'antd';


const { Search } = Input;

const onSearch = (value) => console.log(value);


const Footer = () => {
  return (
    <footer className="footer--area">
      
      <div className="container">
        <section className="footer--area-main d-flex justify-content-between gap-3">
          <article>
            <h2 className='text-success fw-bolder mb-4 name'> Hotel Booking </h2>
            <p className='text-white'> +12 345-678-9999 </p>
            <p className='text-white'> info.hotelbooking@gmail.com </p>
            <p className='text-white'> 856 Cordia Extension Apt. 356, Lake Deangeloburgh, South Africa</p>
          </article>
          <Timeline className='mr-3'>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
          </Timeline>
          <hr />
          <article>
            <h3> Subscribe Newsletter </h3>
            <p className='text-white'>Subscribe our newsletter gor get notification about new updates</p>
            <form  className="footer--area-form">
              <input type="email" className="form-controler" placeholder="Enter your email..." />
              <button type="submit"> <img src="./img/send-icon.png" alt="" width={ 26 } /> </button>
            </form>
          </article>
        </section>
        <hr className='footer--area-line'/>
        <section className="footer--area-secondary text-center pb-3">
          <p className="text-white-50">www.hotel-booking.am | All rights reserved!</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;