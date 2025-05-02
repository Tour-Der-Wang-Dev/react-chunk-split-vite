
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Performance Optimized',
      description: 'Built with code-splitting and optimized builds for maximum speed.',
      highlights: ['Code splitting with React.lazy', 'Manual chunk optimization', 'Terser minification']
    },
    {
      title: 'Modern UI Components',
      description: 'Beautiful, accessible UI components ready to use in your application.',
      highlights: ['Shadcn component library', 'Responsive design', 'Dark mode support']
    },
    {
      title: 'Developer Experience',
      description: 'Tools and patterns for efficient development workflow.',
      highlights: ['TypeScript for type safety', 'React Query for data fetching', 'State management built-in']
    },
    {
      title: 'Fast Rendering',
      description: 'Optimized for quick page loads and smooth transitions.',
      highlights: ['Optimized bundle size', 'Efficient component rendering', 'Smart caching mechanisms']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Features</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover all the powerful features that make our application stand out.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="transition-all hover:shadow-lg">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
