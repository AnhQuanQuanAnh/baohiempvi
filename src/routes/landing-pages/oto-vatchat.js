import React, { Component, Fragment } from "react";
import {
  Container,
  Row,
  Table
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import Footer from "Components/LandingPage/SectionFooter";
import SectionProducts from "Components/LandingPage/SectionProducts";
import { Colxx } from "Components/CustomBootstrap";
import { injectIntl } from 'react-intl';

import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen };
}

const h4Style = {
  color: 'blue'
};

const th1Style = {
  width: '100px'
};

const th2Style = {
  width: '325px'
};


class OtoVatChat extends Component {
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
                  <Row>
                    <Colxx>
                      <img className="imgHeader" src="/assets/img/sua_oto.png" />
                    </Colxx>
                    <NavLink className="btn btn-circle btn-outline-semi-light hero-circle-button" to="#" onClick={(event) => this.onMenuClick("content", event)}>
                      <i className="simple-icon-arrow-down"></i>
                    </NavLink>
                  </Row>
                </Container>
              </div>

              <div className="section" ref={(x) => { this.content = x; }}>
                <div>
                  <Container>
                    <Row className="mt-5">
                      <Colxx xxs="12">
                        <div>
                          <h3><span className="font-weight-bold">Đối tượng bảo hiểm:</span> Xe ô-tô hoạt động trong lãnh thổ Việt Nam, bao gồm: thân, khung, vỏ, máy móc và các trang thiết bị khác trên xe.</h3>
                        </div>
                        <div>
                          <h3><span className="font-weight-bold">Quyền lợi BH:</span> Chủ xe/ Người được bảo hiểm được bồi hoàn những thiệt hại vật chất do thiên tai, tai nạn bất ngờ, không lường trước được…trong những trường hợp sau:</h3>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">- Đâm, va (bao gồm cả va chạm với vật thể khác ngoài xe cơ giới), lật, đổ, chìm, rơi toàn bộ xe, bị các vật thể khác rơi vào.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">- Hỏa hoạn, cháy, nổ.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">- Những tai họa bất khả kháng do thiên nhiên (Bao gồm nhưng không giới hạn bão, lũ, lụt, sét đánh, giông tố, động đất, sụt lở, sóng thần....).</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">- Mất toàn bộ xe do trộm, cướp.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">- Hành vi ác ý, cố tình phá hoại (loại trừ hành vi ác ý, cố tình phá hoại của Chủ xe/ Đại diện hợp pháp của Chủ xe/ Người được bảo hiểm / Lái xe / Người được giao sử dụng chiếc xe đó).</h4>
                        </div>
                      </Colxx>
                      <Colxx xxs="12">
                        <div>
                          <h3><span className="font-weight-bold">Liên hệ Hotline để được tư vấn miễn phí:</span> <span className="text-danger font-weight-bold"> 0962480094</span><span> hoặc qua email</span> <span className="text-danger font-weight-bold"> baohiemtructuyen247pvi@gmail.com</span></h3>
                        </div>
                      </Colxx>
                    </Row>
                    <Row className="mt-5">
                      <Colxx xxs="12">
                        <div>
                          <h2 align="center">BIỂU PHÍ TRÁCH NHIỆM DÂN SỰ BẮT BUỘC CÁC LOẠI Ô TÔ</h2>
                        </div>
                      </Colxx>

                      <h4 style={h4Style}>XE KHÔNG KINH DOANH</h4>
                      <Table bordered hover className="text-center">
                        <thead>
                          <tr>
                            <th className="text-success font-weight-bold" style={th1Style}>STT</th>
                            <th className="text-success font-weight-bold">Loại Xe</th>
                            <th className="text-success font-weight-bold">Phí Chưa VAT</th>
                            <th className="text-success font-weight-bold">Phí Bao Gồm VAT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>4 chỗ</td>
                            <td>437,000</td>
                            <td>480,700</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>5 chỗ</td>
                            <td>437,000</td>
                            <td>480,700</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>6 chỗ</td>
                            <td>794,000</td>
                            <td>873,400</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>7 chỗ</td>
                            <td>794,000</td>
                            <td>873,400</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>8 chỗ</td>
                            <td>794,000</td>
                            <td>873,400</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>15 chỗ</td>
                            <td>1,270,000</td>
                            <td>1,397,000</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>16 chỗ</td>
                            <td>1,270,000</td>
                            <td>1,397,000</td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>24 chỗ</td>
                            <td>1,270,000</td>
                            <td>1,397,000</td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>25 chỗ</td>
                            <td>1,825,000</td>
                            <td>2,007,500</td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td>30 chỗ</td>
                            <td>1,825,000</td>
                            <td>2,007,500</td>
                          </tr>
                          <tr>
                            <th scope="row">11</th>
                            <td>40 chỗ</td>
                            <td>1,825,000</td>
                            <td>2,007,500</td>
                          </tr>
                          <tr>
                            <th scope="row">12</th>
                            <td>50 chỗ</td>
                            <td>1,825,000</td>
                            <td>2,007,500</td>
                          </tr>
                          <tr>
                            <th scope="row">13</th>
                            <td>54 chỗ</td>
                            <td>1,825,000</td>
                            <td>2,007,500</td>
                          </tr>
                          <tr>
                            <th scope="row">14</th>
                            <td>Xe bán tải</td>
                            <td>933,000</td>
                            <td>1,026,300</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Row>
                  </Container>
                </div>
                <div>
                  <Container>
                    <h4 style={h4Style}>XE CÓ KINH DOANH</h4>
                    <Table bordered hover className="text-center">
                      <thead>
                        <tr>
                          <th className="text-success font-weight-bold" style={th1Style}>STT</th>
                          <th className="text-success font-weight-bold" style={th2Style}>Loại xe</th>
                          <th className="text-success font-weight-bold">Phí Chưa VAT</th>
                          <th className="text-success font-weight-bold">Phí Bao Gồm VAT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>4 chỗ</td>
                          <td>756,000</td>
                          <td>831,600</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>5 chỗ</td>
                          <td>756,000</td>
                          <td>831,600</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>6 chỗ</td>
                          <td>929,000</td>
                          <td>1,021,900</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>7 chỗ</td>
                          <td>1,080,000</td>
                          <td>1,188,000</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>8 chỗ</td>
                          <td>1,253,000</td>
                          <td>1,378,300</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>15 chỗ</td>
                          <td>2,394,000</td>
                          <td>2,633,400</td>
                        </tr>
                        <tr>
                          <th scope="row">7</th>
                          <td>16 chỗ</td>
                          <td>3,054,000</td>
                          <td>3,359,400</td>
                        </tr>
                        <tr>
                          <th scope="row">8</th>
                          <td>24 chỗ</td>
                          <td>4,632,000</td>
                          <td>5,095,200</td>
                        </tr>
                        <tr>
                          <th scope="row">9</th>
                          <td>25 chỗ</td>
                          <td>4,813,000</td>
                          <td>5,294,300</td>
                        </tr>
                        <tr>
                          <th scope="row">10</th>
                          <td>30 chỗ</td>
                          <td>4,963,000</td>
                          <td>5,459,300</td>
                        </tr>
                        <tr>
                          <th scope="row">11</th>
                          <td>40 chỗ</td>
                          <td>5,263,000</td>
                          <td>5,789,300</td>
                        </tr>
                        <tr>
                          <th scope="row">12</th>
                          <td>50 chỗ</td>
                          <td>5,563,000</td>
                          <td>6,119,300</td>
                        </tr>
                        <tr>
                          <th scope="row">13</th>
                          <td>54 chỗ</td>
                          <td>5,683,000</td>
                          <td>6,251,300</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Container>
                </div>
                <div>
                  <Container>
                    <h4 style={h4Style}>CÁC LOẠI XE TẢI</h4>
                    <Table bordered hover className="text-center">
                      <thead>
                        <tr>
                          <th className="text-success font-weight-bold" style={th1Style}>STT</th>
                          <th className="text-success font-weight-bold" style={th2Style}>Loại Xe</th>
                          <th className="text-success font-weight-bold">Phí Chưa VAT</th>
                          <th className="text-success font-weight-bold">Phí Bao Gồm VAT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>dưới 3 tấn</td>
                          <td>853,000</td>
                          <td>938,300</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>3-8 tấn</td>
                          <td>1,660,000</td>
                          <td>1,826,000</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>8-15 tấn</td>
                          <td>2,746,000</td>
                          <td>3,020,600</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>trên 15 tấn</td>
                          <td>3,200,000</td>
                          <td>3,520,000</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td>Xe đầu kéo</td>
                          <td>4,800,000</td>
                          <td>5,280,000</td>
                        </tr>
                      </tbody>
                    </Table>
                    <Row>
                      <Colxx xxs="12">
                        <div>
                          <h3>Tư liệu và thông tin về mức phí Quý khách có thể tham khảo ở bên dưới:</h3>
                        </div>
                        <div>
                          <h4 className="text-dark">Xem thông tư 22/2016/TT-BTC<NavLink to="/lien-he"><span className="text-danger font-weight-bold"> tại đây</span></NavLink></h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Xem thông tin biểu phí bảo hiểm chi tiết <NavLink to="/lien-he"><span className="text-danger font-weight-bold"> tại đây</span></NavLink></h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Mẫu giấy yêu cầu bảo hiểm<NavLink to="/lien-he"><span className="text-danger font-weight-bold"> tại đây</span></NavLink></h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Mẫu giấy yêu cầu bồi thường<NavLink to="/lien-he"><span className="text-danger font-weight-bold"> tại đây</span></NavLink></h4>
                        </div>
                      </Colxx>
                    </Row>
                  </Container>
                </div>
              </div>

              <div className="section background">
                <Container>
                  <SectionProducts />
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
export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(OtoVatChat))