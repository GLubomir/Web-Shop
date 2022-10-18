import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Items from "./Component/Items";
import Categories from "./Component/Categories";
import ShowFullItem from "./Component/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Чоловічий класичний костюм',
          img: 'kostyum1.jpg',
          desc: ' Класичний костюм трійка світло-сірий, фактурна велика клітина 48 розмір',
          category: 'troika',
          price: '5250'
        },
        {
          id: 2,
          title: 'Зелений чоловічий костюм',
          img: 'green-kostjum.jpg',
          desc: ' Зелений чоловічий костюм трійка, оригінальний, офіційний, діловий.',
          category: 'troika',
          price: '7000'
        },
        {
          id: 3,
          title: 'Червоний чоловічий костюм',
          img: 'red-costume.jpg',
          desc: 'Молодіжний червоний чоловічий костюм двійка',
          category: 'deuce',
          price: '4500'
        },
        {
          id: 4,
          title: 'Чорний чоловічий костюм',
          img: 'black-costume.jpg',
          desc: 'Класичний чорний чоловічий костюм двійка підійде як для ділової зустрічі, так і для будь-якого іншого важливого заходу.',
          category: 'deuce',
          price: '3500'
        },
        {
          id: 5,
          title: 'Темно-синій чоловічий костюм',
          img: 'black-blue-costume.jpg',
          desc: 'Темно-синій чоловічий костюм трійка від бренду RUDIE.',
          category: 'troika',
          price: '8400'
        },
        {
          id: 6,
          title: 'Коричневий чоловічий костюм',
          img: 'brown-costume.jpg',
          desc: 'Коричневий чоловічий костюм трійки Asos',
          category: 'troika',
          price: '5250'
        },
      ],
      showFullItem:false,
      fullItem:{}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }
onShowItem(item){
  this.setState({fullItem:item})
  this.setState({showFullItem: !this.state.showFullItem})
}

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true

    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
}

export default App;
