import productsData from '../data/products';
import { Button, Card, CardBody, Typography, IconButton } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../store/cartReducers';
import { RiDiscountPercentFill } from 'react-icons/ri';


const SingleProduct = () => {

    const {prodId}=useParams()
    const dispatch=useDispatch()


     const [p]=productsData.filter((p)=> p.id==prodId)
     
    
  const product = {
    id: p.id,
    name: p.prodTitle,
    description: 'This is a detailed description of the product. It includes all the features, benefits, and specifications that a potential buyer might want to know.',
    price: p.price,
    size:p.size,
    image: p.prodImg
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="flex flex-col h-full md:flex-row items-center md:items-start  f">
        <img src={product.image} alt={product.name} className="w-full h-[400px] object-cover md:w-1/2 rounded-md" />
        <CardBody className="md:ml-6">
          <Typography variant="h2" color="blue-gray" className=' font-[]'>
            {product.name}
          </Typography>
          <Typography className="mt-4  font-[]" color="blue-gray" >
            {product.description}
          </Typography>
          <Typography variant="h4" color="green" className="mt-4  font-[]">
            Price: {product.price}.00 RS.
          </Typography>
          <Typography variant="h4" color="green" className="mt-4  font-[]">
            Size: {product.size}
          </Typography>
          
          <div className="mt-6 flex space-x-2">
            <Button color="green" size="lg" className=' font-[]' onClick={()=>dispatch(addToCart(product.id))}>
              Add to Cart
            </Button>
            <Button color="blue" size="lg" variant="outlined" className=' font-[]'>
              Buy Now
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SingleProduct;
