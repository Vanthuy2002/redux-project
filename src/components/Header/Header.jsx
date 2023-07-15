import { Button, Card, Image, Spinner, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Header = ({ setEdit }) => {
  const { name, age, desc, avatar, pending, error } = useSelector(
    (state) => state?.user
  );

  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <header
      style={{
        backgroundColor: '#ff9051',
        backgroundImage: 'linear-gradient(to top right, #00f260 ,#0575e6)',
      }}
    >
      {pending ? (
        <Stack direction='row' className='center'>
          <Spinner animation='border' />
        </Stack>
      ) : (
        <section className='info-container'>
          <Button onClick={handleEdit} variant='info' className='info-edit'>
            Edit
          </Button>
          <Image src={avatar} rounded className='info-ava' />
          <Card.Title className='info-name'>👩 {name}</Card.Title>
          <Card.Text>👱‍♀️ {age}</Card.Text>
          <Card.Text>💼 {desc}</Card.Text>
        </section>
      )}
      {error && <Card.Text>Some thing went wrong, try again...</Card.Text>}
    </header>
  );
};

Header.propTypes = {
  setEdit: PropTypes.func,
};

export default Header;
