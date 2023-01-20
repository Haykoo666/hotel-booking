import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { allHotels } from '../actions/hotels';
import { Link } from 'react-router-dom';
import HotelCard from '../components/cards/HotelCard';
import Col from 'react-bootstrap/Col';
import {  Skeleton, Space } from 'antd';

const Hotels = () => {
  const [hotels, setHotels] = useState('');

  const getAllHotels = async () => {
    try {
      const res = await allHotels();
      if (res.data) {
        setHotels(res.data);
      }
    } catch (err) {
      toast.error("Err");
    }
  };

  useEffect(() => {
    getAllHotels();
  }, []);

  return (
    <>
    <h2 className='text-primary mb-5 fw-bold'>Our hotels</h2>
      {hotels && hotels.length ? (
        hotels.map((hotel) => (
          <Col key={hotel._id} md={3}>
            <Link
              to={`/hotels/${hotel._id}`}
              className="text-decoration-none text-dark"
            >
              <HotelCard hotel={hotel} />
            </Link>
          </Col>
        ))
      ) : (
        <span className='text-danger bg-white p-3 fw-bolder text-center m-5 rounded fs-2'>No hotels found!</span>
      )}
    </>
  );
};

export default Hotels;
