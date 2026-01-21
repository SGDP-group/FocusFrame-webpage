import { useState } from 'react';
import Button from '../../common/Button';
import './Problem.css';

const Problem = () => {
  return (
    <section id="problem" className="problem">
      <div className="problem__container">
        <h2 className="problem__header">Why is staying focused so hard?</h2>
        
        <div className="problem__grid">
          <div className="problem__card">
            <h3 className="problem__card-title">Digital Noise</h3>
            <p className="problem__card-description">
              Your phone buzzes. Slack pings. Even with "Do Not Disturb" on, the urge to check is overwhelming.
            </p>
          </div>

          <div className="problem__card">
            <h3 className="problem__card-title">The "Hey, do you have a sec?" Problem</h3>
            <p className="problem__card-description">
              Roommates and colleagues don't know you are in the zone until they've already interrupted you.
            </p>
          </div>

          <div className="problem__card">
            <h3 className="problem__card-title">Task Paralysis</h3>
            <p className="problem__card-description">
              Big projects feel overwhelming. You don't know where to start, so you procrastinate.
            </p>
          </div>
        </div>

        <div className="problem__reality">
          <h3 className="problem__reality-title">The Reality:</h3>
          <p className="problem__reality-text">
            Average time to refocus after an interruption is <strong>23 minutes</strong>. You can't afford to lose that time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
