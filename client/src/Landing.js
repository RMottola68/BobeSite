import { Row, Container, Col, Ratio } from 'react-bootstrap';
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import examplepanel from "./assets/examplepanel.png";



function Landing() {

    return (      
        <Container fluid style={{ width:"100vw", height: "100vh", paddingTop: "0px"}}>
                <Row className="justify-content-center mb-3">
                
                    <Col xs={12} lg={6} >
                        <Ratio aspectRatio={"16x9"} >
                            <iframe               
                                               
                                // style={{minHeight:"300px", maxHeight: "500px", width:"100%", height:"100%", minWidth:"400", maxWidth:"888px"}}
                                title="twitch-player-embed"
                                src="https://player.twitch.tv/?channel=bobe_&parent=localhost" 
                                allowfullscreen="true" 
                                scrolling="no" 

                            >                        
                            </iframe>
                        </Ratio>
                    </Col>
                    
                    <Col xs={12} lg={2} className="d-flex justify-content-center mx-3">
                        <Ratio aspectRatio={1/2} className="">
                        <iframe 
                            id="chat-embed" 
                            title="embedded-chat"
                            style={{ borderRadius: "5px"}}
                            src="https://www.twitch.tv/embed/bobe_/chat?parent=localhost"
                            height="100%"
                            width="100%"

                        >
                        </iframe>   
                        </Ratio>                      
                    </Col>                
                    
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} lg={4} >
                        <img src={examplepanel} style={{height:"auto", maxWidth:"100%"}} alt="twitch about panel" />
                        <br></br>
                        <img src={examplepanel} style={{height:"auto", maxWidth:"100%"}} alt="twitch about panel" />
                        <br></br>
                        <img src={examplepanel} style={{height:"auto", maxWidth:"100%"}} alt="twitch about panel" />
                        <br></br>
                        <img src={examplepanel} style={{height:"auto", maxWidth:"100%"}} alt="twitch about panel" />
                        <br></br>
                        <img src={examplepanel} style={{height:"auto", maxWidth:"100%"}} alt="twitch about panel" />
                        <br></br>
                    </Col>
                    
                    <Col xs={12} lg={4} className="justify-content-center mx-3">
                        {/* <a class="twitter-timeline" href="https://twitter.com/twitterDev?ref_src=twsrc%5Etfw" data-tweet-limit="3">Tweets by twitterDev</a>  */}

                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="bobeow"
                            options={{height:"800"}}
                        />
                        {/* <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" className="" style={{position: "static", visibility: "visible", width: "432px", height: "1057px", display: "block", flexGrow: "1"}} title="Twitter Timeline" src="https://twitter.com/bobeow?ref_src=twsrc%5Etfw"></iframe> */}
                    </Col>
                </Row>
        </Container>      
            
    );
}

export default Landing;