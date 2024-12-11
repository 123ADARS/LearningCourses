import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import EnrolledCourses from "./components/EnrolledCourses";

const App = () => {
  const [courses] = useState([
    { id: 1, title: "React Basics", description: "Learn the basics of React." },
    { id: 2, title: "JavaScript Advanced", description: "Master JavaScript concepts." },
    { id: 3, title: "Node.js Essentials", description: "Learn backend development with Node.js." },
  ]);

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollCourse = (course) => {
    if (!enrolledCourses.find((c) => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, course]);
    }
  };

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<CourseList courses={courses} onEnroll={enrollCourse} />}
          />
          <Route
            path="/enrolled"
            element={<EnrolledCourses courses={enrolledCourses} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
