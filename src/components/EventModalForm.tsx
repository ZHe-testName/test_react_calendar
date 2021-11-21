import { Avatar, Badge, Checkbox, Form, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FC } from "react";
import { IEventType } from "../models/IEvent";
import { useDispatchedActions } from "../hooks/useDispatchedActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface EventModalFormPropsType {
    events: IEventType[],
    selectDate: string,
};

const EventModalForm: FC<EventModalFormPropsType> = ({ events, selectDate }) => {
    const { fetchIsDoneThunk } = useDispatchedActions();

    const thisDateEventsAuthors: string[] = [];
    const { user } = useTypedSelector(state => state.authReducer)
    
    const thisDateEvents = events.filter(event => event.date === selectDate);

    new Set(thisDateEvents.map(event => event.author))
        .forEach(author => thisDateEventsAuthors.push(author));

    return (
        <Form>
            {
                (!thisDateEvents.length)

                    ? <Typography.Text 
                                    type='danger'
                                    style={{fontSize: '21px'}}>
                            No any events for this date.
                        </Typography.Text>

                    : thisDateEventsAuthors.map((author, i) => (
                        <Form.Item
                            key={author + i}
                            label='author'>
                            <div>
                                <Avatar 
                                    icon={ <UserOutlined />} 
                                    shape='square'
                                    style={{
                                                marginRight: '10px', 
                                                color: 'white', 
                                                backgroundColor: 'tomato',
                                            }}/>

                                    {author}    
                            </div>

                            <div style={{
                                            display: 'flex', 
                                            flexDirection: 'column'}}>
                                {
                                    thisDateEvents
                                        .filter(event => event.author === author)
                                        .map(event => <div key={event.id}>
                                            <Badge 
                                                status={event.isDone ? 'default' : 'success'}
                                                text={event.description}
                                                style={{marginLeft: '40px'}}/>

                                            <Checkbox
                                                onChange={() => {fetchIsDoneThunk(!event.isDone, event.id, user.username)}}
                                                checked={event.isDone}
                                                style={{marginLeft: '40px'}}>
                                                Done
                                            </Checkbox>
                                        </div>)
                                }
                            </div>
                        </Form.Item>
                    ))
            }
        </Form>
    );
};

export default EventModalForm;