import React from 'react';
import './App.css';
import {
  Progress,
  Row,
  Col,
} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

function App() {
  return (
    <Row className="justify-content-md-center">
      <Col md={8}>
        <Row>
          <Col>
            <Progress multi>
              <Progress bar color="secondary" value={50} />
            </Progress>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1>Question 16 of 20</h1>

            <br />
            <p>Entertainment board games</p>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={3}
              editing={false}
              starColor="#000000"
              emptyStarColor="#CBCCCBFF"
            />

            <br />

            <h5>blah blah blah blah blah blah blah blah blah blah blah blah blah blah ?</h5>

            <br />

            <Row className='align-items-end'>
              <Col>asdfasdf</Col>
              <Col>asdfasdf</Col>
            </Row>
            <Row>
              <Col>asdfasdf</Col>
              <Col>asdfasdf</Col>
            </Row>

          </Col>
        </Row>

        <Row className='align-items-end'>
          <Col>asdfasdf</Col>
          <Col>asdfasdf</Col>
          <Col>asdfasdf</Col>
          <Col>asdfasdf</Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
