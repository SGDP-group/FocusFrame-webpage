import './FeatureCard.css';

const FeatureCard = ({ image, title }) => {
  return (
    <div className="feature-card">
      <div className="feature-card__image-wrapper">
        <img src={image} alt={title} className="feature-card__image" />
      </div>
      <p className="feature-card__title">{title}</p>
    </div>
  );
};

export default FeatureCard;
