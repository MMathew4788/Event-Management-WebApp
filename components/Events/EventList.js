import EventItem from './EventItem';

function EventList(props) {
  return (
    <ul className="m-0 p-0 flex flex-col">
      {props.events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          address={event.address}
        />
      ))}
    </ul>
  );
}

export default EventList;