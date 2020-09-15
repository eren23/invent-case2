import React from "react";
import { Card } from "react-bootstrap";
// import Moment from "react-moment";
import "./ApplicantCard.css";

const ApplicantCard = (props) => {
  const { name, status, date, phone } = props;


  return (
    <div>
      <Card className="mt-1 mb-4 mx-4">
        <Card.Body>
          <Card.Title className="text-center m-1">
            {name}
          </Card.Title>
          <Card.Text className="text-center m-1">
            IMDB ID: {phone}
          </Card.Text>
          <Card.Text className="text-center m-1">Content Type: {status}</Card.Text>
          <Card.Text className="text-center m-1">
            <small>
              <span className="SmallText">
                Release Date: {date}
              </span>
            </small>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApplicantCard;
