import React from 'react';
import {Card, Image, Icon, Button, Modal, Header} from 'semantic-ui-react';

// const ProductComponent = ({ title, id, image}) => (
//   <List selection divided verticalAlign="middle">
//     <List.Item>
//       <List.Content floated="right">
//         <Button onClick={removeFromCart.bind(this, id)} color= "red">Удалить </Button>
//       </List.Content>
//       <Image avatar src={image} />
//       <List.Content>{title}</List.Content>
//     </List.Item>
//   </List>

// );

const ProductCard = product => {
  const { title, description, price, image, addedCount, addToCart } = product;

    return (
      <Modal
        trigger={
          <Card>
            <Image className='img' src={image} />
            <Card.Content>
              <Card.Header>{title}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='rub' />
                {price}
              </a>
            </Card.Content>
          </Card>
        }
        on="click"
        hideOnScroll>
      
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src={image} />
          <Modal.Description>
            <Header> Описание продукта:</Header>
              <span className='description'>{description}</span>
          </Modal.Description>
        </Modal.Content>
        <Modal.Header>
          <div class="modal-dialog">
            <a> Цена:&nbsp;{price}<Icon name='rub' /></a> 
          </div>
        </Modal.Header>
        <Modal.Actions>
          <Button onClick={addToCart.bind(this, product)} color= "green">В избранное</Button>
          <Button onClick={addToCart.bind(this, product)} color= "red">
            Добавить в корзину {addedCount > 0 && `(${addedCount})`}
          </Button>
        </Modal.Actions>
      </Modal>
    );
};


export default ProductCard;