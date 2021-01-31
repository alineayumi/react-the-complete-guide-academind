import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    total_price: 4,
  };

  addIngridientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngridients = {
      ...this.state.ingredients,
    };
	updatedIngridients[type] = updatedCount;
	const priceAddition = INGREDIENT_PRICE[type];
	const oldPrice = this.state.total_price
	const newPrice = oldPrice + priceAddition

    this.setState({ ingredients: updatedIngridients, total_price: newPrice});
  };

  removeIngridientHandler = (type) => {
	const oldCount = this.state.ingredients[type];
	if (oldCount > 0) {
		const updatedCount = oldCount - 1;
		const updatedIngridients = {...this.state.ingredients,};
		updatedIngridients[type] = updatedCount;
		const priceReduce = INGREDIENT_PRICE[type];
		const oldPrice = this.state.total_price
		const newPrice = oldPrice - priceReduce
    	this.setState({ ingredients: updatedIngridients, total_price: newPrice});
	}
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
			ingredientAdded={this.addIngridientHandler}
			ingredientRemoved={this.removeIngridientHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
