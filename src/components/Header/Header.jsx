import { Button, Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Header = ({ setEdit }) => {
  const { name, age, desc, avatar } = useSelector((state) => state?.user);

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
        <Image src={avatar} rounded className='info-ava' />
        <Card.Title className='info-name'>👩 {name}</Card.Title>
        <Card.Text>👱‍♀️ {age}</Card.Text>
        <Card.Text>💼 {desc}</Card.Text>
      </section>
    </header>
  );
};

Header.propTypes = {
  setEdit: PropTypes.func,
};

export default Header;
