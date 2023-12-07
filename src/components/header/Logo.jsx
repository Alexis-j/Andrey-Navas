import logo from '../../img/img-hero/logo-removebg-preview.png';

import '../../styles/header.css';

export default function Logo() {
  return (
    <div className='logo'>
      <img src={logo} alt="logo-img" />
    </div>
  );
}
