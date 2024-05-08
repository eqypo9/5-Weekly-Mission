import styled from 'styled-components';
import facebookIcon from '../../assets/images/akar-icons_facebook-fill.svg';
import twitterIcon from '../../assets/images/akar-icons_twitter-fill.svg';
import youtubeIcon from '../../assets/images/akar-icons_youtube-fill.svg';
import instagramIcon from '../../assets/images/ant-design_instagram-filled.svg';

const ICONS = {
  facebook: facebookIcon,
  twitter: twitterIcon,
  youtube: youtubeIcon,
  instagram: instagramIcon,
};

export const SnsButton = styled.button`
  background-image: url(${({ icon }) => ICONS[icon]});
  background-color: transparent;
  background-size: cover;
  border: none;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
  }
`;
