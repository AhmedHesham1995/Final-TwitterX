import { Col, Row } from "react-bootstrap";
import Premium from "../../components/small/premium";
import FollowParent from "../../components/medium/followParent";
import Navbar from "../../components/big/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Verified = () => {
    const navigate=useNavigate();
  return (
    <>
      <section className="home">
        <Row>
          <Col sm={12} md={2}>
            <Navbar />
          </Col>

          <Col sm={11} md={6} className="test">
            <section className="center">
              <div className="center__header">
                <div className="row mt-2 ms-2 ">
                  <div className="col text-start h4">Notification</div>
                  <div className="col text-end">
                  <FontAwesomeIcon icon={faGear} className="right-search-icon me-5" />
                  </div>
                  
                </div>
                <div className="center__header__divs">
                  <div className="" onClick={()=>{navigate("/notification")}}>
                    <span>All</span>
                  </div>
                  <div className="left" >
                    <span>Verified</span>
                  </div>
                  <div className="" onClick={()=>{navigate("/mentions")}}>
                    <span>Mentions</span>
                  </div>
                </div>
              </div>
              <div className="center__trend" >
               <div className=" p-2 borders border-secondary border-bottom" style={{height:"800px"}}> 
                <div className="row text-start align-items-center  p-1 ">
                
                <div className="col p-2 mt-1 text-center ">
                  <h2>Nothing to see here — yet.</h2>
                  <p className="text-secondary">Likes, mentions, reposts, and a whole lot more — 
                  when it comes from a verified account, you’ll find it here.</p>
                </div>
              </div>
          </div>
        </div>

            
            </section>
          </Col>
          <Col md={4}>
            <section className="right">
              <Premium />

              <div className="right__container">
                <FollowParent />
              </div>
            </section>
          </Col>
        </Row>
      </section>
    </>
  );
};
export default Verified;
