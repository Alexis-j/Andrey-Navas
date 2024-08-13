import { LogoContainer, LogoImage } from './styles';

import logo from '../../../img/img-hero/logo-removebg-preview.png';

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="logo-img" />
    </LogoContainer>
  );
}
