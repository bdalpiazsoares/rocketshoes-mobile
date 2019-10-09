import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

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

export default function Cart() {
  return (
    <Container>
      <>
        <Products>
          <Product>
            <ProductInfo>
              <ProductImage
                style={{ width: 80, height: 80 }}
                source={{
                  uri:
                    'https://static.netshoes.com.br/produtos/tenis-vibe-crew-masculino/26/411-3605-026/411-3605-026_detalhe1.jpg?ims=326x',
                }}
              />
              <ProductDetails>
                <ProductTitle> Um tenis muito legal </ProductTitle>
                <ProductPrice> R$149,90 </ProductPrice>
              </ProductDetails>
              <ProductDelete>
                <Icon name="delete-forever" size={24} color={colors.primary} />
              </ProductDelete>
            </ProductInfo>

            <ProductControls>
              <ProductControlButton onPress={() => {}}>
                <Icon
                  name="remove-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlButton>
              <ProductAmount value="3" />
              <ProductControlButton onPress={() => {}}>
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color={colors.primary}
                />
              </ProductControlButton>
              <ProductSubtotal> R$900,00</ProductSubtotal>
            </ProductControls>
          </Product>
        </Products>

        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalAmount>1800,00</TotalAmount>
          <Order>
            <OrderText>FINALIZAR PEDIDO</OrderText>
          </Order>
        </TotalContainer>
      </>
      <EmptyContainer>
        <Icon name="remove-shopping-cart" size={64} color="#eee" />
        <EmptyText>Seu carrinho está vazio.</EmptyText>
      </EmptyContainer>
    </Container>
  );
}
