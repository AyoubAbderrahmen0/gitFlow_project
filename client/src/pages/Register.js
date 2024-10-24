import { Button, Card, Container, Form, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const appStyle = {
    backgroundImage: `url('https://marketplace.canva.com/EAD_IsMYK_w/1/0/1600w/canva-arri%C3%A8re-plan-virtuel-arc-en-ciel-d%C3%A9grad%C3%A9-rose-orange-et-bleu-VwJMC37j5jQ.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className="App" style={appStyle}>
      <Container style={{ maxWidth: '600px' }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Register</h2>
            <Form>
              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>User Name</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  aria-label="Username"
                />
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Phone Number</InputGroup.Text>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  aria-label="Phone Number"
                />
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Age</InputGroup.Text>
                <Form.Control
                  type="number"
                  placeholder="Enter your age"
                  aria-label="Age"
                />
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Email</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Password</InputGroup.Text>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  aria-label="Password"
                />
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputGroup>

              <InputGroup size="lg" className="mb-3">
                <InputGroup.Text style={{ width: '180px' }}>Verify Password</InputGroup.Text>
                <Form.Control
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  aria-label="Verify Password"
                />
                <Button 
                  variant="outline-secondary" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </Button>
              </InputGroup>

              <Button variant="primary" type="submit" className="w-100" size="lg">
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Register;
