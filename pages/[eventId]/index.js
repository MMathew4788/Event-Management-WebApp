import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import EventDetail from "@/components/Events/EventDetail";

function eventDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.eventData.title}</title>
        <meta name="description" content={props.eventData.description} />
      </Head>
      <EventDetail
        image={props.eventData.image}
        title={props.eventData.title}
        address={props.eventData.address}
        description={props.eventData.description}
      />
    </Fragment>
  );
}

const password =process.env.PASSWORD;
// dynamic path
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://manojmathew:${password}@cluster0.sr0evq9.mongodb.net/events?retryWrites=true&w=majority`
  );
  const db = client.db();

  const eventsCollection = db.collection('events');
  const events = await eventsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: 'blocking',
    paths: events.map((event) => ({
      params: { eventId: event._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const eventId = context.params.eventId;

  const client = await MongoClient.connect(
    `mongodb+srv://manojmathew:${password}@cluster0.sr0evq9.mongodb.net/events?retryWrites=true&w=majority`
  );
  const db = client.db();

  const eventsCollection = db.collection('events');

  console.log(eventsCollection);

  const selectedEvent = await eventsCollection.findOne({
    _id: new ObjectId(eventId),
  });

  return {
    props: {
      eventData: {
        id: selectedEvent._id.toString(),
        title: selectedEvent.title,
        address: selectedEvent.address,
        image: selectedEvent.image,
        description: selectedEvent.description,
      },
    },
  };
}
export default eventDetailPage;
