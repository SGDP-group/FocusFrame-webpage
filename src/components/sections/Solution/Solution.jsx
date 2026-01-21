import './Solution.css';

const Solution = () => {
  return (
    <section id="solution" className="solution">
      <div className="solution__container">
        <h2 className="solution__header">A Complete Ecosystem for Productivity</h2>
        
        <div className="solution__products">
          <div className="solution__product">
            <h3 className="solution__product-title">The FocusFrame Core (Smart Desk Clock)</h3>
            
            <ul className="solution__list">
              <li>
                <strong>Visual Focus Anchor:</strong> A dedicated physical device that tracks your session. No social media. No notifications. Just time and focus.
              </li>
              <li>
                <strong>Ambient Engagement:</strong> Soft LED lighting changes color to reflect your state—Red for Deep Work, Green for Available.
              </li>
              <li>
                <strong>Privacy-First Vision:</strong> Built-in AI detects when your attention drifts or when you leave your desk, pausing your timer automatically.
                <span className="solution__note">Note: Includes physical privacy shutter and local processing.</span>
              </li>
            </ul>
          </div>

          <div className="solution__product">
            <h3 className="solution__product-title">The Door Mount Companion</h3>
            
            <ul className="solution__list">
              <li>
                <strong>Silent Communication:</strong> Wireless integration mirrors your desk clock's status to the outside of your door.
              </li>
              <li>
                <strong>Stop Interruptions Before They Happen:</strong> Let your family or coworkers know you are busy without saying a word.
              </li>
            </ul>
          </div>

          <div className="solution__product">
            <h3 className="solution__product-title">The Intelligent App</h3>
            
            <ul className="solution__list">
              <li>
                <strong>AI Task Breakdown:</strong> Overwhelmed by "Study for Finals"? Our AI breaks it down into "Review Chapter 1 (45 mins)" and "Practice Quiz (30 mins)."
              </li>
              <li>
                <strong>Smart Scheduling:</strong> Integrates with Google Calendar to block out time when you are most productive.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;