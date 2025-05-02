
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for getting started',
      price: '$19',
      period: '/month',
      features: ['Up to 5 projects', 'Basic analytics', 'Email support'],
      popular: false,
      buttonText: 'Start Basic'
    },
    {
      name: 'Pro',
      description: 'For growing businesses',
      price: '$49',
      period: '/month',
      features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom branding'],
      popular: true,
      buttonText: 'Start Pro'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: '$99',
      period: '/month',
      features: ['Dedicated instance', 'Custom integrations', '24/7 phone support', 'Advanced security', 'SLA guarantees'],
      popular: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include our core features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative overflow-hidden ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <Badge className="rounded-bl-md rounded-tr-md rounded-br-none rounded-tl-none m-0">Most Popular</Badge>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
