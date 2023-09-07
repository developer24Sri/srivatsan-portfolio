import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import robofriends from '../../Assets/robofriends.png'
import pagination from '../../Assets/pagination.png'
import loginform from '../../Assets/loginform.png'
import quotegen from '../../Assets/quotegen.png'
import weatherapp from '../../Assets/weatherapp.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={robofriends}
                isBlog={false}
                title="Robo Friends"
                description="An app that lets you search for your robot friends by their names. It uses the jsonplaceholder api to fetch names and emails that is used for the robots."
                ghLink="https://developer24sri.github.io/robofriends/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={pagination}
                isBlog={false}
                title="Pagination"
                description="Pagination in React Js is the concept by which, we divide these records into multiple sets with the same number of records which are then displayed on separate pages in the React Js application."
                ghLink="https://developer24sri.github.io/pagination/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={loginform}
                isBlog={false}
                title="Login-Form"
                description="This project is a simplified Which been created using ReactJS."
                ghLink="https://developer24sri.github.io/loginform/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={quotegen}
                isBlog={false}
                title="Quote-Generator"
                description="A simple Quote generator react app which uses API to fetch the quotes"
                ghLink="https://developer24sri.github.io/quotegeneratorreact/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={weatherapp}
                isBlog={false}
                title="Weather application"
                description="A simple weather application to find the weather of the city"
                ghLink="https://developer24sri.github.io/weatherapp/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist