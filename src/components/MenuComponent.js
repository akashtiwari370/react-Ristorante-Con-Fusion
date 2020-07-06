import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null,
      comments: null,
    };
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Fragment>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle heading>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
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
            <p>{comments.comment}</p>
            <p>
              -- {comments.author} , {comments.date}
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
