import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    purchaseable: false,
    totalPrice: 4,
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return (sum += el);
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngridientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngridients = {
      ...this.state.ingredients,
    };
    updatedIngridients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ ingredients: updatedIngridients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngridients);
  };

  removeIngridientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngridients = { ...this.state.ingredients };
      updatedIngridients[type] = updatedCount;
      const priceReduce = INGREDIENT_PRICE[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceReduce;
      this.setState({ ingredients: updatedIngridients, totalPrice: newPrice });
      this.updatePurchaseState(updatedIngridients);
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngridientHandler}
          ingredientRemoved={this.removeIngridientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
