import { Calendar } from "antd";
import { FC } from "react";
import { IEventType } from "../models/IEvent";

interface IEventCalendarProps {
    events: IEventType[],
};

const EventCalendar: FC<IEventCalendarProps> = () => {
    return (
        <Calendar />
    );
};

export default EventCalendar;