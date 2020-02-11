import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle
} from "reactstrap";
import { Link } from "react-router";

//import imgNoMetamask from "../../images/no_metamask.png";
//import imgMetamask from "../../images/metamask.png";


import "./installmetamask.css";

const InstallMetaMask = () => (
  <div className="warning__background">
    <Container fluid>
      <Row className="py-4 justify-content-center">
        <Col xs="12" sm="10" md="10" lg="8">
          <Card className="shadow-sm">
            <CardBody>
              <section className="section-no-metamask">
                <h1 style={{ textAlign: "center" }}>
                  Whooops! We can't find a Web3 provider!
                </h1>
               
              </section>
              <section className="section-require-metamask">
                <h2>
                 FOAM requires MetaMask or a Web3 Ethereum comaptible
                  browser
                </h2>
                {/* <Link to="/learn-more" className="learn-more">
                  LEARN MORE
                </Link>
                <br />
                <h4>or</h4>
                <br /> */}
                <a href="https://metamask.io/" target="_blank">
                  
                </a>
                <hr />
              </section>
              <section className="section-providers">
                <h2>
                  If MetaMask is not an option for you, try one of these Web3
                  Providers
                </h2>
                <div>
                 
                </div>
                <hr />
              </section>
              {/* <section className="section-footer">
                <Link to="/home" className="back-to-home">
                  BACK TO HOME
                </Link>
              </section> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default InstallMetaMask;
