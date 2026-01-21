import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="features__container">
        <h2 className="features__header">Intelligence Built for Focus</h2>
        
        <div className="features__grid">
          <div className="features__card">
            <div className="features__number">01</div>
            <h3 className="features__title">Plan</h3>
            <p className="features__description">
              Sync your Google Calendar. Use the AI Assistant to break complex goals into manageable sprints.
            </p>
          </div>

          <div className="features__card">
            <div className="features__number">02</div>
            <h3 className="features__title">Engage</h3>
            <p className="features__description">
              Press the button on the FocusFrame Clock. Your environment instantly shifts to "Focus Mode."
            </p>
          </div>

          <div className="features__card">
            <div className="features__number">03</div>
            <h3 className="features__title">Perform</h3>
            <p className="features__description">
              The camera tracks your eye movement and engagement. If you pick up your phone or zone out, FocusFrame gently nudges you back.
            </p>
          </div>

          <div className="features__card">
            <div className="features__number">04</div>
            <h3 className="features__title">Analyze</h3>
            <p className="features__description">
              View your "Heat Map" on the dashboard. See exactly when you were most productive and where you got distracted.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
