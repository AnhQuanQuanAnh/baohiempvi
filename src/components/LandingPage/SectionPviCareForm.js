import React from "react";

import {Row,Button,FormGroup,Form,Label,Input} from "reactstrap";
import { Colxx } from "Components/CustomBootstrap";


export default class PVICareForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name : '',
      phone : '',
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
          const data = { name : this.state.name, phone: this.state.phone }
          fetch(url, { method: 'POST', // or ‘PUT’
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{ 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
      }



    render() {
        const { name, phone } = this.state;
        return (
            <Row className="mb-4">
            <Colxx xxs="12">
              <Form onSubmit= {this.onSave}>
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
                </FormGroup>

                <Button color="primary" outline onClick={this.toggle}>
                  YÊU CẦU TƯ VẤN
                </Button>
              </Form>
            </Colxx>
          </Row>
        );
      }
}
