import { useState, useEffect } from "react";
export default function ContactPage() {
    const [showError, setShowError] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      if (!fullName && !email && !message) {
        setShowError(true)
        setErrorMessage("Fill out the whole form!")
      }
      else if (!fullName && email && message) {
        setShowError(true)
        setErrorMessage("Please enter your name!")
      } else if (!email && fullName && message) {
        setShowError(true)
        setErrorMessage("Please enter your email!")
      } else if (!message && fullName && email) {
        setShowError(true)
        setErrorMessage("Please enter a message!")
      }
      else {
        if (email && email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
          setShowError(false)
        } else {
          setShowError(true)
          setErrorMessage("Please enter your email!")
        }
      }
      
    }, [fullName, email, message])

    function messageField(event) {
       setMessage(event.target.value)
    }

    function fullNameChange(event) {
      setFullName(event.target.value)
    }

    function emailChange(event) {
      setEmail(event.target.value)
    }
    
    return (
      <div className="page">
        <h2>Contact</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="fullName" 
              value={fullName}
              onChange={event => fullNameChange(event)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email"
              value={email}
              onChange={event => emailChange(event)}
            />
          </div>
          <div className="mb-3 ">
          <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                placeholder="Leave a comment here" 
                id="message"
                value={message}
                onChange={event => messageField(event)}>
              </textarea>
          </div>
          {showError && <div className="form-group pb-2">
            <small className="form-text form-error-message">
              {errorMessage}
            </small>
          </div>}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
  