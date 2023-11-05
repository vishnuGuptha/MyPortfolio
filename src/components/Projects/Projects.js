import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import News from "../../Assets/Projects/News.png";
import Qkart from "../../Assets/Projects/Qkart.png";
import chatify from "../../Assets/Projects/chatify.png";
import QTripDynamic from "../../Assets/Projects/QTripDynamic.png";
import QTripStatic from "../../Assets/Projects/QTripStatic.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Qkart}
              isBlog={false}
              title="Qkart"
              description="QKart is an e-commerce application offering a variety of products for customers to choose from. During the course of this project, Implemented the core logic for authentication, shopping cart and checkout Improved UI by adding responsive design elements for uniform experience across different devices Utilized REST APIs to dynamically load and render data served by the backend server"
              ghLink="https://github.com/vishnuGuptha/vishnugupta28899-ME_QKART_FRONTEND_V2"
              demoLink="https://shopping-kart01.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather App"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/vishnuGuptha/Responsive-Card-Layout"
              demoLink="https://master--vishnu-weather.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QTripDynamic}
              isBlog={false}
              title="QTrip Dynamic"
              description="QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. During the course of this project,Created web pages using HTML and CSS and made them dynamic using JavaScript Improved UX with multi-select filters, image carousels Utilised localStorage to persist user preferences at client-side"
              ghLink="https://github.com/vishnuGuptha/vishnugupta28899-ME_QTRIPDYNAMIC"
              demoLink="https://qtripvishnu.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QTripStatic}
              isBlog={false}
              title="QTrip Static"
              description="QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities. During the course of this project, Created 3 different web pages from Wireframe layout using HTML and CSS Utilized Bootstrap extensively for responsive design Deployed the website to Netlify/Vercel"
              ghLink="https://github.com/vishnuGuptha/vishnugupta28899-ME_QTRIPDYNAMIC"
              demoLink="https://triptrekker.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News}
              isBlog={false}
              title="XBoard"
              description="XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard. During the course of this project, Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch Used Accordions and Image Carousel to improve UI Fetched news content from flipboard's RSS feed using REST API"
              ghLink="https://github.com/vishnuGuptha/vishnugupta28899-ME_QTRIPDYNAMIC"
              demoLink="https://breaking-news-vishnu.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
