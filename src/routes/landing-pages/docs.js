import React, { Component, Fragment } from "react";
import {
  Container, Row, Card,
  Table
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionNewsletter from "Components/LandingPage/SectionNewsletter";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen };
}

const spanStyle = {
  color: "black",
  fontWeight: 'bold'
}

const spanPriceStyle = {
  color: "blue",
  fontWeight: 'bold'
}

const h4Style = {
  color : "orange",
  fontWeight: 'bold'
}

class Docs extends Component {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMobileMenuToggle() {
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu() {
    this.props.landingPageMobileMenuClose()
    return true;
  }
  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
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

  render() {
    const { messages } = this.props.intl;
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
                  <SubHero title={messages["cd.yearbook.title"]}>
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
                  <Row className="mt-5">
                    <Colxx xxs="12">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <h4><span style={spanStyle}>PHÍ BẢO HIỂM TỪ</span><span style={spanPriceStyle}> 67.500</span> <span style={spanStyle}>ĐẾN</span><span style={spanPriceStyle}> 900.000 VNĐ</span></h4>
                      </div>
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <h4><span style={spanStyle}>PHÍ BẢO HIỂM CHO GÓI</span><span style={spanPriceStyle}> 100 TRIỆU</span><span style={spanStyle}> LÀ</span><span style={spanPriceStyle}> 225.000 VNĐ</span></h4>
                      </div>
                    </Colxx>

                    <Colxx xxs="12">
                    </Colxx>

                    <Colxx xxs="12">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <h3>GIẢM 45% PHÍ CHO SỐ LƯỢNG TRÊN 20 NGƯỜI</h3>
                      </div>
                    </Colxx>

                    <Colxx xxs="12">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <h2>BIỂU PHÍ BẢO HIỂM TAI NẠN 24/24</h2>
                      </div>
                    </Colxx>

                    <Colxx xxs="12">

                      <Card className="d-flex flex-row mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <Table className="text-center" bordered hover>
                            <thead>
                              <tr>
                                <th className="text-success font-weight-bold">MỨC BỒI THƯỜNG<br />
                                  (VNĐ/Người/Năm)</th>
                                <th className="text-success font-weight-bold">MUA TỪ 5 ĐẾN 20 NGƯỜI<br />
                                  GIẢM 20%</th>
                                <th className="text-success font-weight-bold">MUA TRÊN 20 NGƯỜI<br />
                                  GIẢM 45%</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-primary">30 triệu đồng</td>
                                <td className="text-info">72,000</td>
                                <td className="text-danger">50,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">40 triệu đồng</td>
                                <td className="text-info">96,000</td>
                                <td className="text-danger">66,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">50 triệu đồng</td>
                                <td className="text-info">72,000</td>
                                <td className="text-danger">50,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">60 triệu đồng</td>
                                <td className="text-info">144,000</td>
                                <td className="text-danger">99,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">70 triệu đồng</td>
                                <td className="text-info">168,000</td>
                                <td className="text-danger">120,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">80 triệu đồng</td>
                                <td className="text-info">192,000</td>
                                <td className="text-danger">132,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">90 triệu đồng</td>
                                <td className="text-info">216,000</td>
                                <td className="text-danger">150,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">100 triệu đồng</td>
                                <td className="text-info">240,000</td>
                                <td className="text-danger">165,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">110 triệu đồng</td>
                                <td className="text-info">396,000</td>
                                <td className="text-danger">275,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">120 triệu đồng</td>
                                <td className="text-info">432,000</td>
                                <td className="text-danger">300,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">130 triệu đồng</td>
                                <td className="text-info">468,000</td>
                                <td className="text-danger">325,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">140 triệu đồng</td>
                                <td className="text-info">504,000</td>
                                <td className="text-danger">350,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">150 triệu đồng</td>
                                <td className="text-info">540,000</td>
                                <td className="text-danger">375,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">160 triệu đồng</td>
                                <td className="text-info">768,000</td>
                                <td className="text-danger">530,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">170 triệu đồng</td>
                                <td className="text-info">816,000</td>
                                <td className="text-danger">565,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">180 triệu đồng</td>
                                <td className="text-info">864,000</td>
                                <td className="text-danger">600,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">190 triệu đồng</td>
                                <td className="text-info">912,000</td>
                                <td className="text-danger">630,000</td>
                              </tr>
                              <tr>
                                <td className="text-primary">200 triệu đồng</td>
                                <td className="text-info">960,000</td>
                                <td className="text-danger">660,000</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </Card>

                    </Colxx>
                  </Row>

                  <Row>
                    <Colxx></Colxx>
                    <Colxx xxs="12">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <h4 style={h4Style}>QUY TRÌNH THAM GIA ĐƠN GIẢN, NHANH CHÓNG</h4>
                      </div>
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <h5>Quý khách có thể gọi hoặc kết bạn Zalo qua SĐT:<span className="text-danger font-italic"> 0962480094</span> hoặc gửi thông tin về email: <span className="text-danger font-italic">phamanhquan0203@gmail.com</span> để được tư vấn miễn phí.</h5>
                      </div>
                    </Colxx>
                    <Colxx></Colxx>
                    <Colxx xxs="12">
                      <div className="d-flex flex-grow-1 min-width-zero">
                        <h3>Quý khách gửi thông tin của nhân viên cần được bảo hiểm qua số Zalo hoặc email này, bao gồm: Họ và Tên, Năm sinh và Số CMND.</h3>
                      </div>
                    </Colxx>
                  </Row>
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

export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(Docs))
