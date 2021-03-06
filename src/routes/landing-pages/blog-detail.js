import React, { Component, Fragment } from "react";
import {
  Container, Row, Card, CardBody
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionNewsletter from "Components/LandingPage/SectionNewsletter";
import SectionSidebar from "Components/LandingPage/SectionSidebar";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";
import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen };
}

class BlogDetail extends Component {
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
                  <SubHero title={messages["cd.home.title"]} detail={messages["cd.home.detail"]} >
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
                      <Card>
                        <CardBody className="p-0">
                          <img alt="subpage" src="/assets/img/landing-page/cd.jfif" className="img-fluid card-img-fluid" />
                        </CardBody>
                      </Card>

                      <p className="mt-5 mb-0" dangerouslySetInnerHTML={{ __html: messages["lp.blogdetail.content"] }}>
                      </p>
                    </Colxx>

                    <Colxx xxs="12" lg={{ size: 4, offset: 1 }} className="side-bar">
                      <SectionSidebar />
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
export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(BlogDetail))
