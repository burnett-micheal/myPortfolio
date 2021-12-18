import React, { Component } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

function TriDown(props){
  return(
    <svg height="6vw" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white" />
    </svg>
  );
}

class Contact extends Component {

  state = {
    notify: [],
    totalEmails: 0,
  };

  sendEmail = (e) => {
    e.preventDefault();
    let notify = "";
    const name = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;
    const minName = 1;
    const minEmail = 3;
    const minSubject = 3;
    const minMessage = 25;
    const maxEmails = 5;
    let badName = name.length < minName;
    let badEmail = email.length < minEmail;
    let badSubject = subject.length < minSubject;
    let badMessage = message.length < minMessage;
    let success = false;

    if(!(badName || badEmail || badSubject || badMessage) && this.state.totalEmails <= maxEmails){
    emailjs.sendForm("service_62s4t3h", "template_djvhmad", e.target, "user_6qRGrOUb0CsoizJK3pxin");
    notify += "Sent Successfully";
    e.currentTarget.reset();
    } else {
      if(this.state.totalEmails > maxEmails) notify += "Max Emails Exceeded "; else
      if(badName) notify += "Invalid Name "; else
      if(badEmail) notify += "Invalid Email "; else
      if(badSubject) notify += "Invalid Subject "; else
      if(badMessage) notify += "Invalid Message ";
    }

    
    this.setState(prevState => {
      if(prevState.notify.length > 100) prevState.notify = [];
      prevState.notify.push(notify);
      if(success) prevState.totalEmails++;
      return prevState;
    });
  }

  render(){
    return(
      <div className="Contact_contact">
        <TriDown />
        <div className="Contact_titleContainer">
          <div className="Contact_title">Contact Me</div>
          <div className="Contact_underline" />
        </div>

        <div style={{display: "flex", justifyContent: "center"}}> 
          <form onSubmit={this.sendEmail} style={{width:"50%"}}>
            <div className="Contact_formLine">
              <input type="text" placeholder="   Your Name" name="name" className="Contact_name"/>
              <input type="email" placeholder="   Your Email" name="email" className="Contact_email"/>
            </div>
            <div className="Contact_formLine">
              <input type="text" placeholder="   Subject" name="subject" className="Contact_subject"/>
            </div>
            <div className="Contact_formLine">
              <textarea placeholder=" Enter Message" name="message" className="Contact_message"/>
            </div>
            <div className="Contact_formLine">
              <input type="submit" value="Send" className="Contact_submit"/>
            </div>
          </form>
        </div>

        {this.state.notify.map((txt, key) => <div className="popUp" key={key}>{txt}</div>)}
      </div>
    );
  }
};

export default Contact;