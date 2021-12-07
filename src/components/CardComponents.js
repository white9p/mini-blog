import React from 'react';
import nextId from 'react-id-generator';
import { Button, Card, CardGroup, Container , CardImg, CardHeader, CardTitle, CardBody, CardText, CardSubtitle} from 'reactstrap';
import PopCard from './PopCard';

const CardComponents = ({cardList, addCard}) => {
  return (
    <Container >
      <PopCard cardList={cardList}  addCard={addCard}/>
      <CardGroup xs="3" style={{marginTop:"20px"}}>
        {cardList && cardList.map((cd) => {
          return(
          <Card key={nextId()} style={{minWidth:"30%", maxWidth:"30%"}}>
            <CardImg src={cd.img} alt="Card image" style={{width:"100%", padding:"20px"}}/>
              <CardBody>
                <CardTitle tag="h5">
                  {cd.title}
                </CardTitle>
                <CardSubtitle tag="h6"  className="mb-2 text-muted" >
                  {cd.subTitle}
                </CardSubtitle>
                <CardText>
                  {cd.text}
                </CardText>
              </CardBody>
          </Card>
          )
        })}
       
      </CardGroup>
    </Container>

  );
};

export default CardComponents;