import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component {
  render() {
    return (
      <li><a href={this.props.href}>{this.props.children}</a></li>
    );
  }
}

MenuItem.defaultProps = {
  href: "/",
  children: "Главная страница"
}

MenuItem.propTypes = {
  href: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired
}

export default MenuItem;