/**
 *
 * ProfilePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import HeaderContainer from 'containers/HeaderContainer';
import FooterContainer from 'containers/FooterContainer';
import profileBanner from 'assets/images/profile-banner.jpg';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { useAlert } from 'react-alert'
import * as c from './styled-components';
import { updateProfileAction } from './actions';
import { SUCCESS_MESSAGE } from './constants';

import makeSelectProfilePage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function ProfilePage({ profilePage, dispatch }) {
  useInjectReducer({ key: 'profilePage', reducer });
  useInjectSaga({ key: 'profilePage', saga });

  const alert = useAlert();
  const { user, successMessage } = profilePage;

  const [currentAvatar, setCurrentAvatar] = React.useState(null);
  const [currentAvatarBlob, setCurrentAvatarBlob] = React.useState(null);

  const fileInput = React.useRef();
  const nameInput = React.useRef();
  const phoneNumberInput = React.useRef();

  React.useEffect(() => {
    if (user) {
      setCurrentAvatar(user.avatar);
    }
  }, [user]);

  React.useEffect(() => {
    if (successMessage) {
      alert.success(successMessage);
      dispatch({
        type: SUCCESS_MESSAGE,
        payload: {
          message: null,
        },
      });
    }
  }, [successMessage]);

  const updateProfile = e => {
    e.preventDefault();

    const payload = {
      avatar: currentAvatarBlob,
      name: nameInput.current.value,
      phone_number: phoneNumberInput.current.value,
    };

    alert.info('Sending...', { timeout: 1000 });

    dispatch(updateProfileAction(payload));
  };

  const handlePhotoUpload = e => {
    console.log(e.target.files);

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = rEvent => {
      setCurrentAvatarBlob(rEvent.target.result);
    };

    setCurrentAvatar(URL.createObjectURL(file));
  };

  if (!user) return '';

  return (
    <>
      <Helmet>
        <title>ProfilePage</title>
        <meta name="description" content="Description of ProfilePage" />
      </Helmet>

      <HeaderContainer banner={profileBanner} />

      <form method="POST" className="container mt-5">
        <legend>My Profile</legend>

        <div className="row">
          <fieldset className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                defaultValue={user.email}
                disabled
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                ref={nameInput}
                className="form-control"
                id="name"
                defaultValue={user.name}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input
                type="text"
                ref={phoneNumberInput}
                className="form-control"
                id="phone"
                defaultValue={user.phone_number}
              />
            </div>
          </fieldset>

          <fieldset className="col-12 col-md-6">
            <div className="form-group text-center">
              <input
                type="file"
                name="avatar"
                ref={fileInput}
                id="avatar"
                onChange={handlePhotoUpload}
                className="d-none"
              />
              <c.AvatarPreviewWrapper as="label" htmlFor="avatar">
                <c.AvatarPreview avatar={currentAvatar} className="mx-auto" />
                <c.AvatarPreviewText>
                  <i className="fas fa-camera" />
                  &nbsp;Change photo
                </c.AvatarPreviewText>
              </c.AvatarPreviewWrapper>
            </div>
          </fieldset>
        </div>

        <button
          type="submit"
          onClick={updateProfile}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>

      <FooterContainer />
    </>
  );
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  profilePage: makeSelectProfilePage(),
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

export default compose(withConnect)(ProfilePage);
