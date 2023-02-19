import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewEventForm from "../../components/Events/NewEventForm";

function newEvent(){
    const router=useRouter();
    async function addEventHandler(enteredEventData){
       const response= await fetch('/api/newEvent',{
        method:'POST',
        body: JSON.stringify(enteredEventData),
        headers: {
            'content-type':'application/json'
        }
       });

       const data= await response.json();
       console.log(data)
       router.push('/');
    }

    return(
        <Fragment>
        <Head>
        <title>Add New Event</title>
        <meta
          name='Description'
          content='Add your own event and let others know about the event'
        />
        </Head>
        <NewEventForm onAddEvent={addEventHandler}/>
        </Fragment>
    )
}

export default newEvent;
