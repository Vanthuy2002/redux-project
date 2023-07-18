import { Button, Form, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/postSlice';

const selectOptions = [
  { value: 'nft', title: 'NFT' },
  { value: 'mood', title: 'Mood' },
  { value: 'tech', title: 'Tech' },
  { value: 'social', title: 'Social' },
];

const BlogPost = ({ show, setShow }) => {
  const dispatch = useDispatch();

  const handleActions = () => setShow(!show);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [select, setSelect] = useState('');

  const handleChange = (e, cb) => {
    cb(e.target.value);
  };

  const handleSubmit = () => {
    const payload = { title, desc, select };
    dispatch(createPost(payload));
    handleActions();
  };

  return (
    <>
      <Button onClick={handleActions} className='mt-auto' variant='info'>
        Add Post
      </Button>

      <Modal show={show} onHide={handleActions} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='title'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                value={title}
                name='title'
                onChange={(e) => handleChange(e, setTitle)}
                placeholder='like a post...'
              />
            </Form.Group>

            <Form.Group className='mb-3' controlId='desc'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Some description here...'
                name='desc'
                value={desc}
                onChange={(e) => handleChange(e, setDesc)}
              />
            </Form.Group>

            <Form.Select
              value={select}
              name='select'
              onChange={(e) => handleChange(e, setSelect)}
            >
              <option>Open this select menu</option>
              {selectOptions.length > 0 &&
                selectOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.title}
                  </option>
                ))}
            </Form.Select>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleActions}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant='primary'>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

BlogPost.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default BlogPost;
