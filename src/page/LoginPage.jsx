import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Logo from "../Component/Logo";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("로그인 유저");
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <Row className="w-full justify-center max-w-[480px]">
          <Col>
            <div className="bg-white p-5  flex justify-center">
              <Logo width={500} height={30} />
            </div>

            <Form onSubmit={loginUser}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="EMAIL"
                  className="border-0 border-bottom rounded-0 px-0 py-3 shadow-none login-input"
                />
              </Form.Group>

              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="PASSWORD"
                  className="border-0 border-bottom rounded-0 px-0 py-3 shadow-none login-input"
                />
              </Form.Group>

              <Button
                variant="dark"
                type="submit"
                className="w-100 py-3 rounded-0 fw-light login-btn"
              >
                LOGIN
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
