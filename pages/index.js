import { Fragment } from "react";
import { useRef } from 'react'; 

function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback }; 
    
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    }) // send the form to api folder
    .then((response) => response.json())
    .then((data) => console.log(data)); 
  }

  return (
    <> {/* Fragment is used to avoid unnecessary wrapper */}
      <div>
        <h1>The Home Page</h1>
        <form onSubmit={submitFormHandler}>
          <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows='5' ref={feedbackInputRef}></textarea>
          </div>
          <button>Send Feedback</button>
        </form>
      </div>
    </>
  )
}

export default HomePage;
