import { Button, Modal, Row } from "antd";
import { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useDispatchedActions } from "../hooks/useDispatchedActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Events: FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const { fetchUsersThunk } = useDispatchedActions();
    const { guests } = useTypedSelector(state => state.eventReducer)

    useEffect(() => {
        fetchUsersThunk();
    }, [])

    return (
        <div>
            <EventCalendar events={[]}/>

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

                <EventForm guests={ guests }/>
            </Modal>
        </div>
    );
};

export default Events;