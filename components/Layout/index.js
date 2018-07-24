import Link from 'next/link';
import React from 'react';
import {
  Absolute,
  Button,
  Container,
  NavLink,
  Provider,
  Relative,
  Textarea,
  Toolbar
} from 'rebass';
import styled, { css } from '../../node_modules/styled-components';

const Logo = styled.img`
  width: 64px;
`;

const focused = props => {
  if (props.focused) {
    return css`
      height: 130px;
    `;
  }
};

const FeedbackTextarea = styled(Textarea)`
  -webkit-appearance: none;
  resize: none;
  transition: all 150ms ease-out;
  height: 24px;
  width: 230px;
  padding: 4px 8px;
  outline: 0;
  ${focused};
`;

const SendButton = styled(Button)`
  /* display: none; */
`;

const Controls = styled.div``;

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackOpen: false
    };
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <Provider>
        <Toolbar bg="#fff" color="black">
          <Link href="/">
            <NavLink>
              <Logo src="/static/images/logo_patch_bae.svg" />
            </NavLink>
          </Link>
          <NavLink ml="auto" fontWeight="normal">
            <Relative>
              <Absolute right={0} top={0}>
                <FeedbackTextarea
                  onFocus={() => this.setState({ feedbackOpen: true })}
                  focused={this.state.feedbackOpen}
                  rows={1}
                  placeholder="Feedback"
                />
              </Absolute>
              {this.state.feedbackOpen && (
                <Absolute top={92} right={6}>
                  <SendButton>Send</SendButton>
                </Absolute>
              )}
            </Relative>
          </NavLink>
        </Toolbar>
        <Container maxWidth={1024} mt={3} pt={64}>
          {children}
        </Container>
      </Provider>
    );
  }
}

Layout.propTypes = {};

export default Layout;
