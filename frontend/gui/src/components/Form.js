import React from 'react';
import { Form, Input, Button, } from 'antd';

import axios from 'axios'

// const Formitem = Form.Item;

class CustomForm extends React.Component {

    handleFormSubmit = (event, requestType, articleID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content);

        switch (requestType) {
            case 'post':
                axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
            case 'put':
                axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(error => console.log(error));
        }
    }

    render() {
        return (
            <>
                <Form onSubmit=
                    {(event) => this.handleFormSubmit(
                        event,
                        this.props.requestType,
                        this.props.articleID)}
                >
                    <Form.Item label="Form Layout" >

                    </Form.Item>
                    <Form.Item label="Title">
                        <Input name="title" placeholder="Put a title here" />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input name="content" placeholder="Write something clever" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
                    </Form.Item>
                </Form>
            </>
        );
    }

};

export default CustomForm;