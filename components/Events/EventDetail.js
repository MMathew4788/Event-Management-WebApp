function EventDetail(props) {
  return <section className="text-center">
    <img
    src={props.image} alt="" className="w-full rounded-md"/>
    <h1 className=" text-2xl font-semibold">{props.title}</h1>
    <p className="text-xl">{props.address}</p>
    <p className=" text-xl">{props.description}</p>
  </section>;
}

export default EventDetail;
