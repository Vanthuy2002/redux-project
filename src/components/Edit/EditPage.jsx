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

function EditPage({ setIsEdit }) {
  const [name, setUserName] = useState('Emi Fukuda');
  const [age, setAge] = useState(25);
  const [desc, setDesc] = useState('Iam a intern devs font-end');
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState(
    'https://pbs.twimg.com/media/ECMYzEBWkAExhme.jpg'
  );

  const handleClose = () => setIsEdit(false);
  return (
    <>
      <div className='grap'>
        <Card.Title as='h3' className='mb-3 text-center'>
          Update Profile👩👩
        </Card.Title>
        <Form className='w-100'>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              name='name'
              type='text'
              placeholder='Enter your text...'
              autoFocus
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
              autoFocus
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
          <Stack direction='horizontal' gap={3}>
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
        </Form>
      </div>
      <Container>
        <Row>
          {imgAvatar.map((image, index) => (
            <Col key={index} xs={12} md={6} lg={4} className='text-center'>
              <Image
                onClick={(e) => setAvatar(e.target?.src)}
                src={image.url}
                rounded
                className='edit-ava my-3'
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

EditPage.propTypes = {
  setIsEdit: PropTypes.func,
};

export default EditPage;
