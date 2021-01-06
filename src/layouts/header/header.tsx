import React, { useState } from 'react';
import { Header } from 'antd/lib/layout/layout';
import './header.less';
import { Link } from 'react-router-dom';
import { Button, Drawer } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
const brandLogo = require('../../assets/logo.webp');

export default function MainHeader() {
  const [visibal, setvisibal] = useState(false);
  const handleSideBar = () => {
    setvisibal(!visibal);
  };
  return (
    <>
      <Header className="header top-header">
        <nav className="main-container">
          <Link className="brand-logo" to="/">
            <img src={brandLogo} alt="logo" />
          </Link>
          <RenderLinks className="nav-links" />
          <Button className="btn-header">GET STARTED</Button>
          <button id="btn-toggle-md" onClick={handleSideBar}>
            <MenuFoldOutlined />
          </button>
        </nav>
      </Header>
      <Drawer closable onClose={handleSideBar} visible={visibal} placement="right">
        <Link className="brand-logo" to="/">
          <img src={brandLogo} alt="logo" />
        </Link>
        <RenderLinks className="drawer-links" />
      </Drawer>
    </>
  );
}

interface IPLinks {
  className: string;
}

const RenderLinks = ({ className }: IPLinks) => {
  return (
    <div className={className}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">HOW IT WORKS</Link>
        </li>
        <li>
          <Link to="/">Pricing</Link>
        </li>
        <li>
          <Link to="/">Science</Link>
        </li>
        <li>
          <Link to="/">FAQS</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
      </ul>
    </div>
  );
};
