import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import {
  Product,
  ProductList,
  ProductImg,
  ProductTitle,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  Container,
} from './styles';

export default class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount = async () => {
    try {
      const response = await api.get('products');
      this.setState({ products: response.data });
    } catch (err) {
      console.tron.log(err);
    }
  };

  render() {
    return (
      <ProductList>
        <Container>
          <Product>
            <ProductImg
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
              style={{ width: 200, height: 200 }}
            />
            <ProductTitle>title</ProductTitle>
            <ProductPrice>199</ProductPrice>
            <AddButton
              title="Adicionar"
              onPress={() => this.props.navigation.navigate('Cart')}
            >
              <ProductAmount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <ProductAmountText>5</ProductAmountText>
              </ProductAmount>
              <AddButtonText>ADICIONAR</AddButtonText>
            </AddButton>
          </Product>
        </Container>
      </ProductList>
    );
  }
}
