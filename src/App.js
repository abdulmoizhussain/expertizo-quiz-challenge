import React from 'react';
import './App.css';
import {
  Progress,
  Row,
  Col,
  Button,
} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';

function App() {
  return (
    <Row className="justify-content-md-center m-0 hv-100">
      <Col md={8} className="app-border d-flex flex-column">
        <Row>
          <Col className="px-0">
            <Progress multi className="bg-progress-white">
              <Progress bar color="secondary" value={15} max={20} />
            </Progress>
          </Col>
        </Row>

        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1>Question 16 of 20</h1>

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
            <br />

            <h5>blah blah blah blah blah blah blah blah blah blah blah blah blah blah ?</h5>

            <br />

            <Row>
              <Col className="m-3 d-flex justify-content-center"><Button color="light" className="btn btn-sm border border-dark">ghost</Button></Col>
              <Col className="m-3 d-flex justify-content-center"><Button color="light" className="btn btn-sm border border-dark">ghost</Button></Col>
            </Row>
            <Row>
              <Col className="m-3 d-flex justify-content-center"><Button color="light" className="btn btn-sm border border-dark" >ghost</Button></Col>
              <Col className="m-3 d-flex justify-content-center"><Button color="light" className="btn btn-sm border border-dark" >ghost</Button></Col>
            </Row>

            <Row>
              <Col className="d-flex justify-content-center">
                <h4>Correct!</h4>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <Button color="light" className='border border-dark'>Next Question</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-auto justify-content-center">
          <Col md={8}>
            <Row>
              <Col className="text-left">
                <strong>
                  Score: 67%
                </strong>
              </Col>
              <Col className="text-right">
                <strong>
                  Max Score: 75%
                </strong>
              </Col>
            </Row>
            <Progress multi className="bg-progress-white border border-dark">
              <Progress bar className="bg-progress-bar-dark" value={3} max={20} />
              <Progress bar className="bg-progress-bar-normal" value={2} max={20} />
              <Progress bar className="bg-progress-bar-light" value={4} max={20} />
            </Progress>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
