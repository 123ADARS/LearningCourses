import React from "react";
import { ListGroup } from "react-bootstrap";

const EnrolledCourses = ({ courses }) => {
  return (
    <div>
      <h2>Enrolled Courses</h2>
      {courses.length > 0 ? (
        <ListGroup>
          {courses.map((course) => (
            <ListGroup.Item key={course.id}>{course.title}</ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>You are not enrolled in any courses.</p>
      )}
    </div>
  );
};

export default EnrolledCourses;
