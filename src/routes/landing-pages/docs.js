import React, { Component, Fragment } from "react";
import {
  Container, Row, Card,
  Table,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionProducts from "Components/LandingPage/SectionProducts";
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
  color: "orange",
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
                  <SubHero title={messages["bh.tainan.title"]}>
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
                      <div>
                        <h4><span style={spanStyle}>PHÍ BẢO HIỂM TỪ</span><span style={spanPriceStyle}> 67.500</span> <span style={spanStyle}>ĐẾN</span><span style={spanPriceStyle}> 900.000 VNĐ</span></h4>
                      </div>
                      <div>
                        <h4><span style={spanStyle}>PHÍ BẢO HIỂM CHO GÓI</span><span style={spanPriceStyle}> 100 TRIỆU</span><span style={spanStyle}> LÀ</span><span style={spanPriceStyle}> 225.000 VNĐ</span></h4>
                      </div>
                    </Colxx>

                    <Colxx xxs="12">
                    </Colxx>

                    <Colxx xxs="12">
                      <div>
                        <h3>GIẢM 45% PHÍ CHO SỐ LƯỢNG TRÊN 20 NGƯỜI</h3>
                      </div>
                    </Colxx>

                    <Colxx xxs="12">
                      <div>
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

                  <h3 className="text-left">YÊU CẦU PVI TƯ VẤN NHANH TẠI ĐÂY</h3>
                  <Row className="mb-4">
                    <Colxx xxs="12">
                      <Form>
                        <FormGroup row>
                          <Colxx sm={4}>
                            <FormGroup>
                              <Label for="nameCustomer">
                                Họ và tên của bạn
                              </Label>
                              <Input
                                type="text"
                                name="nameCustomer"
                                id="nameCustomer"
                              />
                            </FormGroup>
                          </Colxx>
                          <Colxx sm={8}>
                          </Colxx>

                          <Colxx sm={4}>
                            <FormGroup>
                              <Label for="exampleZipGrid">
                                Số điện thoại
                              </Label>
                              <Input
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                              />
                            </FormGroup>
                          </Colxx>
                        </FormGroup>

                        <Button color="primary">
                          YÊU CẦU TƯ VẤN
                        </Button>
                      </Form>
                    </Colxx>
                  </Row>
                  <Row>
                    <Colxx xxs="12">
                      <div>
                        <h4 style={h4Style}>QUY TRÌNH THAM GIA ĐƠN GIẢN, NHANH CHÓNG</h4>
                      </div>
                      <div>
                        <h5 className="text-dark">Quý khách có thể gọi hoặc kết bạn Zalo qua SĐT:<span className="text-danger font-weight-bold"> 0962480094</span> hoặc gửi thông tin về email: <span className="text-danger font-italic">phamanhquan0203@gmail.com</span> để được tư vấn miễn phí.</h5>
                      </div>
                    </Colxx>
                    <Colxx xxs="12">
                      <div>
                        <h5 className="text-dark">Hoặc Quý khách yêu cầu chúng tôi gọi lại<NavLink to="/lien-he"> tại đây.</NavLink></h5>
                      </div>
                    </Colxx>
                    <Colxx></Colxx>
                    <Colxx xxs="12">
                      <div>
                        <h3>Quý khách gửi thông tin của nhân viên cần được bảo hiểm qua số Zalo hoặc email ở phía trên, bao gồm: Họ và tên, Năm sinh và Số CMND.</h3>
                      </div>
                    </Colxx>
                    <Colxx xxs="12">
                      <div>
                        <h4 className="text-dark">Sau khi hoàn tất thông tin, quý khách sẽ nhận giấy chứng nhận bảo hiểm trong vòng <span className="text-danger">1h</span> đồng hồ bằng đường chuyển phát nhanh của các dịch vụ giao hành tận tay. Phí dịch vụ được tính dựa trên khoảng cách giữa Bảo hiểm PVI Sài Gòn với vị trí quý khách cần nhận.</h4>
                      </div>
                    </Colxx>
                  </Row>

                  <Row>
                    <Colxx xxs="12">
                      <div>
                        <h3>Vậy khi có sự cố tai nạn xảy ra, bạn nên quan tâm đến những thông tin sau đây:</h3>
                      </div>
                      <div>
                        <h5 className="text-dark">– Khi có sự cố tai nạn xảy ra gọi ngay vào<span className="text-danger font-weight-bold"> 0962480094</span> để được hỗ trợ hoặc thông báo bằng văn bản đến PVI trong vòng 30 ngày kể từ ngày xảy ra sự cố tai nạn.</h5>
                      </div>
                      <div>
                        <h5 className="text-dark">– Thời hạn yêu cầu trả tiền bảo hiểm tai nạn là<span className="text-danger"> 1 năm</span> kể từ ngày xảy ra sự kiện bảo hiểm.</h5>
                      </div>
                    </Colxx>
                  </Row>

                  <Row>
                    <Colxx xxs="12">
                      <div>
                        <h3>Hồ sơ yêu cầu trả tiền bảo hiểm tai nạn 24h gồm:</h3>
                      </div>
                      <div>
                        <h5 className="text-dark">– Giấy yêu cầu trả tiền bảo hiểm (theo mẫu của PVI tải <NavLink to="/lien-he"> tại đây</NavLink>)</h5>
                      </div>
                      <div>
                        <h5 className="text-dark">– Biên bản tai nạn có xác nhận của cơ quan nợi Người được bảo hiểm làm việc hoặc chính quyền địa phương hoặc cơ quan Công An nơi Người được bảo hiểm xảy ra tai nạn.</h5>
                      </div>
                      <div>
                        <h5 className="text-dark">– Bản gốc hóa đơn tài chính liên quan đến chi phí điều trị.</h5>
                      </div>
                      <div>
                        <h5 className="text-dark">– Bản gốc hoặc bản sao hợp lệ các chứng từ y tế: Giấy ra viện, Phiếu điều trị (trong trường hợp điều trị nội trú), phiếu mổ hoặc thông tin về các phương pháp phẫu thuật (nếu phẫu thuật), sổ /phiếu khám bệnh, phiếu chỉ định và kết quả của các xét nghiệm, chẩn đoán hình ảnh, đơn thuốc (trường hợp điều trị ngoại trú).</h5>
                      </div>
                      <div>
                        <h5 className="text-dark">– Bản gốc hoặc bản sao hợp lệ: Giấy chứng tử, Quyết định của tòa án có thẩm quyền về việc tuyên bố người được bảo hiểm bị mất tích do tai nạn (trường hợp mất tích) và văn bản xác nhận quyền thừa kế hợp pháp.</h5>
                      </div>
                      <div>
                        <h5 className="text-dark">– Các giấy tờ khác liên quan đến việc trả tiền bảo hiểm theo quy đinh của Bảo hiểm PVI.</h5>
                      </div>
                      <div>
                        <h3>Địa chỉ gửi hồ sơ yêu cầu trả tiền bảo hiểm tai nạn 24h: Lầu 6, Tòa nhà Cental Park, 117 Nguyễn Du, P. Bến Thành, Q.1, Tp.HCM</h3>
                      </div>
                    </Colxx>
                  </Row>

                  <Row>
                    <Colxx xxs="12">
                      <div >
                        <h3>Thời hạn chi trả bồi thường</h3>
                      </div>
                      <div >
                        <h4 className="text-dark">– Trong vòng <span className="text-danger font-weight-bold">15 ngày làm việc</span> kể từ ngày nhận đủ hồ sơ của Người được bảo hiểm.</h4>
                      </div>

                    </Colxx>
                  </Row>

                  <Row>
                    <Colxx xxs="12">
                      <div>
                        <h3>Quy định bắt buộc về bảo hiểm tai nạn đối với tất cả các công trình xây dựng theo thông tư 329/2016/TT-BTCngày 26/12/2016</h3>
                      </div>
                      <div>
                        <h4 className="text-dark">Xem thông tư 329/2016/TT-BTC <NavLink to="/lien-he"><span className="text-danger font-weight-bold"> tại đây</span></NavLink></h4>
                      </div>
                      <div >
                        <h4 className="text-dark">Xem quy tắc bảo hiểm tai nạn 24h <NavLink to="/lien-he"><span className="text-danger font-weight-bold"> tại đây</span></NavLink></h4>
                      </div>
                      <div >
                        <h4 className="text-dark">Xem bảng quy định chi trả theo tỷ lệ thương tật của Bộ tài chính <NavLink to="/lien-he"><span className="text-danger font-weight-bold"> tại đây</span></NavLink></h4>
                      </div>

                    </Colxx>
                  </Row>
                </Container>
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

export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(Docs))
