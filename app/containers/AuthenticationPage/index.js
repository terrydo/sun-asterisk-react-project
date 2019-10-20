/**
 *
 * AuthenticationPage
 *
 */

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAuthenticationPage from './selectors';
import reducer from './reducer';
import saga from './saga';

import { loginAction } from './actions';

import * as styledComponents from './styled-components';

const { FormWrapper, LoginPageWrapper, Logo } = styledComponents;

export function AuthenticationPage({ dispatchLogin }) {
  useInjectReducer({ key: 'authenticationPage', reducer });
  useInjectSaga({ key: 'authenticationPage', saga });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const doLogin = () => {
    const payload = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    dispatchLogin(payload);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of AuthenticationPage" />
      </Helmet>

      <LoginPageWrapper>
        <Logo />
        <FormWrapper className="container">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={emailInputRef}
            />
            <small id="emailHelp" className="form-text text-muted">
              Enter your email or your account name.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              ref={passwordInputRef}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me?
            </label>
          </div>
          <button
            type="button"
            onClick={doLogin}
            className="btn btn-block btn-primary"
          >
            Submit
          </button>
        </FormWrapper>
      </LoginPageWrapper>
    </>
  );
}

AuthenticationPage.propTypes = {
  dispatchLogin: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authenticationPage: makeSelectAuthenticationPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchLogin: payload => {
      dispatch(loginAction(payload));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AuthenticationPage);
