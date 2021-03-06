import React from 'react'
import Layout from './Layout'
import { Input,Form, Button } from 'antd'
const SignUp = () => {
    return (
        <Layout title="注册" subTitle="">
            <Form>
                <Form.Item name="name" label="昵称">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input.Password />
                </Form.Item>
                <Form.Item name="email" label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item name="注册">
                    <Button type="primary" htmlType="submit">
                    注册
                    </Button>
                </Form.Item>
        </Form>
        </Layout>
    )
}
export default SignUp