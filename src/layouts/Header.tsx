import * as React from 'react';
import { Layout } from 'antd';
import logo from '../assets/logo_horizontal_white.png';

const { Header: ReactHeader } = Layout;

function Header() {
  return (
    <ReactHeader>
      <img src={logo} />
    </ReactHeader>
  );
}

export default Header;
