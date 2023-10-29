import { Col, Row } from "react-bootstrap";
import Premium from "../../components/small/premium";
import FollowParent from "../../components/medium/followParent";
import Navbar from "../../components/big/navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear} from "@fortawesome/free-solid-svg-icons";
import NotificationsProp from "../../components/small/notificationsProp";
import logoWhite from "../../assets/logo-white.png";
import user from "../../assets/h.jpg";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();
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
                  <div className="left" >
                    <span>All</span>
                  </div>
                  <div className="" onClick={()=>{navigate("/verified")}}>
                    <span>Verified</span>
                  </div>
                  <div className="" onClick={()=>{navigate("/mentions")}}>
                    <span>Mentions</span>
                  </div>
                </div>
              </div>

              <NotificationsProp img={logoWhite} notification="There was a login to your account @mohamedhammal from a new device on Sep 05, 2023. Review it now."></NotificationsProp>
              <NotificationsProp img={logoWhite} notification="Your password was reset on your account. Based on this change, additional changes to your account may be restricted temporarily."></NotificationsProp>
              <NotificationsProp img={user} notification="Ahmed hesham liked your post"></NotificationsProp>
              <NotificationsProp img={logoWhite} notification="There was a login to your account @mohamedhammal from a new device on Sep 05, 2023. Review it now."></NotificationsProp>
              <NotificationsProp img={logoWhite} notification="Your password was reset on your account. Based on this change, additional changes to your account may be restricted temporarily."></NotificationsProp>
              <NotificationsProp img={user} notification="Ahmed hesham liked your post"></NotificationsProp>
              <NotificationsProp img={logoWhite} notification="There was a login to your account @mohamedhammal from a new device on Sep 05, 2023. Review it now."></NotificationsProp>
              <NotificationsProp img={logoWhite} notification="Your password was reset on your account. Based on this change, additional changes to your account may be restricted temporarily."></NotificationsProp>
              <NotificationsProp img={user} notification="Ahmed hesham liked your post"></NotificationsProp>
              <NotificationsProp img={logoWhite} notification="There was a login to your account @mohamedhammal from a new device on Sep 05, 2023. Review it now."></NotificationsProp>
              <NotificationsProp img={logoWhite} notification="Your password was reset on your account. Based on this change, additional changes to your account may be restricted temporarily."></NotificationsProp>
              <NotificationsProp img={user} notification="Ahmed hesham liked your post"></NotificationsProp>

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
export default Notification;
