import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from "reactstrap";
import IntlMessages from "Util/IntlMessages";

class SectionSubMenu extends Component {
    render() {
        return (
            <Nav className="navbar-nav d-none d-lg-flex flex-row">
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
                <NavItem className={window.location.pathname === '/bao-hiem-du-lich-tn' ? 'active' : ''}>
                    <UncontrolledDropdown>
                        <DropdownToggle tag="a" caret color="empty" href="#">
                            <IntlMessages id="bh.menu.dulich" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <NavLink to="/bao-hiem-du-lich-tn">
                                <IntlMessages id="bh.menu.dulich" />
                            </NavLink>
                            <NavLink to="/bao-hiem-du-lich-tn">
                                <IntlMessages id="bh.menu.dulich" />
                            </NavLink>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </NavItem>
                <NavItem className={window.location.pathname === '/lien-he' ? 'active' : ''}>
                    <NavLink to="/lien-he">
                        <IntlMessages id="bh.menu.lienhe" />
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
}

export default SectionSubMenu;