import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

import DISHES from '../shared/dishes';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
      comments: null,
    };
  }

  onDishSelect(DISHES) {
    this.setState({ selectedDish: DISHES });
  }

  renderDish(DISHES) {
    if (DISHES != null) {
      return (
        <Fragment>
          <Card>
            <CardImg width="100%" src={DISHES.image} alt={DISHES.name} />
            <CardBody>
              <CardTitle heading>{DISHES.name}</CardTitle>
              <CardText>{DISHES.description}</CardText>
            </CardBody>
          </Card>
        </Fragment>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(comments) {
    return (
      <Card>
        <CardBody>
          <h4>Comments</h4>
          <CardText>
            <p>{comments}</p>
            <p>
              -- {comments} , {comments}
            </p>
          </CardText>
        </CardBody>
      </Card>
    );
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card
            onClick={
              (() => this.onDishSelect(dish),
                this.renderComments(this.state.selectedDish))
            }
          >
            <CardImg width="100%" src={dish.image} alt={dish.name} />

            <CardImgOverlay body className="ml-5">
              <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>

        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;
