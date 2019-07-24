import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { removeFeature, addFeature } from './store/actions';
import Navbar from './components/Navbar';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
`;

const CarBox = styled.div`
  display: flex;
  width: 75%;
  padding: 20px;
  align-items: center;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  flex-direction: column;
`;

const FeaturesBox = styled.div`
  display: flex;
  width: 25%;
  border-bottom: 1px solid black;
  padding: 20px;
  align-items: center;
  flex-direction: column;
`;

const App = (props) => {
  const removeFeature = item => {
    props.removeFeature(item);
  };

  const buyItem = item => {
    props.addFeature(item);
  };

  return (
    <>
      <Navbar />
      <Container>
        <CarBox>
          <Header car={props.car} />
          <AddedFeatures car={props.car} removeFeature={removeFeature} />
        </CarBox>
        <FeaturesBox>
          <AdditionalFeatures store={props.store} addFeature={buyItem} />
          <Total car={props.car} additionalPrice={props.additionalPrice} />
        </FeaturesBox>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(mapStateToProps, { removeFeature, addFeature })(App);
