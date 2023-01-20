import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import { useNavigate } from 'react-router';
import moment from 'moment';

const Search = ({ locationProps, dateProps, bedProps }) => {
  const arrDate = dateProps ? dateProps.split(',') : '';

  const navigate = useNavigate();

  const [location, setLocation] = useState(locationProps ? locationProps : '');
  const [date, setDate] = useState(arrDate);
  const [bed, setBed] = useState(bedProps ? bedProps : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-result?location=${location}&date=${date}&bed=${bed}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}  className={`row mb-5 search--area ${window.location.pathname == "/search-result" ? "search--area2" : ""}`}>
        <Form.Group className=" col-md-3">
          <Form.Control
            placeholder="Location"
            name="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Form.Group>

        <RangePicker
          className=" col-md-4 b-radius"
          onChange={(value, dateString) => setDate(dateString)}
          format="YYYY-MM-DD"
          defaultValue={
            date && [
              moment(date[0], 'YYYY-MM-DD'),
              moment(date[1], 'YYYY-MM-DD'),
            ]
          }
        />

        <Form.Group className=" col-md-3">
          <Form.Select
            name="bed"
            value={bed}
            onChange={(e) => setBed(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Form.Select>
        </Form.Group>

        <div className="col-md-2">
          <Button variant="primary" type="submit" className='search-btn'>
            Check Availability
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Search;
