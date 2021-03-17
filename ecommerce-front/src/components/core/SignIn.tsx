import React from 'react'
import Layout from './Layout'
import { Input,Form, Button } from 'antd'
const SignIn = () => {
    return (
        <Layout title="登录" subTitle="">
            <Form>
               <Form.Item name="email" label="邮箱">
                    <Input />
                </Form.Item>
                <Form.Item name="password" label="密码">
                    <Input.Password />
                </Form.Item>
                <Form.Item name="登录">
                    <Button type="primary" htmlType="submit">
                    登录
                    </Button>
                </Form.Item>
        </Form>
        </Layout>
    )
}
export default SignIn