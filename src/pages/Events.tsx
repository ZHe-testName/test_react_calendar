import { Button, Modal, Row } from "antd";
import { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useDispatchedActions } from "../hooks/useDispatchedActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEventType } from "../models/IEvent";

const Events: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const { fetchUsersThunk, createEventThunk, fetchEventThunk } = useDispatchedActions();
    const { guests, events } = useTypedSelector(state => state.eventReducer);
    const { user } = useTypedSelector(state => state.authReducer);

    useEffect(() => {
        fetchUsersThunk();

        fetchEventThunk(user.username);
    }, []);

    const submit = (event: IEventType) => {
        createEventThunk(event);

        setIsVisible(false);
    };

    return (
        <div>
            <EventCalendar events={ events }/>
            
            <Row justify='center' style={{margin: '20px 0px'}}>
                <Button
                    size='large'
                    type='primary'
                    onClick={() => {setIsVisible(true)}}>
                    Add Event
                </Button>
            </Row>

            <Modal
                title='Add an event'
                visible={isVisible}
                footer={null}
                onCancel={() => {setIsVisible(false)}}>

                <p>Create an event task for some one...</p>

                <EventForm guests={ guests } submit={ submit }/>
            </Modal>
        </div>
    );
};

export default Events;