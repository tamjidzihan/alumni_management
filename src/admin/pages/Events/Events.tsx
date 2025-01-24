import { useEvents } from "../../../hooks/useEvents";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import EventsList from "../../components/Event/EventsList";

const Events = () => {
  const { allEvent, createEvent, deleteEvent } = useEvents()

  return (
    <>
      <Breadcrumb pageName="Events" />
      <div className="flex flex-col gap-10">
        <EventsList
          allEvent={allEvent}
          createNewEvent={createEvent}
          deleteEvent={deleteEvent}
        />
      </div>
    </>
  );
};

export default Events;
