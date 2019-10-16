import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
  EmptyText,
  EmptyContainer,
} from './styles';

function Cart({ cart, removeFromCart, navigation, updateAmountRequest }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <Products>
            {cart.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage
                    style={{ width: 80, height: 80 }}
                    source={{ uri: product.image }}
                  />
                  <ProductDetails>
                    <ProductTitle> {product.title} </ProductTitle>
                    <ProductPrice> {product.price} </ProductPrice>
                  </ProductDetails>
                  <ProductDelete>
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.primary}
                      onPress={() => removeFromCart(product.id)}
                    />
                  </ProductDelete>
                </ProductInfo>

                <ProductControls>
                  <ProductControlButton
                    onPress={() => {
                      decrement(product);
                    }}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton
                    onPress={() => {
                      increment(product);
                    }}
                  >
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.primary}
                    />
                  </ProductControlButton>
                  <ProductSubtotal> {product.subtotal} </ProductSubtotal>
                </ProductControls>
              </Product>
            ))}
          </Products>

          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalAmount>1800,00</TotalAmount>
            <Order>
              <OrderText onPress={() => navigation.navigate('Main')}>
                FINALIZAR PEDIDO
              </OrderText>
            </Order>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: product.price * product.amount,
  })),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
