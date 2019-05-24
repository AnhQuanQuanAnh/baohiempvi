import React, { Fragment } from "react";
import { Row, Container, Collapse, Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import { NavLink } from "react-router-dom";
import { injectIntl } from 'react-intl';

class SectionHero extends React.Component {
    constructor(props) {
        super(props);

        this.toggleAccordion = this.toggleAccordion.bind(this);
        this.state = {
            accordion: [false, false, false, false]
        };
    }

    toggleAccordion(tab) {
        const prevState = this.state.accordion;
        const state = prevState.map((x, index) => (tab === index ? !x : false));
        this.setState({
            accordion: state
        });
    }

    componentDidMount() {
        this.onResizeLandingPage()
        window.addEventListener("resize", this.onResizeLandingPage, true);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onResizeLandingPage, true);
    }

    onResizeLandingPage() {
        var rowOffestFooter = document.querySelector(".footer-row").offsetLeft;
        document.querySelector(".landing-page .section.footer").style.backgroundPositionX = (window.outerWidth - rowOffestFooter - 1668) + "px";
    }


    render() {
        const { messages } = this.props.intl;
        return (
            <Fragment>
                <Container>
                    <Row className="footer-row">
                        <Colxx xxs="12" className="text-right">
                            <NavLink className="btn btn-circle btn-outline-semi-light footer-circle-button " to="#" onClick={(event) => {
                                this.props.onClick("home", event);
                            }}><i className="simple-icon-arrow-up"></i></NavLink>
                        </Colxx>
                        <Colxx xxs="12" className="text-center footer-content">
                            <NavLink to="/home">
                                <img className="footer-logo" alt="footer logo" src="/assets/img/logo-pvi.jfif" />
                            </NavLink>
                        </Colxx>
                    </Row>

                    <Row>
                        <Colxx xxs={{ size: 12, offset: 0 }} xs="6" sm="3" lg={{ size: 6, offset: 0 }} className="footer-menu mb-5">
                            <div className="d-flex flex-column align-items-center">
                                <a className="d-inline-block d-xs-none collapse-button mb-1"
                                    onClick={() => this.toggleAccordion(0)}
                                    aria-expanded={this.state.accordion[0]}><IntlMessages id="bh.footer.menu-1" /> <i className="simple-icon-arrow-down"></i>
                                </a>

                                <Collapse tag="ul" isOpen={this.state.accordion[0]} className="list-unstyled footer-menu d-xs-block mb-0">
                                    <li>
                                        <p className="font-weight-bold"><IntlMessages id="bh.footer.menu-1" /></p>
                                    </li>
                                    <li>
                                        <p><IntlMessages id="bh.footer.menu-1-1" /></p>
                                    </li>
                                    <li>
                                        <InputGroup className="mb-2">
                                            <p className="font-weight-bold"><IntlMessages id="bh.footer.menu-1-2" /></p>
                                            &nbsp;
                                    <p><IntlMessages id="bh.footer.menu-1-2-1" /></p>
                                        </InputGroup>
                                    </li>
                                    <li>
                                        <InputGroup className="mb-2">
                                            <p className="font-weight-bold"><IntlMessages id="bh.footer.menu-1-3" /></p>
                                            &nbsp;
                                    <p><IntlMessages id="bh.footer.menu-1-3-1" /></p>
                                        </InputGroup>
                                    </li>
                                    <li>
                                        <InputGroup className="mb-2">
                                            <p className="font-weight-bold"><IntlMessages id="bh.footer.menu-1-4" /></p>
                                            &nbsp;
                                    <p><IntlMessages id="bh.footer.menu-1-4-1" /></p>
                                        </InputGroup>
                                    </li>
                                </Collapse>
                            </div>
                        </Colxx>

                        <Colxx xxs={{ size: 12, offset: 0 }} xs="6" sm="3" lg={{ size: 5 }} className="footer-menu mb-5">
                            <div className="d-flex flex-column align-items-center">

                                <a className="d-inline-block d-xs-none collapse-button mb-1"
                                    onClick={() => this.toggleAccordion(3)}
                                    aria-expanded={this.state.accordion[3]}><IntlMessages id="bh.footer.menu-2" /> <i className="simple-icon-arrow-down"></i>
                                </a>

                                <Collapse tag="ul" isOpen={this.state.accordion[3]} className="list-unstyled footer-menu  d-xs-block mb-0" >
                                    <li className="d-none d-xs-inline-block">
                                        <p className="font-weight-bold"><IntlMessages id="bh.footer.menu-2" /></p>
                                    </li>
                                    <li>
                                        <p><IntlMessages id="bh.footer.menu-2-1" /></p>
                                    </li>
                                    <li>
                                        <InputGroup className="mb-3">
                                            <Input placeholder={messages["bh.email.placeholder"]} />
                                            <InputGroupAddon addonType="append">
                                                <Button color="secondary" size="xl"><IntlMessages id="bh.button.regist" /></Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </li>
                                </Collapse>
                            </div>
                        </Colxx>
                    </Row>
                </Container>

                <div className="separator mt-5"></div>

                <Container className="copyright pt-5 pb-5">
                    <Row>
                        <div className="col-6">
                            <p className="mb-0 font-weight-bold"><IntlMessages id="bh.footer.copyright" /></p> 
                        </div>
                        <div className="col-6 text-right social-icons">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="https://goo.gl/maps/Giw2y12fUenP7tmY9"><i className="iconsmind-Map-Marker2 font-weight-bold"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.facebook.com/pvionline/"><i className="simple-icon-social-facebook font-weight-bold"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/explore/locations/122107574648523/pvi-sai-gon-75-ngo-thoi-nhiem/"><i className="simple-icon-social-instagram font-weight-bold"></i></a>
                                </li>
                            </ul>
                        </div>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default injectIntl(SectionHero)