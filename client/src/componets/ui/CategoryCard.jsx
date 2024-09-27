import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

export default function CategoryCard({ category }) {
  return (
    <Card
      style={{
        width: "350px",
        height: "100%",
      }}
    >
      <img alt="Sample" src={category.img} />
      <CardBody>
        <CardTitle tag="h5">{category.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {category.desc}
        </CardSubtitle>
        {/* <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card‘s content.
        </CardText> */}
        <Button
          style={{
            width: "250px",
            height: "50px",
            backgroundColor: "blue",
          }}
        >
          Button
        </Button>
      </CardBody>
    </Card>
  );
}
