import React from "react";

import {
  Row,
  Button,
  FormGroup,
  Form,
  Label,
  Input,
  Alert} from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";


export default class PVICareForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : '',
      phone : '',
      email : '',
      note : '',
      alert_message : ''
    }
  }
  onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
          [name] : value
        });
    }
        
    onSave = (e) => {
          e.preventDefault();
          const url = "http://localhost:8080/api/customers";
          const data = { name : this.state.name, phone: this.state.phone, email : this.state.email, note : this.state.note }
          fetch(url, { method: 'POST', // or ‘PUT’
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .catch(error => 
              this.setState({alert_message: "error"}))
            .then(response => 
              this.setState({alert_message: "success"}));
    }

    render() {
        const { name, phone, email, note, alert_message } = this.state;
        return (
            <Row className="mb-4">
            <Colxx xxs="12">
              <Form onSubmit= {this.onSave}>
              {alert_message === "success" ? <Alert color="info">Yêu cầu tư vấn thành công </Alert> : null}
              {alert_message === "error" ?  <Alert color="danger">Yêu cầu tư vấn thất bại</Alert> : null}
               
               
                <FormGroup row>
                  <Colxx sm={4}>
                    <FormGroup>
                      <Label for="name">
                        Họ và tên của bạn
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        value = {name}
                        onChange = {this.onChange}
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx sm={8}>
                  </Colxx>

                  <Colxx sm={4}>
                    <FormGroup>
                      <Label for="phone">
                        Số điện thoại
                      </Label>
                      <Input
                        type="text"
                        name="phone"
                        id="phone"
                        value = {phone}
                        onChange = {this.onChange}
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx sm={8}>
                  </Colxx>
                  <Colxx sm={4}>
                    <FormGroup>
                      <Label for="email">
                        Email
                      </Label>
                      <Input
                        type="text"
                        name="email"
                        id="email"
                        value = {email}
                        onChange = {this.onChange}
                      />
                    </FormGroup>
                  </Colxx>
                  <Colxx sm={8}>
                  </Colxx>
                  <Colxx sm={4}>
                    <FormGroup>
                      <Label for="phone">
                        Lời nhắn của quý khách tư vấn
                      </Label>
                      <Input
                        type="textarea"
                        name="note"
                        id="note"
                        value = {note}
                        onChange = {this.onChange}
                      />
                    </FormGroup>
                  </Colxx>
                </FormGroup>
                <Button color="primary" onClick={this.onSave}>
                  YÊU CẦU TƯ VẤN
                </Button>
              </Form>
            </Colxx>
          </Row>
        );
      }
}
