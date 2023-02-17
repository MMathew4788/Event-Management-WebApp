import EventList from "../components/Events/EventList";

const Dummy_Event =[
  {
    id:"e1",
    title: "1st Event",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "123 park, 123 street, city",
    description: "this is the 1st event",
  },
  {
    id:"e2",
    title: "2nd Event",
    image: "https://images.pexels.com/photos/1983046/pexels-photo-1983046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "123 park, 123 street, city",
    description: "this is the 2nd event",
  },
  {
    id:"e3",
    title: "3rd Event",
    image: "https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: "123 park, 123 street, city",
    description: "this is the 3rd event",
  }
]

function HomePage(){
  return(
    <EventList events={Dummy_Event}/>
  )
}

export default HomePage;