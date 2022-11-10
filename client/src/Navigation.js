import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import BobeNeon from './assets/BobeNeon.png'
import BobeNeonBlue from './assets/BobeNeonBlue.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Container, Row, Col, Form, Button, Navbar} from 'react-bootstrap';


function Navigation() {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    return(
        <Navbar className="p-0 m-0 justify-content-center" fixed="top" >
          <Row style={{width: '100%'}}>
            <Col xs={12} className='text-center'>
              <img src={BobeNeonBlue} style={{height:"auto", maxWidth:"100%"}} />
              
            </ Col>

            <Nav >



                
            </Nav>
          </Row>
          <Button className="btn-success p-3" style={{display: visible ? 'inline' : 'none', position:"fixed", width:"fit-content",height:"fit-content",left:"90%",bottom:"40px",fontSize:"10px",zIndex:"99",cursor:"pointer", color:"red",border:"red"}}>
              <span className="material-symbols-outlined" onClick={scrollToTop} style={{height:"fit-content"}}><FontAwesomeIcon icon={faChevronUp} className="fas fa-3x" /></span>
          </Button>


        </Navbar >

    )
}



export default Navigation;