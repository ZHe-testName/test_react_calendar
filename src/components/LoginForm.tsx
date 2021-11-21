import { Form, Input, Button } from 'antd';
import { useDispatchedActions } from '../hooks/useDispatchedActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { UserType } from '../models/IUser';
import rules from '../utils/formValidatorRules';

const LoginForm = () => {
    const {isLoading, error} = useTypedSelector(state => state.authReducer);

    const { login } = useDispatchedActions();

    const onFinish = (values: UserType) => {
        login(values.username, values.password);
    };

    return (
        <Form
            onFinish={onFinish}>
            {
                error && <div style={{color: 'tomato'}}>
                    {error}
                </div>
            }
            <Form.Item
                label="User Name"
                name="username"
                rules={[rules.required('Please input your name!')]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;