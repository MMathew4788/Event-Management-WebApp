import {useRef } from 'react';

import Card from '../UI/Card';

function NewEventForm(props) {
 
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const passcodeInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCode = passcodeInputRef.current.value;

  
    if (enteredCode === "ABC1234") {
      const eventData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
      };

    props.onAddEvent(eventData);}
    else{
      alert("Incorrect password. Please try again.");
    }

  }

  return (
    <Card>
      <form className="p-4" onSubmit={submitHandler}>
        <div className="p-2 space-y-2 flex flex-col">
          <label htmlFor='title' className='font-semibold'>Event Title</label>
          <input type='text' required id='title' ref={titleInputRef} placeholder='Enter the title of event'/>
        </div>
        <div className="p-2 space-y-2 flex flex-col">
          <label htmlFor='image' className='font-semibold'>Event Image</label>
          <input type='url' required id='image' ref={imageInputRef} placeholder='Enter the url of event image' />
        </div>
        <div className="p-2 space-y-2 flex flex-col">
          <label htmlFor='address' className='font-semibold'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} placeholder='Enter the address of event'/>
        </div>
        <div className="p-2 space-y-2 flex flex-col">
          <label htmlFor='description' className='font-semibold text-justify'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
            placeholder='Enter the description of event'
          ></textarea>
        </div>
        <div className="p-2 space-y-2 flex flex-col">
          <label className='font-semibold'>Passcode</label>
          <input type='password' required id='password' ref={passcodeInputRef} placeholder='Enter the passcode and Add Event'/>
        </div>
        
        <div>
          <button className="mt-2 rounded-xl bg-[#f18973] hover:bg-[#bc5a45] px-4 py-2 font-bold">Add Event</button>
        </div>
        
      </form>
    </Card>
  );
}

export default NewEventForm;