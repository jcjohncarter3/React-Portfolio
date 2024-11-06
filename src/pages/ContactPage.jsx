// This is a static page mocking an "About Us" section for our fake user data
export default function ContactPage() {
    return (
      <div className="page">
        <h2>Contact</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 ">
          <label htmlFor="messageField" className="form-label">Message</label>
          <textarea className="form-control" placeholder="Leave a comment here" id="messageField"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
  