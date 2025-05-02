
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button>New Project</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
            <CardDescription>Your active projects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
          </CardContent>
          <CardFooter>
            <Badge variant="outline" className="bg-blue-50">+2 this month</Badge>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
            <CardDescription>Your pending tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
          </CardContent>
          <CardFooter>
            <Badge variant="outline" className="bg-yellow-50">5 urgent</Badge>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed</CardTitle>
            <CardDescription>Tasks completed this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
          </CardContent>
          <CardFooter>
            <Badge variant="outline" className="bg-green-50">+8 from last month</Badge>
          </CardFooter>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest project updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between border-b pb-3">
                <div>
                  <h4 className="font-medium">Project Update {item}</h4>
                  <p className="text-sm text-gray-500">New features added to dashboard</p>
                </div>
                <span className="text-xs text-gray-400">{item} day{item !== 1 ? 's' : ''} ago</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">View All Activity</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Dashboard;
