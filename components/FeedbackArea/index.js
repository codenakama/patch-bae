import PropTypes from 'prop-types';
import React from 'react';
import { Absolute, Button, Relative, Text, Textarea } from 'rebass';
import styled, { css } from '../../node_modules/styled-components';
import OutsideAlerter from '../OutsideAlerter';

const focused = props => {
  if (props.focused) {
    return css`
      height: 130px;
      padding-bottom: 3rem;
    `;
  }
};

const ThankYouMessage = styled.div`
  height: 130px;
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.gray};
`;

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

class FeedbackArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackOpen: false,
      message: '',
      emoji: '',
      isSending: false,
      isSuccess: false
    };
  }

  handleMessageChanged = e => {
    this.setState({ message: e.target.value });
  };

  handleSendFeedback = async () => {
    const { message, emoji } = this.state;
    const { postToUrl } = this.props;

    const reqBody = {
      feedback: {
        message,
        emoji
      }
    };
    this.setState({ isSending: true });
    const response = await fetch(postToUrl, {
      method: 'POST',
      body: JSON.stringify(reqBody)
    });

    this.setState({ isSending: false });

    if (response.ok) {
      this.setState({ isSuccess: true });
    } else {
      this.setState({ isSuccess: false });
    }
  };

  render() {
    const { props } = this;
    const { isSuccess, isSending, feedbackOpen } = this.state;
    return (
      <OutsideAlerter
        handleClickOutsideElement={() =>
          this.setState({ feedbackOpen: false, isSuccess: false })
        }
      >
        <Relative>
          {isSuccess &&
            feedbackOpen &&
            !isSending && (
              <Absolute right={0} top={0} zIndex={10}>
                <ThankYouMessage>
                  <Text fontWeight="bold">Thank you for your feedback.</Text>
                </ThankYouMessage>
              </Absolute>
            )}

          {!isSuccess && (
            <Absolute right={0} top={0}>
              <FeedbackTextarea
                onChange={this.handleMessageChanged}
                onFocus={() => this.setState({ feedbackOpen: true })}
                focused={this.state.feedbackOpen}
                rows={1}
                placeholder={this.state.feedbackOpen ? '' : 'Feedback'}
              />
            </Absolute>
          )}

          {this.state.feedbackOpen &&
            !isSuccess && (
              <Absolute top={92} right={6}>
                <SendButton onClick={this.handleSendFeedback}>
                  {isSending ? '...' : 'Send'}
                </SendButton>
              </Absolute>
            )}
        </Relative>
      </OutsideAlerter>
    );
  }
}

FeedbackArea.propTypes = {
  postToUrl: PropTypes.string.isRequired
};

export default FeedbackArea;
