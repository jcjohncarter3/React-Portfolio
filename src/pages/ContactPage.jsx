// This is a static page mocking an "About Us" section for our fake user data
export default function ContactPage() {
    return (
      <div className="container pt-4">
        <h2>Contact</h2>
        <form>
            <div>
                <label>Full Name</label>
                <input type="text" id="full_name"/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" id="email_address"/>
            </div>
            <div>
                <label>Your Message</label>
               <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>

        </form>
      </div>
    );
  }
  