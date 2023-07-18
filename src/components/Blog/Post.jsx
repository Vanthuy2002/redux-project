import { Card, Badge, Stack, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../redux/postSlice';
const idolUrl =
  'https://www.gwigwi.com/wp-content/uploads/2020/11/gwigwi.com-potret-terbaru-eimi-fukuda-dalam-majalah-fashion-jepang-2.jpg';

function Post() {
  const { post } = useSelector((state) => state?.post);
  const dispatch = useDispatch();
  const data = [...post];

  const handleDelete = (title) => {
    dispatch(deletePost(title));
  };

  return (
    <Stack direction='horizontal' gap={3} className='mt-3 align-items-start'>
      {data.length > 0 &&
        data.map((item, index) => {
          if (item.title === '' || item.desc === '') return;
          return (
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant='top' src={idolUrl} />
              <Card.Body>
                <Card.Title>
                  {item.title} <Badge bg='primary'>{item.select}</Badge>
                </Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button
                  onClick={() => handleDelete(item.title)}
                  variant='primary'
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          );
        })}
    </Stack>
  );
}

export default Post;
