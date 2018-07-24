import React from 'react';
import { Column, Heading, Input, Row, Subhead, Text } from 'rebass';
import {
  bankA,
  bankB,
  bankC,
  bankD,
  bankE,
  bankF,
  bankG,
  bankH
} from './deepmind12/banks';

class DeepMind12Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFilter: ''
    };
  }

  handleSearchChange = value => {
    this.setState({ searchFilter: value });
  };

  render() {
    const { props } = this;

    return (
      <div>
        <Heading mb={3}>Deepmindg 12 Patch List</Heading>
        <Row mb={3}>
          <Input
            placeholder="Search patch"
            onChange={e => this.handleSearchChange(e.target.value)}
          />
        </Row>
        <Row wrap>
          <Column>
            <Subhead mb={3}>Bank A</Subhead>
            {bankA.map(item => <Text mb={1}>{item}</Text>)}
          </Column>
          <Column>
            <Subhead mb={3}>Bank B</Subhead>
            {bankB.map(item => <Text mb={1}>{item}</Text>)}
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
  }
}

DeepMind12Page.propTypes = {};

export default DeepMind12Page;
