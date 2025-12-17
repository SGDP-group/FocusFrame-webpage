import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__card">
          <div className="about__image-wrapper">
            <img
              src="/images/team.svg"
              alt="FocusFrame team"
              className="about__image"
            />
          </div>
          <div className="about__content">
            <h2 className="about__title">About Us</h2>
            <div className="about__text">
              <p>
                FocusFrame began when the six of us brainstorming ideas to pass a module. We realized, we were having trouble focusing, because of distractions from within and disturbances from outside.
              </p>
              <p>
                Realizing that this was a common problem, we decided to create a solution. A solution that keeps both us, as well as the people around us in check, helping us to focus on what really matters; managing our time effectively. And thus, FocusFrame was born.
              </p>
              <p>
                With our tabletop display, a user can check how much time they have been focusing for, and what they have gotten done, showing how far they have come, and how far they have to go. A microphone and camera mounted onto the display allows FocusFrame to track how and when the user is disturbed. The mobile app allows a user to add tasks to be done and schedule focus times, and that is where the magic happens. Using an advanced AI agent, we aim to gauge the amount of time needed for the task, and using data gathered about disturbances, FocusFrame suggests the optimal time frames to get your work done, free of distractions. And as the cherry on top, we also provide an LED indicator to tell everyone around you that you're hard at work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
