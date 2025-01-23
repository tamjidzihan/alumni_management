import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import EventsList from "../../components/Event/EventsList";

const Events = () => {
  return (
    <>
      <Breadcrumb pageName="Events" />
      <div className="flex flex-col gap-10">
        <EventsList />
      </div>
    </>
  );
};

export default Events;
