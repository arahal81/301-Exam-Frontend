import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

export default class DrinksCard extends Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.item.strDrink}</Card.Title>

            <Button
              onClick={() => {
                this.props.addToFav(this.props.item);
              }}
              variant="primary"
            >
              Add-to-favorite
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
