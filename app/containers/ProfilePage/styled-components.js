import styled from 'styled-components';
import defaultAvatar from 'assets/images/default-avatar.png';

export const AvatarPreviewWrapper = styled.div`
  position: relative;
  display: inline-block;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  margin-top: 45px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    transition: 0.5s opacity;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
  }

  &:hover:before {
    opacity: 1;
  }
`;

export const AvatarPreview = styled.img.attrs(props => ({
  src: props.avatar ? props.avatar : defaultAvatar,
}))`
  max-width: 200px;
  max-height: 200px;
`;

export const AvatarPreviewText = styled.span`
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 0;
  font-size: 16px;
  transform: translateY(-50%);
  color: ${p => p.theme.color.white};
  width: 100%;
  text-align: center;
  transition: 0.5s opacity;

  ${AvatarPreviewWrapper}:hover & {
    opacity: 1;
  }
`;
