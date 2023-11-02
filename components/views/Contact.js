import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>Contact form</h1>
  </div>
  <div id="smalllabel">
    <h6>Need to contact a member of the team? Don't hesitate to message</h6>
  </div>
  <div class="formContainer">
    <form id="contactform" method="POST">
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          required
        />
      </div>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="you@somewhere.com"
        />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" placeholder="555-555-5555" />
      </div>
      <div>
        <label for="msg">Enter your message:</label>
        <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  </div>
`;
