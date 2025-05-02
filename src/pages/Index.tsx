
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const features = [
    "Modern React with TypeScript",
    "Performance optimizations",
    "Component-based architecture",
    "Responsive design",
    "Accessible UI components",
    "Dark mode support"
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Badge className="mb-4">New Release v1.0</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Build Modern Web Applications with Ease
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A powerful React application template with performance optimizations, 
                modern UI components, and developer-friendly features.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link to="/dashboard">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 shadow-xl">
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
                  <pre className="text-sm overflow-x-auto">
                    <code className="language-jsx">
{`import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="container mx-auto">
      <h1>Welcome to ReactApp!</h1>
      <Button>Get Started</Button>
    </div>
  );
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <p className="text-lg text-gray-600 mt-2">Everything you need to build modern web applications</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="flex items-start p-6">
                  <div className="mr-4 bg-primary/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Jump right in and explore our product. Experience the power of a modern React application.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
