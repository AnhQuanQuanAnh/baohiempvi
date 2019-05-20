import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";

export class MenuMultipage extends Component {
  openMobileMenu(event) {
    event.preventDefault();
    this.props.onMobileMenuToggle();
  }
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-between">
        <NavLink className="navbar-logo pull-left" to="/multipage-home">
          <span className="white" />
        </NavLink>
        <Nav className="navbar-nav d-none d-lg-flex flex-row">
          <NavItem className={window.location.pathname === '/tin-tuc' ? 'active' : ''}>
            <NavLink to="/tin-tuc">
              <IntlMessages id="bh.menu.trangchu" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/y-nghia-logo' ? 'active' : ''}>
            <NavLink to="/y-nghia-logo">
              <IntlMessages id="bh.menu.pvicare" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/bao-hiem-o-to' ? 'active' : ''}>
            <NavLink to="/bao-hiem-o-to">
              <IntlMessages id="bh.menu.oto" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/ky-yeu-cong-doan' ? 'active' : ''}>
            <NavLink to="/y-nghia-logo">
              <IntlMessages id="bh.menu.tainan" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/tu-lieu-phim-anh' ? 'active' : ''}>
            <NavLink to="/tu-lieu-phim-anh">
              <IntlMessages id="bh.menu.dulich" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/hau-truong' ? 'active' : ''}>
            <NavLink to="/hau-truong">
              <IntlMessages id="bh.menu.lienhe" />
            </NavLink>
          </NavItem>
        </Nav>
        <NavLink
          className="mobile-menu-button"
          to="#"
          onClick={(event) => this.openMobileMenu(event)}
        >
          <i className="simple-icon-menu" />
        </NavLink>
      </Container>
    );
  }
}
export class MenuMultipageMobile extends React.Component {
  constructor(props) {
    super(props);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    ["click", "touchstart"].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  componentWillUnmount() {
    ["click", "touchstart"].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
    this.props.onUnmountingMenu()
  }

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);
    if ((container.contains(e.target) || container === e.target)) {
      return;
    }
    return this.props.onUnmountingMenu()
  }

  render() {
    return (
      <div className="mobile-menu">
        <NavLink className="logo-mobile" to="/multipage-home">
          <span />
        </NavLink>
        <Nav className="navbar-nav">
          <NavItem className={window.location.pathname === '/meaning-logo' ? 'active' : ''}>
            <NavLink to="/meaning-logo">
              <IntlMessages id="bh.menu.trangchu" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/meaning-logo' ? 'active' : ''}>
            <NavLink to="/meaning-logo">
              <IntlMessages id="cd.menu.logo" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/contact' || window.location.pathname === '/videos' || window.location.pathname === '/docs' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="cd.menu.department" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/docs" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_external" />
                </NavLink>
                <NavLink to="/videos" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_finance" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_art" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_communication" />
                </NavLink>
                <NavLink to="/contact" className="dropdown-item">
                  <IntlMessages id="cd.menu.dp_ritual" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/prices' ? 'active' : ''}>
            <NavLink to="/prices">
              <IntlMessages id="cd.menu.about" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/blog' ? 'active' : ''}>
            <NavLink to="/blog">
              <IntlMessages id="cd.menu.contact" />
            </NavLink>
          </NavItem>
        </Nav>

      </div>
    );
  }
}
export class MenuSinglepage extends Component {
  openMobileMenu(event) {
    event.preventDefault();
    this.props.onMobileMenuToggle();
  }
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-between">
        <NavLink
          className="navbar-logo pull-left"
          to="#"
          onClick={event => {
            this.props.onClick("home", event);
          }}
        >
          <span className="white" />
          <span className="dark" />
        </NavLink>
        <Nav className="navbar-nav d-none d-lg-flex flex-row">
          <NavItem>
            <NavLink
              to="#"
              onClick={event => {
                this.props.onClick("features", event);
              }}
            >
              <IntlMessages id="lp.menu.features" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              onClick={event => {
                this.props.onClick("reviews", event);
              }}
            >
              <IntlMessages id="lp.menu.reviews" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              onClick={event => {
                this.props.onClick("pricing", event);
              }}
            >
              <IntlMessages id="lp.menu.pricing" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#"
              onClick={event => {
                this.props.onClick("blog", event);
              }}
            >
              <IntlMessages id="lp.menu.blog" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="auth-register">
              <IntlMessages id="lp.menu.signin" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
              to="auth-login"
            >
              <IntlMessages id="lp.menu.signup" />
            </NavLink>
          </NavItem>
        </Nav>
        <NavLink
          className="mobile-menu-button"
          to="#"
          onClick={(event) => this.openMobileMenu(event)}
        >
          <i className="simple-icon-menu" />
        </NavLink>
      </Container>
    );
  }
}


export class MenuSinglepageMobile extends React.Component {
  constructor(props) {
    super(props);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    ["click", "touchstart"].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }
  componentWillUnmount() {
    ["click", "touchstart"].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
    this.props.onUnmountingMenu()
  }

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);
    if ((container.contains(e.target) || container === e.target)) {
      return;
    }
    return this.props.onUnmountingMenu()
  }
  render() {
    return (
      <div className="mobile-menu">
        <NavLink
          className="logo-mobile scrollTo"
          to="#"
          onClick={event => {
            this.props.onClick("home", event);
          }}
        >
          <span></span>
        </NavLink>
        <Nav className="navbar-nav">
          <NavItem>
            <NavLink to="#" onClick={event => { this.props.onClick("features", event) }}>
              <IntlMessages id="lp.menu.features" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={event => { this.props.onClick("reviews", event) }}>
              <IntlMessages id="lp.menu.reviews" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={event => { this.props.onClick("pricing", event) }}>
              <IntlMessages id="lp.menu.pricing" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="#" onClick={event => { this.props.onClick("blog", event) }}>
              <IntlMessages id="lp.menu.blog" />
            </NavLink>
          </NavItem>
          <NavItem>
            <div className="separator"></div>
          </NavItem>

          <NavItem>
            <NavLink to="/auth-login">
              <IntlMessages id="lp.menu.signin" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/auth-register">
              <IntlMessages id="lp.menu.signup" />
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}