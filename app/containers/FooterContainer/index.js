/**
 *
 * FooterContainer
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectFooterContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

const Footer = styled.footer`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const FooterSignUpLeft = styled.div`
  padding-right: 50px;
`;

const FooterSignUpHeading = styled.h3`
  display: block;
  color: ${props => props.theme.color.main};
  margin: 0 0 25px;
`;

const FooterSignUpText = styled.p`
  margin-top: 20px;
  line-height: 1.5;
  color: ${props => props.theme.color.textGrey};
`;

const FooterSignUpForm = styled.div`
  margin-top: 55px;
`;

const FooterSignUpInputWrapper = styled.div`
  padding-right: 25px;
`;

const FooterSignUpInput = styled.input`
  border-radius: 100px;
  padding: 0 15px;
  box-shadow: 0 0 16px -1px #bbb;
  border-color: transparent;
`;

const FooterSignUpButton = styled.button`
  border-radius: 100px;
  background-color: ${props => props.theme.color.main};
  color: ${props => props.theme.color.white};
  padding-left: 25px;
  padding-right: 25px;
  transition: 0.25s color, 0.25s background-color;
  &:hover {
    color: ${props => props.theme.color.main};
    background-color: ${props => props.theme.color.white};
  }
`;

export function FooterContainer() {
  useInjectReducer({ key: 'footerContainer', reducer });
  useInjectSaga({ key: 'footerContainer', saga });

  return (
    <Footer className="container">
      <div className="row">
        <div className="col-12 col-md-5">
          <FooterSignUpLeft>
            <FooterSignUpHeading>Signup For Newsletter</FooterSignUpHeading>
            <FooterSignUpText>
              Duis sint ex Lorem id tempor nulla ipsum. Ullamco dolore ex labore
              occaecat nisi nostrud magna.
            </FooterSignUpText>
          </FooterSignUpLeft>
        </div>
        <div className="col-12 col-md-7">
          <FooterSignUpForm className="d-flex">
            <FooterSignUpInputWrapper>
              <FooterSignUpInput
                placeholder="Your name"
                className="form-control"
              />
            </FooterSignUpInputWrapper>

            <FooterSignUpInputWrapper>
              <FooterSignUpInput
                placeholder="Your email"
                className="form-control"
              />
            </FooterSignUpInputWrapper>

            <FooterSignUpButton className="btn">Sign Up</FooterSignUpButton>
          </FooterSignUpForm>
        </div>
      </div>
    </Footer>
  );
}

FooterContainer.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  footerContainer: makeSelectFooterContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FooterContainer);
