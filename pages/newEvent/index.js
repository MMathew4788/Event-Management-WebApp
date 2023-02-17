import NewEventForm from "../../components/Events/NewEventForm";

function newEvent(){
    function addEventHandler(enteredEventData){
        console.log(enteredEventData)
    }

    return(
        <NewEventForm onAddEvent={addEventHandler}/>
    )
}

export default newEvent;
