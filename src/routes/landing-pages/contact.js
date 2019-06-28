import React, { Component, Fragment } from "react";
import { Container, Row, Form, Alert, Input, Button } from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionConnect from "Components/LandingPage/SectionConnect";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen };
}

const mapStyle = {
  width: "800",
  height: "500",
  frameborder: "0",
  border: "0"
}

const h2Style = {
  color: "ORANGERED"
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      phone : '',
      email : '',
      note : '',
      alert_message : ''
    }
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
}
    
onSave = (e) => {
  e.preventDefault();
  const url = "http://localhost:8080/api/customers";
  const data = { name : this.state.name, phone: this.state.phone, email : this.state.email, note : this.state.note }
  fetch(url, { method: 'POST', // or ‘PUT’
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{ 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(error => 
      this.setState({alert_message: "error"}))
    .then(response => 
      this.setState({alert_message: "success"}));
}
  onMobileMenuToggle() {
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu() {
    this.props.landingPageMobileMenuClose()
    return true;
  }

  onMenuClick(ref, event) {
    event.preventDefault();
    let scroller;
    if (ref !== "home") {
      scroller = scrollToComponent(this[ref], { align: 'top', offset: 60 });
      scroller.on('end', () => {
        this.headroom.unpin();
        this.props.landingPageMobileMenuClose();
      });
    } else {
      scrollToComponent(this[ref], { align: 'top' });
    }
  }

  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
  }

  render() {
    const { messages } = this.props.intl;
    const { name, phone, email, note, alert_message } = this.state;
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen ? "landing-page show-mobile-menu" : "landing-page"}>
          <MenuMultipageMobile onUnmountingMenu={() => this.onUnmountingMobileMenu()}></MenuMultipageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
              <MenuMultipage onMobileMenuToggle={() => this.onMobileMenuToggle()}></MenuMultipage>
            </Headroom>

            <div className="content-container" ref={(x) => { this.home = x; }}>
              <div className="section home subpage">
                <Container>
                  <SubHero title={messages["bh.slogan.title"]}>
                    <h1 style={h2Style}>Ngọn lửa của niềm tin</h1>
                  </SubHero>
                  <Row>
                    <NavLink className="btn btn-circle btn-outline-semi-light hero-circle-button" to="#" onClick={(event) => this.onMenuClick("content", event)}>
                      <i className="simple-icon-arrow-down"></i>
                    </NavLink>
                  </Row>
                </Container>
              </div>

              <div className="section" ref={(x) => { this.content = x; }}>
                <Container>
                
                  <Row>
                    <Colxx xxs="12" lg="7">
                      <h2>LIÊN HỆ VỚI CHÚNG TÔI</h2>
                      <div className="card">
                        <div className="card-body">
                        {alert_message === "success" ? <Alert color="info">Yêu cầu tư vấn thành công </Alert> : null}
                          {alert_message === "error" ?  <Alert color="danger">Yêu cầu tư vấn thất bại</Alert> : null}
                          <Form onSubmit= {this.onSave}>
                            <h3>Tên của quý khách</h3>
                            <Input
                              type="text"
                              name="name"
                              id="name"
                              value = {name}
                              onChange = {this.onChange}
                            />
                            <h3>Số điện thoại</h3>
                            <Input
                              type="text"
                              name="phone"
                              id="phone"
                              value = {phone}
                              onChange = {this.onChange}
                            />
                            <h3>E-mail</h3>
                            <Input
                              type="text"
                              name="email"
                              id="email"
                              value = {email}
                              onChange = {this.onChange}
                             />

                            <h3>Lời nhắn của quý khách cần hỗ trợ</h3>
                            <Input 
                              type="textarea"
                              name="note"
                              id="note"
                              value = {note}
                              onChange = {this.onChange}
                             />
                           <Button className="btn btn-primary btn-multiple-state float-right" color="primary" onClick={this.onSave}>
                             Gửi
                           </Button>
                          </Form>
                        </div>
                      </div>
                    </Colxx>

                    <Colxx xxs="12" lg={{ size: 4, offset: 1 }} className="side-bar">
                      <h2>BẢO HIỂM PVI SÀI GÒN</h2>

                      <p className="text-primary mb-2">Địa chỉ</p>
                      <p className="mb-5">Lầu 6 Tòa nhà Central Park, số 117-119-121 Nguyễn Du, P.Bến Thành, Q.1, TP.HCM</p>

                      <p className="text-primary mb-2">Điện thoại</p>
                      <p className="mb-0">+84 962480094</p>
                      <p className="mb-5">+84 902379864</p>

                      <p className="text-primary mb-2">E-mail</p>
                      <p className="mb-0">baohiemtructuyen247pvi@gmail.com</p>

                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.494484958826!2d106.69221061526042!3d10.773388362194623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f251d1b5541%3A0xfa5170cfafdddeb7!2zQ8OUTkcgVFkgQuG6ok8gSEnhu4JNIFBWSSBTw4BJIEfDkk4!5e0!3m2!1svi!2s!4v1558665512387!5m2!1svi!2s" styl={mapStyle} allowFullScreen></iframe>
                    </Colxx>
                    <Colxx>
                    </Colxx>
                  </Row>

                  <Row>
                  </Row>

                </Container>
              </div>

              <div className="section background background-no-bottom mb-0">
                <Container>
                  <SectionConnect />
                </Container>
              </div>

              <div className="section footer mb-0">
                <Footer onClick={this.onMenuClick} />
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(Contact))