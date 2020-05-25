import React from 'react';
import { Menu, Popup, List, Button, Image, Icon, Input } from 'semantic-ui-react';


const CartComponent = product => {
const { title, id, image,price, addToCart, removeFromCart} = product;
return (
  
  <div class="ui items">
    <div class="item">
      <div class="image">
        <img src={image}/>
      </div>
      <div class="content">
        <a class="header">{title}</a>
        <div class="description">
          <p></p>
        </div>
        <div class="extra">
          <a>
            <Icon name='rub'/>
            {price}
          </a>
        </div>
        <div class="meta">
        <Button onClick={addToCart.bind(this, product)} >+</Button>
        </div>
        <div class="extra">
          <Button onClick={removeFromCart.bind(this, id)} color= "red">Удалить</Button>
        </div>
      </div>
    </div>
  </div>

  
  
  // <List selection divided verticalAlign="middle">
  //   <List.Item>
  //     <List.Content className="textProduct">{title}</List.Content>
  //     <Image avatar src={image} />
  //     <List.Content floated="right">
  //       <Button onClick={removeFromCart.bind(this, id)} color= "red">Удалить</Button>
  //     </List.Content>
  //     <List.Content floated="right"> 
  //     <a>
  //       <Icon name='rub'/>
  //        {price}
  //     </a></List.Content>
  //   </List.Item>
  // </List>
);
}
const MenuComp = ({ totalPrice, count, items }) => (
  <Menu> 
    <Menu.Item
      name='editorials'>
        Магазин продуктов
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item
        name='reviews'>
          Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб.
      </Menu.Item>
      
      <Popup
        trigger={
          <Menu.Item name="cart">
            Корзина (<b>{count}</b>) 
          </Menu.Item>
        }
        content={items.map(product => <CartComponent {...product} />)}
        on="click"
        hideOnScroll>
      </Popup>
    </Menu.Menu>
  </Menu>
);
     
export default MenuComp;