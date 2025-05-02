
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 text-4xl font-bold">About This Project</h1>
      <p className="mb-8 text-lg">
        This project demonstrates performance optimizations with Vite, React, and TypeScript:
      </p>
      <ul className="mb-8 list-disc pl-5 text-lg">
        <li>Code splitting with lazy loading</li>
        <li>Manual chunk optimization</li>
        <li>Efficient styling with Tailwind CSS</li>
        <li>React StrictMode for early bug detection</li>
      </ul>
      <Button asChild>
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
};

export default About;
