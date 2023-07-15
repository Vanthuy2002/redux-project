import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
  Stack,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { imgAvatar } from '../../utils/contants';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callApiGetUser } from '../../redux/apiReq';

function EditPage({ setIsEdit }) {
  const userInfo = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const handleClose = () => setIsEdit(false);

  const [name, setUserName] = useState(userInfo.name);
  const [age, setAge] = useState(userInfo.age);
  const [desc, setDesc] = useState(userInfo.desc);
  const [avatar, setAvatar] = useState(userInfo.avatar);

  const handleClickImg = (e) => {
    setAvatar(e.target.src);
    e.target.classList.toggle('choose');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, age, desc, avatar };
    callApiGetUser(user, dispatch);
    handleClose();
  };

  return (
    <>
      <div className='grap'>
        <Card.Title as='h3' className='mb-3 text-center'>
          Update Profile👩👩
        </Card.Title>
        <Form className='w-100' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name='name'
              type='text'
              placeholder='Enter your text...'
              value={name}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='age'>
            <Form.Label>Age</Form.Label>
            <Form.Control
              name='age'
              type='text'
              placeholder='Enter your age, eg: 20, ...'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              name='desc'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Form.Group>
          <Stack direction='horizontal' gap={3} className='mb-3'>
            <Button
              onClick={handleClose}
              variant='warning'
              type='button'
              className='ms-auto'
            >
              Cancer
            </Button>
            <Button variant='primary' type='submit'>
              Save
            </Button>
          </Stack>
          <Container>
            <Row>
              {imgAvatar.map((image, index) => (
                <Col key={index} xs={12} md={6} lg={4} className='text-center'>
                  <Image
                    onClick={handleClickImg}
                    src={image.url}
                    rounded
                    className='edit-ava my-3'
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </Form>
      </div>
    </>
  );
}

EditPage.propTypes = {
  setIsEdit: PropTypes.func,
};

export default EditPage;
