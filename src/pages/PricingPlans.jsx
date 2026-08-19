import { useState } from 'react';

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 10.99,
    yearlyPrice: 99.99,
    isPopular: false,
    features: [
      'Access to SD (Standard Definition) streaming quality.',
      'Watch on 1 device at a time.',
      'Limited ads.',
      'Offline downloads for up to 5 titles.',
    ],
  },
  {
    name: 'Standard',
    monthlyPrice: 16.99,
    yearlyPrice: 149.99,
    isPopular: true,
    features: [
      'Access to Full HD (High Definition) streaming quality.',
      'Watch on 2 devices simultaneously.',
      'Ad-free experience.',
      'Unlimited offline downloads.',
    ],
  },
  {
    name: 'Premium',
    monthlyPrice: 25.99,
    yearlyPrice: 229.99,
    isPopular: false,
    features: [
      'Access to UHD and 4K streaming quality.',
      'Watch on 4 devices simultaneously.',
      'Full library access',
      'Includes all Standard Subscription features.',
    ],
  },
];

const PricingPlans = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center justify-center font-sans">
      {/* Header */}
      <div className="text-center max-w-2xl mb-10 space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Choose Your Plan
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Choose your plan to enjoy unlimited access to your Favourite Movies and Shows
        </p>
      </div>

      {/* Toggle Button */}
      <div className="bg-black border-2 border-purple-500/80 p-1.5 rounded-full flex items-center mb-16 relative shadow-[0_0_15px_rgba(168,85,247,0.3)]">
        <button
          onClick={() => setBillingCycle('monthly')}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            billingCycle === 'monthly'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle('yearly')}
          className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            billingCycle === 'yearly'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/50'
              : 'text-gray-300 hover:text-white'
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full items-stretch">
        {plans.map((plan) => {
          const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
          const period = billingCycle === 'monthly' ? '/ month' : '/ year';

          return (
            <div
              key={plan.name}
              /* 
                rounded-tl-none - верхний левый острый
                rounded-tr-3xl  - верхний правый скруглен
                rounded-bl-3xl  - нижний левый скруглен
                rounded-br-none - нижний правый острый
              */
              className={`relative bg-black border-2 rounded-tl-none rounded-tr-3xl rounded-bl-3xl rounded-br-none p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                plan.isPopular
                  ? 'border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.4)]'
                  : 'border-purple-600/70 shadow-[0_0_15px_rgba(147,51,234,0.2)]'
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md shadow-md shadow-purple-600/50">
                  Most Popular
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-purple-400 font-semibold text-lg mb-4">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-black">${price}</span>
                    <span className="text-gray-400 text-sm font-normal">{period}</span>
                  </div>
                  <div className="w-full h-[1px] bg-purple-900/40 mt-6" />
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <div className="mt-0.5 min-w-[18px] h-[18px] rounded-full bg-purple-600 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md shadow-purple-600/30 hover:shadow-purple-600/60">
                Get Started
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PricingPlans;