import { Button, Card, Image } from 'react-bootstrap';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#ff9051',
        backgroundImage: 'linear-gradient(to top right, #00f260 ,#0575e6)',
      }}
    >
      <section className='info-container'>
        <Button variant='info' className='info-edit'>
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

export default Header;
