import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.brand = "React blog!";
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return (
      <>
        <Menu brand={this.brand}>
          <MenuItem href="/" active={this.isActive('/')}>
            Главная
          </MenuItem>
          <MenuItem href="/users" active={this.isActive('/users')}>
            Пользователи
          </MenuItem>
        </Menu>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {this.props.children}
            </div>
          </div>
        </div>
        <footer className="card-footer">
          &copy; 2019
        </footer>
      </>
    );
  }
}