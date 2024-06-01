import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="flex justify-center mt-20">
      <Card className="w-full max-w-sm ">
        <CardHeader color="blue-gray" className="text-center">
          <Typography variant="h4" color="white" >
            Create Account
          </Typography>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </CardBody>
          <CardFooter className="text-center">
            <Button color="black" type="submit" fullWidth>
              Register
            </Button>
            <Typography>
              have an account ? <Link to='/login' className='font-bold'>login</Link>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
