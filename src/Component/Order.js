import React, { Component } from 'react'
import { AiFillCloseCircle } from "react-icons/ai";


export class Order extends Component {
  render() {
	 return (
		<div className='item'>
				<img src={"./img/" + this.props.item.img} alt="foto-costume"/>
				<h2>{this.props.item.title}</h2>
				<b>{this.props.item.price}₴</b>
				< AiFillCloseCircle className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}/>
		</div>
	 )
  }
}

export default Order
