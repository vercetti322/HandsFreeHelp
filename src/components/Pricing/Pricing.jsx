import './Pricing.css';
import PriceCard from './PriceCard/PriceCard';

export default function Pricing() {
  return (
    <div className="pricing">
      <div className="heading">
        <h1>Choose your plan</h1>
        <p>Choose your perfect plan fit for your client&apos;s needs.</p>
        <div className="price-cards">
          <PriceCard />
          <PriceCard />
          <PriceCard />
        </div>
      </div>
    </div>
  );
}
