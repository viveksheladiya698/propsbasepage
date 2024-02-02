import '../App.css';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdStar  } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";



function Courses(props) {
    return (
        <div className='section1 section'>
            <Container>
                <Row>
                    <Col className='mb-4'>
                        <div className='heading'>
                            <h4>CREATIVE COURSE</h4>
                            <h1 className='sh-1'>OFFERED COURSES</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        props.cad.map((ele) => {
                            return (
                                <Col lg={4} className='mb-4'>
                                    <div className='box'>
                                        <Card>
                                            <Card.Img variant="top" src={ele.img} />
                                            <Card.Body>
                                                <Card.Title>{ele.head}</Card.Title>
                                                <div className='d-flex justify-content-between cda'>
                                                    <div className="crd-ico">
                                                        <span><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoStarHalfOutline /></span>
                                                    </div>
                                                    <div className="crd-btn">
                                                        <button>Know More..!</button>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
                <div className='d-end'>
                    <div className='d-end-btn'>
                        <button>View All Courses  <FaLongArrowAltRight></FaLongArrowAltRight></button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default Courses;