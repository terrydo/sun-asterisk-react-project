/**
 *
 * RegisterPage
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
import {
  LoginPageWrapper,
  FormWrapper,
  Logo,
} from 'containers/AuthenticationPage/styled-components';
import makeSelectRegisterPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import { registerAction } from './actions';

export function RegisterPage({ register }) {
  useInjectReducer({ key: 'registerPage', reducer });
  useInjectSaga({ key: 'registerPage', saga });

  const nameRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const rePasswordInputRef = useRef(null);

  const doRegister = () => {
    const name = nameRef.current.value;
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    const rePassword = rePasswordInputRef.current.value;

    if (password !== rePassword) {
      alert('Your password and your confirm password are not matched.');
      return;
    }

    const payload = {
      name,
      email,
      password,
      password_confirmation: rePassword,
    };

    register(payload);
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Description of Register Page" />
      </Helmet>

      <LoginPageWrapper>
        <Logo />
        <FormWrapper className="container">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="email"
              className="form-control"
              id="firstName"
              ref={nameRef}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={emailInputRef}
            />
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
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirmation Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              ref={rePasswordInputRef}
            />
          </div>

          <br />
          <button
            type="button"
            onClick={doRegister}
            className="btn btn-block btn-primary"
          >
            Submit
          </button>
        </FormWrapper>
      </LoginPageWrapper>
    </>
  );
}

RegisterPage.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    register: payload => dispatch(registerAction(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(RegisterPage);
