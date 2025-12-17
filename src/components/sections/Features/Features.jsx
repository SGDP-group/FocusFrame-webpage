import './Features.css';
import FeatureCard from './FeatureCard';

const featuresData = [
  {
    id: 1,
    image: '/images/feature-1.png',
    title: 'Track your focus time, how far can you go?',
  },
  {
    id: 2,
    image: '/images/feature-2.png',
    title: "Add tasks, see how well you've been doing!",
  },
  {
    id: 3,
    image: '/images/feature-3.png',
    title: "Let everyone know you're working and to stay away!",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <div className="features__grid">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
