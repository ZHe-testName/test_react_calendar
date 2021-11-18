import { ChangeEvent, FC, useState } from "react";
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import rules from "../utils/formValidatorRules";
import { IEventType } from "../models/IEvent";
import { UserType } from "../models/IUser";
import { Moment } from "moment";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { formatDate } from "../utils/formatDate";

interface EventFormPropsType {
    guests: UserType[],
    submit: (event: IEventType) => void,
};

const EventForm: FC<EventFormPropsType> = ({ guests, submit }) => {
    const [event, setEvent] = useState<IEventType>({
        author: '',
        date: '',
        description: '',
        guest: '',
    });

    const { user } = useTypedSelector(state => state.authReducer);

    const onFinish = () => {
        submit({...event, author: user.username});
    };

    const setDate = (date: Moment | null) => {
        if (date){
            setEvent({...event, date: formatDate(date.toJSON())});
        };
    };

    return (
        <Form 
            onFinish={onFinish}>
            <Form.Item
                label='Event subject'
                name='description'
                rules={[rules.required('Required field')]}>
                <Input.TextArea 
                    value={event.description}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>)=> setEvent({...event, description: e.target.value})}/>
            </Form.Item>

            <Form.Item
                 label='Select date'
                 name='date'
                 rules={[rules.required('Date is required'), rules.isDateAfter('You can choose this day or feature date only.')]}>
                <DatePicker 
                    onChange={date => setDate(date)}/>
            </Form.Item>

            <Form.Item
                 label='Select executor'
                 name='executor'
                 rules={[rules.required('Executor is required')]}>
                <Select onChange={(guest: string) => setEvent({...event, guest})}>
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