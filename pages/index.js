import { Fragment } from "react";
import { useRef } from 'react'; 

function HomePage(props) {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;
  
  }

  return (
    <> {/* Fragment is used to avoid unnecessary wrapper */}
      <div>
        <h1>The Home Page</h1>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows='5' ref={feedbackInputRef}></textarea>
        </form>
      </div>
    </>
  )
}

export default HomePage;
