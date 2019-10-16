import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Product,
  ProductImg,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  Container,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    try {
      const response = await api.get('products');
      console.tron.log(response.data);
      this.setState({ products: response.data });
    } catch (err) {
      console.tron.log('err');
    }
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    const { amount } = this.props;

    return (
      <Product key={item.id}>
        <ProductImg source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={20} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>ADICIONAR</AddButtonText>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          horizontal
          data={products}
          extraData={this.props}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
