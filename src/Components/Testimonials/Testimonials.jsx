import "./testimonials.css";

function Testimonial(props){
  return(
    <div className="Testimonials_container">
      <div className="title">{props.title}</div>
      <div className="testimonial">
        {props.testimonial}
      </div>
    </div>
  );
}

function Testimonials(props){
  const t = [
    {
      title: "James Lopez", 
      testimonial: "I worked with Micheal on the Host-a-Fan project. I found him to be a highly capable and knowledgeable engineer. His skill set traverses various programming languages, and it led me to believe he has a firm understanding of programming fundamentals and how to leverage that in multiple tech stacks. As a team member I can say that he works very well with others. He’s always willing to extend a helping hand and responds well to input on his work. Great attitude, positive energy and work ethic. It has been and continues to be great collaborating with Micheal."
    },
    {
      title: "Branndon Delk", 
      testimonial: "Micheals work and team spirit at Host A Fan was invaluable. Oftentimes he would document practices that he found useful and actively share them with the team. He also helped organize the client presentations via workflowy and regular team meetings. While I was struggling with understanding React Hooks he personally hopped on call and helped me sort it out. He was a great coworker and I enjoyed learning and developing alongside him."
    },
    {
      title: "Daniel Martinez", 
      testimonial: "Micheal brought expertise and team building to Host A Fan. As a former colleague, he was always there to help others find solutions and understand coding concepts. He also rigorously documented the work helping to organize our projects and simplify the workflow. Whenever I had a problem, he was always eager to help and guide me step by step if I was stuck. Michael would be a great asset to any company who needs an enthusiastic and skilled coder."
    },
  ];
  return(
    <div className="Testimonials_testimonials">
      <div className="line"/>
      <Testimonial title={t[0].title} testimonial={t[0].testimonial}/>
      <div className="line"/>
      <Testimonial title={t[1].title} testimonial={t[1].testimonial}/>
      <div className="line"/>
      <Testimonial title={t[2].title} testimonial={t[2].testimonial}/>
      <div className="line"/>
    </div>
  );
}

export default Testimonials;