import EventItem from './EventItem';

function EventList(props) {
  return (
    <ul className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 m-0 p-0">
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