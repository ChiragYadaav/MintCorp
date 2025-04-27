import React, { useEffect } from 'react';
import { animateCounters } from '@/lib/animateCounters';

interface StatItemProps {
  count: number;
  text: string;
  isPercentage?: boolean;
  isCurrency?: boolean;
  suffix?: string;
  colorClass: string;
}

const StatItem: React.FC<StatItemProps> = ({ 
  count, 
  text, 
  isPercentage = false, 
  isCurrency = false, 
  suffix = '', 
  colorClass 
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-up">
      <div className={`${colorClass} text-4xl font-bold mb-2`}>
        {isCurrency && '$'}
        <span className="counter-value" data-count={count}>0</span>
        {isPercentage && '%'}
        {suffix}
      </div>
      <p className="text-gray-800 font-medium">{text}</p>
    </div>
  );
};

const Stats: React.FC = () => {
  useEffect(() => {
    const cleanup = animateCounters();
    return cleanup;
  }, []);

  return (
    <section className="py-20 stats-container">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center reveal">
          <StatItem 
            count={200} 
            text="Clients Served" 
            suffix="+" 
            colorClass="text-[hsl(var(--primary))]" 
          />
          
          <StatItem 
            count={20} 
            text="Years Experience" 
            suffix="+" 
            colorClass="text-[hsl(var(--secondary))]" 
          />
          
          <StatItem 
            count={500} 
            text="Assets Managed" 
            isCurrency={true} 
            suffix="M+" 
            colorClass="text-[hsl(var(--primary))]" 
          />
          
          <StatItem 
            count={35} 
            text="Expert Advisors" 
            colorClass="text-[hsl(var(--secondary))]" 
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
