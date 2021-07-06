import axios from "axios";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import FavDrinksCard from "./FavDrinksCard";
export default class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
    };
  }

  componentDidMount = async () => {
    console.log("didMount");
    axios.get(`${process.env.REACT_APP_SERVER}/fav`).then((favoData) => {
      console.log(favoData.data);
      this.setState({
        favData: favoData.data,
      });
    });
  };

  deleteFav = (id) => {};

  render() {
    return (
      <>
        {console.log(this.state.favData)}
        <Row>
          {this.state.favData.map((item) => (
            <Col>
              <FavDrinksCard
                deleteFav={this.deleteFav}
                uppateFav={this.uppateFav}
                getAllFav={this.componentDidMount}
                item={item}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
