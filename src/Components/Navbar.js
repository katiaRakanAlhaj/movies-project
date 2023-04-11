import { Container, Col, Row } from 'react-bootstrap';
import logo from '../images/logo.png';
const Navbar = ({ Search }) => {
  const onSearch = (word) => {
    Search(word);
  };
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} />
            </a>
          </Col>
          <Col xs="10" lg="11" className="d-flex align-items-center">
            <div className="search w-100">
              <input
                type="text"
                className="form-control"
                placeholder="ابحث"
                onChange={(event) => onSearch(event.target.value)}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Navbar;
