/**
 *
 * Logout
 *
 */

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { logoutAction } from 'containers/Logout/actions';
import { push } from 'react-router-redux';
import makeSelectLogout from './selectors';
import reducer from './reducer';

export function Logout({ dispatch }) {
  useInjectReducer({ key: 'logout', reducer });
  dispatch(logoutAction());
  dispatch(push('/'));
  return '';
}

Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  logout: makeSelectLogout(),
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

export default compose(withConnect)(Logout);
