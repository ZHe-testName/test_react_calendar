import { Badge, Calendar } from "antd";
import { Moment } from "moment";
import { FC } from "react";
import { useDispatchedActions } from "../hooks/useDispatchedActions";
import { IEventType } from "../models/IEvent";
import { formatDate } from "../utils/formatDate";

interface IEventCalendarProps {
    events: IEventType[],
    showEventModal: () => void,
};

const EventCalendar: FC<IEventCalendarProps> = ({ events, showEventModal }) => {
    const {setSelectedDate} = useDispatchedActions();

    const onSelect = (value: Moment) => {
        setSelectedDate(formatDate(value.toJSON()));

        showEventModal();
    };

    function dateCellRender(value: Moment) {
        const date = formatDate(value.toJSON());

        const dayEventsArr = events.filter(event => event.date === date);
        return (
          <div>
              {
                  dayEventsArr.map(event => <Badge 
                                                    key={event.id} 
                                                    status={event.isDone ? 'default' : 'success' }
                                                    text={event.description} />)
              }
          </div>
        );
      };

    return (
        <Calendar 
            onSelect={onSelect}
            dateCellRender={dateCellRender}/>
    );
};

export default EventCalendar;