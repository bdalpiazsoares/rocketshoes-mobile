import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { Wrapper, Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ cartSize, navigation }) {
  return (
    <Wrapper>
      <Container>
        <Logo onPress={() => navigation.navigate('Main')} />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
