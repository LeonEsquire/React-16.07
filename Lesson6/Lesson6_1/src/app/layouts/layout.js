import React from 'react';

export default class layout extends React.Component
{

	constructor(props)
	{
		super(props);
		this.brand = 'React blog!';

	}

	isActive(href) // вычисление активного пункта меню
	{
		return window.location.pathname === href;
	}

	render()
	{	
		return (
			<div>
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
						<div className="col-xs-12">
							{this.props.children}						
						</div>
					</div>
				</div>	
				<footer className="card-footer">
					&copy; 2018
				</footer>
			</div>
		);
	}
}
