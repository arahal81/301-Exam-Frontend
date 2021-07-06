import React, { Component } from "react";
import axios from "axios";
import DrinksCard from "./DrinksCard";
import { Col, Row } from "react-bootstrap";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    };
  }
  componentDidMount = async () => {
    const data = await axios.get(`${process.env.REACT_APP_SERVER}/api`);
    console.log(data.drinks);
    this.setState({
      apiData: data.data.drinks,
    });
  };

  addToFav = (item) => {
    const obj = {
      strDrinkThumb: item.strDrinkThumb,
      strDrink: item.strDrink,
    };
    console.log(obj);
    axios.post(`${process.env.REACT_APP_SERVER}/fav`, obj);
  };

  render() {
    return (
      <>
        {console.log(this.state.apiData)}
        <Row>
          {this.state.apiData.map((item) => (
            <Col>
              <DrinksCard addToFav={this.addToFav} item={item} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}
