import { Avatar, Form, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FC } from "react";
import { IEventType } from "../models/IEvent";

interface EventModalFormPropsType {
    events: IEventType[],
    selectDate: string,
};

const EventModalForm: FC<EventModalFormPropsType> = ({ events, selectDate }) => {
    const thisDateEventsAuthors: string[] = [];
    
    const thisDateEvents = events.filter(event => event.date === selectDate);

    new Set(thisDateEvents.map(event => event.author))
        .forEach(author => thisDateEventsAuthors.push(author));

    

    console.log(thisDateEventsAuthors);

    return (
        <Form>
            {
                (!thisDateEvents.length)

                    ? <Typography.Text 
                                    type='danger'
                                    style={{fontSize: '21px'}}>
                            No any events for this date.
                        </Typography.Text>

                    : thisDateEventsAuthors.map(author => (
                        <Form.Item
                            label='author'>
                            <div>
                                <Avatar 
                                    icon={ <UserOutlined />} 
                                    style={{marginRight: '10px'}}/>

                                    {author}    
                            </div>
                        </Form.Item>
                    ))
            }
        </Form>
    );
};

export default EventModalForm;