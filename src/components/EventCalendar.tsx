import { Badge, Calendar } from "antd";
import { Moment } from "moment";
import { FC } from "react";
import { IEventType } from "../models/IEvent";
import { formatDate } from "../utils/formatDate";

interface IEventCalendarProps {
    events: IEventType[],
};

const EventCalendar: FC<IEventCalendarProps> = ({ events }) => {
    function dateCellRender(value: Moment) {
        const date = formatDate(value.toJSON());

        const dayEventsArr = events.filter(event => event.date === date);
        return (
          <div>
              {
                  dayEventsArr.map(event => <Badge status='success' text={event.description} />)
              }
          </div>
        );
      };

    return (
        <Calendar 
            dateCellRender={dateCellRender}/>
    );
};

export default EventCalendar;