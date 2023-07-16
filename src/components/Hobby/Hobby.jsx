import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import { addHobby, setActive } from '../../redux/hobbySlice';
import { faker } from '@faker-js/faker';

const Hobby = () => {
  const listUser = useSelector((state) => state?.hobby?.list);
  const dispatch = useDispatch();

  const handleRandom = () => {
    const fakedata = {
      id: faker.string.nanoid(),
      name: faker.person.fullName(),
      activeId: false,
    };
    dispatch(addHobby(fakedata));
  };

  const handleActive = (item) => {
    dispatch(setActive(item));
  };

  return (
    <Container>
      <Card.Title className='my-3'>Hobby list</Card.Title>
      <Button variant='primary' onClick={handleRandom}>
        Random
      </Button>
      <ListGroup as='ol' numbered className='my-3'>
        {listUser &&
          listUser.map((item) => {
            if (item.title === '' || item.id === '') return;
            return (
              <ListGroup.Item
                key={item.id}
                as='li'
                className='d-flex justify-content-between align-items-center'
              >
                <Card.Title
                  className={`ms-2 me-auto ${
                    item.activeId ? 'text-decoration-line-through' : ''
                  }`}
                >
                  {item.name}
                </Card.Title>
                <Button
                  onClick={() => handleActive(item)}
                  bg='primary'
                  className='me-3'
                  disabled={item.activeId}
                >
                  Pass
                </Button>
                <Button variant='warning'>Remove</Button>
              </ListGroup.Item>
            );
          })}
      </ListGroup>
    </Container>
  );
};

export default Hobby;
