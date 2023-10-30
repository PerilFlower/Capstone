import html from "html-literal";

export default state => html`
  <div id="labels">
    <h1>Contact form</h1>
  </div>
  <div id="smalllabel">
    <h6>Need to contact a member of the team? Don't hesitate to message </h6>
  </div>
  <div class="formContainer">
    <h1>
    <form action="" method="POST">
  <label for="name">Name:</label>
  <input type="text" name="name" id="name" placeholder="Full Name" required />

  <label for="email">Email:</label>
  <input type="email" name="email" id="email" placeholder="you@somewhere.com" />

  <label for="fone">Phone:</label>
  <input type="tel" name="fone" id="fone" placeholder="555-555-5555" />

  <div>
    <label for="msg">Enter your message:</label>
    <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
  </div>
      <h1></h1>
    </h1>
  </div>
`;
