/* eslint-disable react/prop-types */
import styled from "styled-components";

const Card = styled.div`
  width: 330px;
  height: 470px;
  background-color: #171721;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;
const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #f2f3f4;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
// const Date = styled.div`
//   font-size: 12px;
//   margin-left: 2px;
//   font-weight: 400;
//   color: #b1b2b3 + 80;
//   @media only screen and (max-width: 768px) {
//     font-size: 10px;
//   }
// `;
const Description = styled.div`
  font-weight: 300;
  color: #b1b2b3 + 99;
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  font-size: 0.9rem;
`;
// const Members = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 10px;
// `;
// const Avatar = styled.img`
//   width: 38px;
//   height: 38px;
//   border-radius: 50%;
//   margin-left: -10px;
//   background-color: #ffffff;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
//   border: 3px solid #171721;
// `;
const Button = styled.a`
  color: #854ce6;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} />
      <Tags></Tags>
      <Details>
        <Title style={{ lineHeight: "1.7", letterSpacing: "0.03rem" }}>
          {project.title}
        </Title>
        {/* <Date>{project.date}</Date> */}
        <Description
          style={{
            lineHeight: "1.5",
            letterSpacing: "0.03rem",
            textAlign: "justify",
          }}
        >
          {project.description}
        </Description>
      </Details>
      <Button
        href={project.github}
        target="_blank"
        style={{ lineHeight: "1.7", letterSpacing: "0.03rem" }}
      >
        View Code
      </Button>
      {project.webapp && (
        <Button
          href={project.webapp}
          target="_blank"
          style={{ lineHeight: "1.7", letterSpacing: "0.03rem" }}
        >
          Website Link
        </Button>
      )}
    </Card>
  );
};

export default ProjectCard;
