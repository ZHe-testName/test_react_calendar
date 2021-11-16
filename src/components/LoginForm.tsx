import { Form, Input, Button, Checkbox } from 'antd';
import rules from '../utils/formValidatorRules';

const LoginForm = () => {
    return (
        <Form>
            <Form.Item
                label="User Name"
                name="name"
                rules={[rules.required('Please input your name!')]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;