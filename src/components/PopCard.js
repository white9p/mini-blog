import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

const PopCard = ({cardList, addCard}) => {
  const [ open , setOpen ] = useState(false)
  const [ title , setTitle ] = useState('')
  const [ subTitle , setSubTitle ]=useState('')
  const [ img, setImg ] = useState('')
  const [ text, setText ]=useState('')


const uploadPost = () =>{
  addCard(title, subTitle, img, text)
  setOpen(!open)
}

const canclePost = () => {
  setOpen(!open)
}

const writePost = () => {
  setOpen(!open)
  setTitle('')
  setSubTitle('')
  setText('')
  setImg('')
}
useEffect(()=>{
console.log(cardList);
},[cardList])
  return (
<div>
  <Button
    color="danger"
    onClick={writePost}
    style={{marginTop:"40px"}}
  >
    글쓰기
  </Button>
  <Modal
    toggle={()=>setOpen(!open)}
    isOpen={open}
  >
    <ModalHeader toggle={()=>setOpen(!open)}>
      오늘 어떠셨어요?
    </ModalHeader>
    <ModalBody>
      <CardImg src={img}/>
      <Card style={{padding:"20px"}}>
        <CardBody>
          <CardTitle tag="h5">
            <Label>제목</Label>
            <Input onChange={(e)=>setTitle(e.target.value)} value={title} />
          </CardTitle>
          <CardSubtitle>
            <Label>소제목</Label>
            <Input  onChange={(e)=>setSubTitle(e.target.value)} value={subTitle}/>
          </CardSubtitle>
          <CardText>
            <Row>
              <Label>사진</Label>
              <Input type="url"  onChange={(e)=>setImg(e.target.value)} value={img}/>
            </Row>
            <Row>
              <Label>내용</Label>
              <Input type="textarea"  onChange={(e)=>setText(e.target.value)} value={text}/>
            </Row>
          </CardText>
        </CardBody>
      </Card>
    </ModalBody>
    <ModalFooter>
      <Button
        color="primary"
        onClick={uploadPost}
      >
       올리기
      </Button>
      {' '}
      <Button onClick={canclePost}>
        취소
      </Button>
    </ModalFooter>
  </Modal>
</div>
  );
};

export default PopCard;