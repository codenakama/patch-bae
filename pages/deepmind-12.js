import React from 'react';
import {
  Badge,
  Column,
  Flex,
  Heading,
  Input,
  Row,
  Subhead,
  Text
} from 'rebass';
import styled, { withTheme } from 'styled-components';
import deepmindPatches from '../synths/deepmind12/banks';

const instruments = ['bass', 'pad', 'electric piano', 'synth', 'piano'];
const InstrumentFilter = styled(Badge)`
  cursor: pointer;
`;

class DeepMind12Page extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFilter: '',
      selectedInstrument: ''
    };
  }

  handleIntrumentFilterClicked = value => {
    this.setState({ selectedInstrument: value });
  };

  handleSearchChange = value => {
    this.setState({ searchFilter: value });
  };

  render() {
    const { props } = this;
    const { searchFilter, selectedInstrument } = this.state;
    return (
      <div>
        <Heading mb={3}>Deepmind 12 Patch List</Heading>
        <Flex mb={3}>
          <Input
            placeholder="Search patch"
            onChange={e => this.handleSearchChange(e.target.value)}
          />
        </Flex>
        <Flex mb={3}>
          {instruments.map(inst => {
            return (
              <InstrumentFilter
                onClick={() => this.handleIntrumentFilterClicked(inst)}
                bg={
                  selectedInstrument === inst
                    ? this.props.theme.colors.blue
                    : this.props.theme.colors.gray
                }
                color={
                  selectedInstrument === inst
                    ? this.props.theme.colors.white
                    : this.props.theme.colors.black
                }
              >
                {inst}
              </InstrumentFilter>
            );
          })}
        </Flex>
        <Row wrap>
          {Object.keys(deepmindPatches).map(key => {
            return (
              <Column>
                <Subhead mb={3}>{key}</Subhead>
                {searchFilter &&
                  !selectedInstrument &&
                  deepmindPatches[key]
                    .filter(i => i.toLowerCase().includes(searchFilter))
                    .map((item, index) => (
                      <Text key={key + index} mb={1}>
                        {item}
                      </Text>
                    ))}
                {!searchFilter &&
                  selectedInstrument &&
                  deepmindPatches[key]
                    .filter(i => i.toLowerCase().includes(selectedInstrument))
                    .map((item, index) => (
                      <Text key={key + index} mb={1}>
                        {item}
                      </Text>
                    ))}
                {!searchFilter &&
                  deepmindPatches[key].map(item => <Text mb={1}>{item}</Text>)}
              </Column>
            );
          })}
        </Row>
      </div>
    );
  }
}

DeepMind12Page.propTypes = {};

export default withTheme(DeepMind12Page);
