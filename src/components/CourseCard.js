import React from "react";
import { Card, Button } from "react-bootstrap";

const CourseCard = ({ course, onEnroll }) => {
  return (
    <Card style={{ marginBottom: "20px" }}>
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Button variant="primary" onClick={() => onEnroll(course)}>
          Enroll
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
