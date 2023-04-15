import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const About = () => (
  <Card css={{ w: "100%", h: "700px", br: 0, border: 0 }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text  h3 align="center" color="#ffffff">
        Road to Quito Blockchain week 
      </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ display: "flex", alignItems: "center", p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-5.jpeg"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
     
    </Card.Body>
   
  </Card>
);

export default About;