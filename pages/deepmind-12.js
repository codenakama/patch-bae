import React from 'react';
import { Column, Row, Subhead, Text } from 'rebass';
import {
  bankA,
  bankC,
  bankD,
  bankE,
  bankF,
  bankG,
  bankH
} from './deepmind12/banks';

const DeepMind12Page = props => {
  return (
    <div>
      <Row wrap>
        <Column>
          <Subhead mb={3}>Bank A</Subhead>
          {bankA.map(item => <Text mb={1}>{item}</Text>)}
        </Column>
        <Column>
          <Subhead mb={3}>Bank C</Subhead>
          {bankC.map(item => <Text mb={1}>{item}</Text>)}
        </Column>
        <Column>
          <Subhead mb={3}>Bank D</Subhead>
          {bankD.map(item => <Text mb={1}>{item}</Text>)}
        </Column>
        <Column>
          <Subhead mb={3}>Bank E</Subhead>
          {bankE.map(item => <Text mb={1}>{item}</Text>)}
        </Column>
        <Column>
          <Subhead mb={3}>Bank F</Subhead>
          {bankF.map(item => <Text mb={1}>{item}</Text>)}
        </Column>
        <Column>
          <Subhead mb={3}>Bank G</Subhead>
          {bankG.map(item => <Text mb={1}>{item}</Text>)}
        </Column>
        <Column>
          <Subhead mb={3}>Bank H</Subhead>
          {bankH.map(item => <Text mb={1}>{item}</Text>)}
        </Column>
      </Row>
    </div>
  );
};

DeepMind12Page.propTypes = {};

export default DeepMind12Page;
