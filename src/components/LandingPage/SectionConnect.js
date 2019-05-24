import React, { Fragment } from "react";
import { Row, Card, CardBody } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";

export default class SectionConnect extends React.Component {
    render() {
        return (
            <Fragment>
                <Row>
                    <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-center">
                        <h1><IntlMessages id="lp.connect.title" /></h1>
                        <p>
                            <IntlMessages id="lp.connect.detail" />
                        </p>
                    </Colxx>
                </Row>

                <Row className="mt-5">
                    <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 12, offset: 1 }}>
                        <ReactSiemaCarousel
                            perPage={{
                                0: 1,
                                768: 2,
                                1200: 3,
                                1440: 4
                            }}
                            controls={false}
                            loop={false}>
                            <div className="pr-4 pl-4">
                                <Card>
                                    <CardBody className="text-center">
                                        <div className="mb-4">
                                            <i className="simple-icon-social-facebook large-icon"></i>
                                            <h5 className="mb-0 font-weight-semibold"><IntlMessages id="lp.connect.title-1" /></h5>
                                        </div>
                                        <a className="btn btn-link font-weight-semibold" href="https://www.facebook.com/pvionline/"><IntlMessages id="lp.connect.button-1" /></a>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="pr-4 pl-4">
                                <Card>
                                    <CardBody className="text-center">
                                        <div className="mb-4">
                                            <i className="simple-icon-social-instagram large-icon"></i>
                                            <h5 className="mb-0 font-weight-semibold"><IntlMessages id="lp.connect.title-2" /></h5>
                                        </div>
                                        <a className="btn btn-link font-weight-semibold" href="https://www.instagram.com/explore/locations/122107574648523/pvi-sai-gon-75-ngo-thoi-nhiem/"><IntlMessages id="lp.connect.button-2" /></a>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="pr-4 pl-4">
                                <Card>
                                    <CardBody className="text-center">
                                        <div className="mb-4">
                                            <i className="iconsmind-Map-Marker2 large-icon"></i>
                                            <h5 className="mb-0 font-weight-semibold"><IntlMessages id="lp.connect.title-3" /></h5>
                                        </div>
                                        <a className="btn btn-link font-weight-semibold" href="https://goo.gl/maps/Giw2y12fUenP7tmY9"><IntlMessages id="lp.connect.button-3" /></a>
                                    </CardBody>
                                </Card>
                            </div>

                        </ReactSiemaCarousel>
                    </Colxx>
                </Row>

            </Fragment>
        );
    }
}
