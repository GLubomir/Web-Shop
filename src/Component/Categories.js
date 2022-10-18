import React, { Component } from 'react'

export default class Categories extends Component {
	constructor(props){
		super(props)
		this.state = {
			categories: [
				{
					key:'all',
					name:'Всe'
				},
				{
					key:'deuce',
					name:'Костюм двійка'
				},
				{
					key:'troika',
					name:'Костюм трійка'
				}
			]
		}

	}
	render() {
	 return (
		<div className='categories'>
		  {this.state.categories.map(el => (
			<div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
		  ))}
		</div>
	 )
  }
}
