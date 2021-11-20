import { Avatar, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FC } from "react";
import { IEventType } from "../models/IEvent";

interface EventModalFormPropsType {
    events: IEventType[],
    selectDate: string,
};

const EventModalForm: FC<EventModalFormPropsType> = ({ events, selectDate }) => {
    const thisDateEvents = events.filter(event => event.date === selectDate);

    
    return (
        <Form>
            <Form.Item
                label='author'>
                <div>
                    <Avatar 
                        icon={ <UserOutlined />} 
                        style={{marginRight: '10px'}}/>
                </div>
            </Form.Item>
        </Form>
    );
};

export default EventModalForm;