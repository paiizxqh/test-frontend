import React from 'react';
import { Form, Button, Input, Space, Divider } from 'antd';
import { LoginFormSubmitValues } from '../../types/domains/Login'

const DomainsLogin: React.FC = () => {
    const [formLogin] = Form.useForm();
    const handleSubmitForm = async (values: LoginFormSubmitValues) => {
        console.log(values.username);
        console.log(values.password);
     };

    return (
        <Form
            form={formLogin}
            name='formLogin'
            layout='vertical'
            onFinish={handleSubmitForm}
        >
            <Form.Item
                label='Username'
                name='username'
                rules={[
                    { required: true, message: 'Please input your username!' },
                ]}
            >
                <Input placeholder='Username' />
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                rules={[
                    { required: true, message: 'Please input your password!' },
                ]}
            >
                <Input.Password placeholder='Password' />
            </Form.Item>
            <Form.Item>
                <Divider />
                <Space />
                <Button type='primary' htmlType='submit'>
                    Sign in
                </Button>
                <Button htmlType='reset'>
                    Reset Form
                </Button>
                <Button onClick={
                    () => (
                        formLogin.setFieldsValue({
                            username: 'example',
                            password: '1234',
                        })
                    )
                }>
                    Auto Fill Data
                </Button>
                <Space />
            </Form.Item>
        </Form>
    );
};

export default DomainsLogin;
