import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from 'mongodb';

import EventList from "../components/Events/EventList";

function HomePage(props){
  return(
    <Fragment>
      <Head>
      <title>Event Management WebApp</title>
        <meta
          name='description'
          content='Browse through a list of events'
        />
      </Head>
    <EventList events={props.events}/>
    </Fragment>
  )
}

const password =process.env.PASSWORD;

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(`mongodb+srv://manojmathew:${password}@cluster0.sr0evq9.mongodb.net/events?retryWrites=true&w=majority`);
  const db= client.db();

  const eventsCollection= db.collection('events');
  const events= await eventsCollection.find().toArray();


  client.close();
  return {
    props: {
      events: events.map((event) => ({
        title: event.title,
        address: event.address,
        image: event.image,
        id: event._id.toString(),
      })),
    },
    revalidate: 1,
  };
}; 

export default HomePage;