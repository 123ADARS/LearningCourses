import React from "react";
import { Row, Col } from "react-bootstrap";
import CourseCard from "./CourseCard";

const CourseList = ({ courses, onEnroll }) => {
  return (
    <Row>
      {courses.map((course) => (
        <Col key={course.id} sm={12} md={6} lg={4}>
          <CourseCard course={course} onEnroll={onEnroll} />
        </Col>
      ))}
    </Row>
  );
};

export default CourseList;
