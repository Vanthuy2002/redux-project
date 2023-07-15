import { Button, Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({ setEdit }) => {
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
      <section className='info-container'>
        <Button onClick={handleEdit} variant='info' className='info-edit'>
          Edit
        </Button>
        <Image
          src='https://pbs.twimg.com/media/ECMYzEBWkAExhme.jpg'
          rounded
          className='info-ava'
        />
        <Card.Title className='info-name'>👩 Emi Fukuda</Card.Title>
        <Card.Text>👱‍♀️ 25</Card.Text>
        <Card.Text>💼 Iam a intern devs font-end</Card.Text>
      </section>
    </header>
  );
};

Header.propTypes = {
  setEdit: PropTypes.func,
};

export default Header;
