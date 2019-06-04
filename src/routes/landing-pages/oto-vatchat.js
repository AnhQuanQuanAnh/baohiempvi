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
                          <h4 className="text-dark font-weight-bold">– Đâm, va (bao gồm cả va chạm với vật thể khác ngoài xe cơ giới), lật, đổ, chìm, rơi toàn bộ xe, bị các vật thể khác rơi vào.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">– Hỏa hoạn, cháy, nổ.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">– Những tai họa bất khả kháng do thiên nhiên (Bao gồm nhưng không giới hạn bão, lũ, lụt, sét đánh, giông tố, động đất, sụt lở, sóng thần....).</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">– Mất toàn bộ xe do trộm, cướp.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">– Hành vi ác ý, cố tình phá hoại (loại trừ hành vi ác ý, cố tình phá hoại của Chủ xe/ Đại diện hợp pháp của Chủ xe/ Người được bảo hiểm / Lái xe / Người được giao sử dụng chiếc xe đó).</h4>
                        </div>
                        <div>
                          <h3>Ngoài số tiền bồi thường thiệt hại của xe, Bảo hiểm PVI còn thanh toán cho Chủ xe/ Người được bảo hiểm những chi phí cần thiết và hợp lý để thực hiện các công việc theo yêu cầu và chỉ dẫn của Bảo hiểm PVI khi xảy ra tổn thất (thuộc phạm vi bảo hiểm), bao gồm:</h3>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">– Chi phí bảo vệ hiện trường, ngăn ngừa hạn chế tổn thất có thể phát sinh thêm.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark font-weight-bold">– Chi phí cứu hộ và vận chuyển xe bị thiệt hại tới nơi sửa chữa gần nhất.</h4>
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
                          <h3>Công ty bảo hiểm PVI chịu trách nhiệm thanh toán chi phí thực tế để sửa chữa, thay thế những bộ phận bị tổn thất hoặc trả bằng tiền cho chủ xe/ Người được bảo hiểm:</h3>
                        </div>
                        <div>
                          <h3 className="text-dark font-weight-bold">Bồi thường tổn thất bộ phận xe</h3>
                        </div>
                        <div>
                          <h4 className="text-dark">- Công ty bảo hiểm PVI chấp nhận thay thế mới đối với những hạn mục bị tổn thất không thể khắc phục được hoặc chi phí khắc phục vượt quá 65% giá trị thay mới của hạng mục đó.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">- Bảo hiểm bồi thường chi phí sơn lại toàn bộ xe nếu trên 50% diện tích Sơn của xe bị hư hỏng do tai nạn.</h4>
                        </div>
                      </Colxx>
                      <Colxx xxs="12">
                        <div>
                          <h3 className="text-dark font-weight-bold">Bồi thường tổn thất toàn bộ xe</h3>
                        </div>
                        <div>
                          <h4 className="text-dark">- Xe được coi là tổn thất vật chất toàn bộ khi bị mất trộm, bị cướp sau 60 ngày không tìm lại được hoặc chi phí sửa chữa thực tế của xe bị thiệt hại vượt quá 75% giá trị thực tế của xe tại thời điểm ngay trước khi xảy ra tổn thất.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">- Số tiền bồi thường toàn bộ bằng giá trị thực tế của xe trước khi xảy ra tai nạn và không vượt quá số tiền ghi trên GCNBH/ HĐBH</h4>
                        </div>
                      </Colxx>
                      <Colxx xxs="12">
                        <div>
                          <h3 className="text-warning font-weight-bold">Khách hàng có thể lựa chọn điều khoản bổ sung cho Bảo hiểm vật chất xe ô tô</h3>
                        </div>
                        <div>
                          <h4 className="text-secondary font-weight-bold">1.ĐKBS 003/XCG-PVI: Bảo hiểm mất cắp bộ phận</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Quyền lợi bảo hiểm: Bảo hiểm PVI sẽ bồi thường cho tổn thất hay thiệt hại vật chất đối với bộ phận của xe do hành vi trộm, cướp cụ thể như sau:</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">- Được bồi thường tối đa 2 lần đối với thời hạn bảo hiểm một năm.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">- Được bồi thường tối đa 3 lần đối với thời hạn bảo hiểm lớn hơn một năm.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">- Không giới hạn đối với điều kiện về nơi đỗ xe.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Điều kiện bảo hiểm: Xe tham gia bảo hiểm vật chất xe tại bảo hiểm PVI.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Mức khấu trừ: 20% tổn thất hoặc 2 triệu đồng /vụ tổn thất, tùy thuộc số nào lớn hơn.</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Loại trừ: Điều khoản này không áp dụng đối với trường hợp chìa khóa xe bị mất cắp, mất trộm hoặc rơi mất.</h4>
                        </div>
                      </Colxx>
                      <Colxx xxs="12">
                        <div>
                          <h4 className="text-secondary font-weight-bold">2. ĐKBS 006/XCG-PVI: Không tính khấu hao phụ tùng, vật tư thay mới</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Bảo hiểm PVI sẽ bồi thường toàn bộ chi phí thay thế mới cho những tổn thất hay thiệt hại vật chất đối với Xe cơ giới thuộc phạm vi bảo hiểm mà không áp dụng bất kỳ khoản khấu hao nào đối với những vật tư, phụ tùng bị thiệt hại (không bao gồm săm, lốp, gas hệ thống điều hòa nhiệt độ, nước làm mát).</h4>
                        </div>
                      </Colxx>
                      <Colxx xxs="12">
                        <div>
                          <h4 className="text-secondary font-weight-bold">3. ĐKBS 007/XCG-PVI: Lựa chọn cơ sở sửa chữa chính hãng</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Chủ xe / Người được bảo hiểm/ Đại diện hợp pháp của chủ xe được quyền yêu cầu chỉ định sửa chữa tại Cơ sở sửa chữa chính hãng phù hợp, gần nhất trong lãnh thổ Việt Nam và có chi phí sửa chữa hợp lý, phù hợp với chủng loại xe được bảo hiểm.</h4>
                        </div>
                      </Colxx>
                      <Colxx xxs="12">
                        <div>
                          <h4 className="text-secondary font-weight-bold">4. ĐKBS 008/XCG-PVI: Bảo hiểm thiệt hại động cơ do thủy kích</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Quyền lợi bảo hiểm: Xe cơ giới có tham gia bảo hiểm thiệt hại vật chất xe và bị thiệt hại động cơ (bị thủy kích) do lỗi vô ý của lái xe đi vào đường ngập nước sẽ được Bảo hiểm PVI bồi thường.</h4>
                        </div>
                      </Colxx>
                      <Colxx xxs="12">
                        <div>
                          <h4 className="text-secondary font-weight-bold">5. ĐKBS 011/XCG-PVI: Áp dụng miễn thường không khấu trừ</h4>
                        </div>
                        <div>
                          <h4 className="text-dark">Bảo hiểm PVI không áp dụng Mức khấu trừ đối với các vụ tổn thất vật chất xe thuộc phạm vi bảo hiểm nếu số tiền khắc phục thiệt hại trong một vụ tổn thất lớn hơn Mức khấu trừ được ghi trên Giấy CNBH.</h4>
                        </div>
                      </Colxx>
                    </Row>
                    <Row className="mt-5">
                      <Colxx xxs="12">
                        <div>
                          <h2 align="center">BIỂU PHÍ BẢO HIỂM Ô TÔ 2 CHIỀU</h2>
                        </div>
                      </Colxx>

                      <Table bordered hover className="text-center">
                        <tbody>
                          <tr className="text-success font-weight-bold" >
                            <td rowSpan="2" >STT</td>
                            <td rowSpan="2">Loại Xe<br />
                              (Theo nhóm rủi ro, giá trị xe)</td>
                            <td colSpan="4">Tỷ lệ phí (Theo gói bảo hiểm vật chất xe bao gồm các ĐKBS):<br />
                              006: Không khấu hao phụ tùng thay thế mới<br />
                              007: Sửa chữa chính hãng<br />
                              008: Thủy Kích</td>
                          </tr>

                          <tr className="text-primary font-weight-bold">
                            <td>006</td>
                            <td>007</td>
                            <td>006-007</td>
                            <td>006-007-008</td>
                          </tr>
                          <tr>
                            <th scope="row" className="text-dark">A</th>
                            <td className="text-primary font-weight-bold text-left" colSpan="5" nowRap="nowrap">Nhóm xe rủi ro thấp ( Không KDVT)</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">1</th>
                            <td>Xe chở người, xe bán tải (Pickup),
                            xe chở tiền, xe hoạt động trong nội bộ cảng, khu sân bay</td>
                            <td>1.15%</td>
                            <td>1.20%</td>
                            <td>1.30%</td>
                            <td>1.35%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">2</th>
                            <td>Xe tập lái, dạy lái của các cơ sở được cấp phép theo quy định của nhà nước</td>
                            <td>1.20%</td>
                            <td>1.30%</td>
                            <td>1.35%</td>
                            <td>1.45%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">3</th>
                            <td>Xe tải Van, xe bán tải (pickup) còn lại; Xe vừa chở người vừa chở hàng</td>
                            <td>1.35%</td>
                            <td>1.40%</td>
                            <td>1.45%</td>
                            <td>1.50%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">B</th>
                            <td className="text-primary font-weight-bold text-left" colSpan="5" nowRap="nowrap">Nhóm xe rủi ro thấp ( Không KDVT)</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row"></th>
                            <td>Xe chở xăng, dầu, khí hóa lỏng, nhựa đường, nhiên liệu; xe tải gắn cẩu, xe gắn thiết bị khoan,<br />
                              xe cẩu tự hành (được phép lưu hành trên đường bộ), xe trộn, bơm bê tông,
                             xe cứu thương, cứu hỏa, phục vụ tang lễ,<br />
                              xe thang, xe vệ sinh, xe quét đường, xe téc chở chất lỏng ( trừ chất dễ cháy)</td>
                            <td>1.15%</td>
                            <td>1.20%</td>
                            <td>1.30%</td>
                            <td>1.35%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">C</th>
                            <td className="text-primary font-weight-bold text-left" colSpan="5" nowRap="nowrap">Nhóm xe rủi ro cao</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row"></th>
                            <td className="text-primary font-weight-bold text-left" colSpan="5" nowRap="nowrap">Xe tải</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">1</th>
                            <td>Xe ô tô vận tải hàng hóa; xe tải ben không hoạt động trên công trường, khu vực khai thác khoán sản</td>
                            <td>1.35%</td>
                            <td>1.40%</td>
                            <td>1.45%</td>
                            <td>1.50%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">2</th>
                            <td>Rơ mooc thông thường</td>
                            <td>0.80%</td>
                            <td>0.90%</td>
                            <td>1%</td>
                            <td>1%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">3</th>
                            <td>Rơ mooc có gắn thiết bị chuyên dụng, Rơ mooc ben tự đổ</td>
                            <td>2%</td>
                            <td>2.10%</td>
                            <td>2.20%</td>
                            <td>2.20%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">4</th>
                            <td>Xe đầu kéo</td>
                            <td>1.95%</td>
                            <td>2.05%</td>
                            <td>2.10%</td>
                            <td>2.10%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">5</th>
                            <td>Xe tải chở hàng đông lạnh/gắn thùng bảo ôn; Rơ mooc chở hàng đông lạnh/gắn thùng bảo ôn</td>
                            <td>2.10%</td>
                            <td>2.20%</td>
                            <td>2.30%</td>
                            <td>2.35%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">6</th>
                            <td>Xe tải ben hoạt động trên khai trường, công trường; Xe tải/xe tải ben hoạt động trong vùng KTKT; Xe chở hàng siêu trường, siêu trọng</td>
                            <td>2.60%</td>
                            <td>2.70%</td>
                            <td>2.80%</td>
                            <td>2.90%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row"></th>
                            <td className="text-primary font-weight-bold text-left" colSpan="5" nowRap="nowrap">Xe kinh doanh vận tải chở người</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">1</th>
                            <td>Xe chở người KDVT theo HĐDV</td>
                            <td>1.25%</td>
                            <td>1.30%</td>
                            <td>1.45%</td>
                            <td>1.55%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">2</th>
                            <td>Xe buýt nội tỉnh; xe khách nội tỉnh</td>
                            <td>1.15%</td>
                            <td>1.20%</td>
                            <td>1.30%</td>
                            <td>1.35%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">3</th>
                            <td>Xe buýt liên tỉnh/Xe khách tuyến cố định/xe khách liên tỉnh có số chỗ ngồi ≤ 29 chỗ ngồi</td>
                            <td>2%</td>
                            <td>2.10%</td>
                            <td>2.20%</td>
                            <td>2.30%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">4</th>
                            <td>Xe buýt liên tỉnh/Xe khách tuyến cố định/xe khách liên tỉnh có số chỗ ngồi >29 chỗ ngồi; Xe giường nằm</td>
                            <td colSpan="5" nowRap="nowrap">Không phân cấp</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">5</th>
                            <td>Xe DCAR; Transit Limousin hoặc các loại hình tương tự ≤ 16 chỗ</td>
                            <td>1.50%</td>
                            <td>1.60%</td>
                            <td>1.65%</td>
                            <td>1.75%</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">6</th>
                            <td>Xe ≤ 24 chỗ sử dụng kinh doanh Uber /Grab hoặc các loại hình kinh doanh tương tự</td>
                            <td colSpan="5" nowRap="nowrap">140% phí bảo hiểm của xe chở người KDVT theo HĐDV<br />
                              mục C2.1, không cấp ĐKBS 011, áp dụng mức miễn thường 1.000.000vnd/vụ</td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">7</th>
                            <td>Xe taxi, xe cho thuê tự lái</td>
                            <td colSpan="5" nowRap="nowrap"></td>
                          </tr>
                          <tr className="text-dark">
                            <th scope="row">D</th>
                            <td className="text-primary font-weight-bold text-left">Xe điện hoạt động sân Gofl, khu du lịch</td>
                            <td>1.15%</td>
                            <td>1.20%</td>
                            <td colSpan="2">Không phân cấp</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Row>
                  </Container>
                </div>

                <div>
                  <Container>
                    <Row>
                      <Colxx xxs="12">
                        <div>
                          <h4 className="text-dark">Quy trình bồi thường (Bảo hiểm vật chất xe ô tô): tham khảo<NavLink to="/lien-he"><span className="text-danger font-weight-bold"> tại đây</span></NavLink></h4>
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