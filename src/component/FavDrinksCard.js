import axios from "axios";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import UpdateModel from "./updateModel";
export default class FavDrinksCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  deleteFav = (id) => {
    console.log(id);
    axios
      .delete(`${process.env.REACT_APP_SERVER}/fav/${id}`)
      .then(this.props.getAllFav());
  };

  uppateFav = (e, id) => {
    e.preventDefault();
    const obj = {
      id: id,
      strDrink: e.target.strDrink.value,
    };
    console.log(obj);
    axios
      .put(`${process.env.REACT_APP_SERVER}/fav`, obj)
      .then(this.props.getAllFav());
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <>
        <UpdateModel
          show={this.state.show}
          handleClose={this.handleClose}
          uppateFav={this.uppateFav}
          item={this.props.item}
        />
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.item.strDrink}</Card.Title>

            <Button
              onClick={() => {
                this.deleteFav(this.props.item._id);
              }}
              variant="primary"
            >
              DELETE
            </Button>
            <Button
              onClick={() => {
                this.handleShow();
              }}
              variant="primary"
            >
              UPDATE
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}
