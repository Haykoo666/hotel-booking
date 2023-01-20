import Card from 'react-bootstrap/Card';
import { BiBed } from 'react-icons/bi';
import { BiCalendarAlt } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import { diffDays } from '../../actions/hotels';
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { Rate } from 'antd';


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
  //Максимум не включается, минимум включается
}

const HotelCard = ({ hotel, isOwner = false, setSmShow, setId }) => {
  const navigate = useNavigate();
  const navigateToEdit = (e) => {
    e.preventDefault();
    navigate('/hotels/edit', { state: { id: hotel._id } });
  };

  const openDeleteModal = (e) => {
    e.preventDefault();
    setSmShow(true);
    setId(hotel._id);
  };


  return (
    <Card className="mb-4 text-center">
      <Card.Img
        variant = "top"
        src={ `${import.meta.env.VITE_APP_API}/hotel/image/${hotel._id}` }
        loading = "lazy"
        height={170}
      />
      <Card.Body>
        <Card.Title className='m-4'>{ hotel.title }</Card.Title>
        <hr />
        <Card.Text className="mb-2 d-flex align-items-center justify-content-center">
          <img src="./img/location.png" alt="location icon" width={ 16 } className="mr-10"/>
          { hotel.location }
        </Card.Text>
        <hr />
        <Card.Text className="mb-2 d-flex align-items-center justify-content-center">
          {/* <BiCalendarAlt className='mr-10'/> */}
          <img src="./img/bed-icon.png" alt="" width={ 24 } className='mr-10'/>
          for {diffDays(hotel.from, hotel.to)}{' '}
            {
              diffDays(hotel.from, hotel.to) <= 1 ? ' day' : ' days'
            }
        </Card.Text>
        <hr />
        <Card.Text className="mb-2 d-flex align-items-center justify-content-center">
          {/* <BiBed />  */}
          <img src="./img/bed-icon.png" alt="" width={ 24 } className='mr-10'/>

          {hotel.bed} bed
        </Card.Text>
        <hr />
        <Card.Text className="text-muted ">
          <small>
            Available from {new Date(hotel.from).toLocaleDateString()}
          </small>
        </Card.Text>
        <hr />
        <Card.Text className="text-muted ">
          <Rate disabled defaultValue={getRandomInt(2, 6)} />
        </Card.Text>
        {isOwner && (
          <div className="d-grid gap-2">
            <Button variant="warning" onClick={navigateToEdit}>
              Edit
            </Button>
            <Button variant="danger" onClick={openDeleteModal}>
              Delete
            </Button>
          </div>
        )}
        <hr />
        <Card.Text>
          <strong>Prices start at:</strong> ${`${hotel.price}`} per night (+taxes and fees)
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
