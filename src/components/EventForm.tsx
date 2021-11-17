import { FC } from "react";
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import rules from "../utils/formValidatorRules";
import { IEventType } from "../models/IEvent";
import { UserType } from "../models/IUser";

interface EventFormPropsType {
    guests: UserType[],
};

const EventForm: FC<EventFormPropsType> = ({ guests }) => {

    return (
        <Form>
            <Form.Item
                label='Event subject'
                name='description'
                rules={[rules.required('Required field')]}>
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                 label='Select date'
                 name='date'
                 rules={[rules.required('Date is required')]}>
                <DatePicker />
            </Form.Item>

            <Form.Item
                 label='Select executor'
                 name='executor'
                 rules={[rules.required('Executor is required')]}>
                <Select>
                    { guests.map(user => <Select.Option 
                                            key={user.password} 
                                            value={user.username}>{ user.username }</Select.Option>) }
                </Select>
            </Form.Item>

            <Row justify='end'>
                <Form.Item>
                    <Button 
                        type='primary'
                        htmlType='submit'>Add</Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;