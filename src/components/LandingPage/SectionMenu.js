import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import SubMenu from "./SectionSubMenu";

export class MenuMultipage extends Component {
  openMobileMenu(event) {
    event.preventDefault();
    this.props.onMobileMenuToggle();
  }
  render() {
    return (
      <Container className="d-flex align-items-center justify-content-between">
        <NavLink className="navbar-logo pull-left" to="/home">
          <span className="white" />
        </NavLink>
        <SubMenu />
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
        <NavLink className="logo-mobile" to="/home">
          <span />
        </NavLink>
        <Nav className="navbar-nav">
          <NavItem className={window.location.pathname === '/home' ? 'active' : ''}>
            <NavLink to="/home">
              <IntlMessages id="bh.menu.trangchu" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/bao-hiem-suc-khoe-doanh-nghiep' || window.location.pathname === '/bao-hiem-suc-khoe-ca-nhan' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="bh.menu.pvicare" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/bao-hiem-suc-khoe-doanh-nghiep" className="dropdown-item">
                  <IntlMessages id="bh.menu.pvicare.comapy" />
                </NavLink>
                <NavLink to="/bao-hiem-suc-khoe-ca-nhan" className="dropdown-item">
                  <IntlMessages id="bh.menu.pvicare.family" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/bao-hiem-oto-tnds' || window.location.pathname === '/bao-hiem-oto-vat-chat' ? 'active' : ''}>
            <UncontrolledDropdown>
              <DropdownToggle tag="a" caret color="empty" href="#">
                <IntlMessages id="bh.menu.oto" />
              </DropdownToggle>
              <DropdownMenu>
                <NavLink to="/bao-hiem-oto-tnds" className="dropdown-item">
                  <IntlMessages id="bh.menu.oto.tnds" />
                </NavLink>
                <NavLink to="/bao-hiem-oto-vat-chat" className="dropdown-item">
                  <IntlMessages id="bh.menu.oto.2chieu" />
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
          <NavItem className={window.location.pathname === '/bao-hiem-tai-nan' ? 'active' : ''}>
            <NavLink to="/bao-hiem-tai-nan">
              <IntlMessages id="bh.menu.tainan" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/bao-hiem-du-lich' ? 'active' : ''}>
            <NavLink to="/bao-hiem-du-lich">
              <IntlMessages id="bh.menu.dulich" />
            </NavLink>
          </NavItem>
          <NavItem className={window.location.pathname === '/lien-he' ? 'active' : ''}>
            <NavLink to="/lien-he">
              <IntlMessages id="bh.menu.lienhe" />
            </NavLink>
          </NavItem>
        </Nav>

      </div>
    );
  }
}