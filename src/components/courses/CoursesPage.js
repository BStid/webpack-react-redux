import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };
  handleChange(e) {
    const course = { ...this.state.course, title: e.target.value };
    this.setState({ course });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
  }
  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={e => this.handleChange(e)}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map(course => {
          return <div key={course.title}> {course.title} </div>;
        })}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};
const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(CoursesPage);
