import React, { Component } from 'react';
import { Row, Card, CardBody } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";
import { NavLink } from "react-router-dom";

class SectionProducts extends Component {
    render() {
        return (
            <Row>
                <Colxx xxs={{ size: "12", offset: 0 }} lg={{ size: 8, offset: 2 }} className="text-center">
                    <h1>CÁC SẢN PHẨM KHÁC</h1>
                </Colxx>
                <Colxx xxs="12" className="p-0 review-carousel">

                    <ReactSiemaCarousel
                        perPage={{
                            0: 1,
                            768: 2,
                            1200: 3,
                            1440: 4
                        }}
                        loop={false}>
                        <div className="pr-3 pl-3 d-flex">
                            <NavLink to="/bao-hiem-oto-tnds">
                                <Card>
                                    <CardBody className="text-center pt-5 pb-5">
                                        <div>
                                            <img alt="review profile" className="card-img-left" src="/assets/img/oto.jpg" />
                                            <h5> </h5>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 font-weight-semibold color-theme-1 mb-3">BẢO HIỂM Ô TÔ</h5>
                                        </div>
                                    </CardBody>
                                </Card>
                            </NavLink>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <NavLink to="/bao-hiem-o-to">
                                <Card>
                                    <CardBody className="text-center pt-5 pb-5">
                                        <div>
                                            <img alt="review profile" className="card-img-left" src="/assets/img/travel.jpg" />
                                            <h5> </h5>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 font-weight-semibold color-theme-1 mb-3">BẢO HIỂM DU LICH</h5>
                                        </div>
                                    </CardBody>
                                </Card>
                            </NavLink>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <NavLink to="/bao-hiem-o-to">
                                <Card>
                                    <CardBody className="text-center pt-5 pb-5">
                                        <div>
                                            <img alt="review profile" className="card-img-left" src="/assets/img/staff.jpg" />
                                            <h5> </h5>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 font-weight-semibold color-theme-1 mb-3">BẢO HIỂM SỨC KHỎE DOANH NGHIỆP</h5>
                                        </div>
                                    </CardBody>
                                </Card>
                            </NavLink>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <NavLink to="/bao-hiem-tai-nan">
                                <Card>
                                    <CardBody className="text-center pt-5 pb-5">
                                        <div>
                                            <img alt="review profile" className="card-img-left" src="/assets/img/bh_tainan.jpg" />
                                            <h5> </h5>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 font-weight-semibold color-theme-1 mb-3">BẢO HIỂM TAI NẠN 24H</h5>
                                        </div>
                                    </CardBody>
                                </Card>
                            </NavLink>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <NavLink to="/bao-hiem-o-to">
                                <Card>
                                    <CardBody className="text-center pt-5 pb-5">
                                        <div>
                                            <img alt="review profile" className="card-img-left" src="/assets/img/family_2.jpg" />
                                            <h5> </h5>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 font-weight-semibold color-theme-1 mb-3">BẢO HIỂM SỨC KHỎE CÁ NHÂN</h5>
                                        </div>
                                    </CardBody>
                                </Card>
                            </NavLink>
                        </div>

                        <div className="pr-3 pl-3 d-flex">
                            <NavLink to="/bao-hiem-o-to">
                                <Card>
                                    <CardBody className="text-center pt-5 pb-5">
                                        <div>
                                            <img alt="review profile" className="card-img-left" src="/assets/img/motobike.jpg" />
                                            <h5> </h5>
                                        </div>
                                        <div>
                                            <h5 className="mb-0 font-weight-semibold color-theme-1 mb-3">BẢO HIỂM XE MÁY</h5>
                                        </div>
                                    </CardBody>
                                </Card>
                            </NavLink>
                        </div>

                    </ReactSiemaCarousel>
                </Colxx>
            </Row>
        );
    }
}

export default SectionProducts;