import styled from 'styled-components';
import loginBackground from 'assets/images/login-page-pattern.png';
import logo from 'assets/images/logo.png';

export const FormWrapper = styled.form`
  max-width: 500px;
  margin: auto;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const LoginPageWrapper = styled.div`
  background: url(${loginBackground}) repeat;
  color: #fafafa;
  width: 100vw;
  height: 100vh;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  display: block;
  margin: 0 auto 15px;
`;
