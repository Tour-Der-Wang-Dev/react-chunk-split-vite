
import React, { useState } from 'react';
import { useAppStore } from '@/store/appStore';
import { useAutomation } from '@/hooks/useAutomation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2, GitPullRequest, Clock, RefreshCw } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const DEFAULT_OWNER = 'your-username';
const DEFAULT_REPO = 'your-repository';

const Automation: React.FC = () => {
  const [repoOwner, setRepoOwner] = useState(DEFAULT_OWNER);
  const [repoName, setRepoName] = useState(DEFAULT_REPO);
  const [activeWorkflow, setActiveWorkflow] = useState('ci-cd.yml');
  const { user } = useAppStore();

  const { latestRun, loading, error } = useAutomation({
    workflowName: activeWorkflow,
    repositoryOwner: repoOwner,
    repositoryName: repoName,
  });

  const handleRefresh = () => {
    toast({
      title: "Refreshing workflow status",
      description: "Fetching the latest status from GitHub",
    });
    // The hook will automatically refetch on the next interval,
    // but this provides immediate feedback to the user
  };

  const getStatusColor = (status: string, conclusion: string | null) => {
    if (status === 'completed') {
      if (conclusion === 'success') return 'bg-green-500';
      if (conclusion === 'failure') return 'bg-red-500';
      return 'bg-yellow-500';
    }
    return 'bg-blue-500';
  };

  const getStatusText = (status: string, conclusion: string | null) => {
    if (status === 'completed') {
      if (conclusion === 'success') return 'Success';
      if (conclusion === 'failure') return 'Failed';
      return conclusion || 'Unknown';
    }
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Automation Dashboard</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>GitHub Repository Settings</CardTitle>
          <CardDescription>
            Configure the GitHub repository to monitor workflows
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="owner" className="text-sm font-medium">Repository Owner</label>
              <Input 
                id="owner"
                value={repoOwner} 
                onChange={(e) => setRepoOwner(e.target.value)}
                placeholder="GitHub username or organization"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="repo" className="text-sm font-medium">Repository Name</label>
              <Input 
                id="repo"
                value={repoName} 
                onChange={(e) => setRepoName(e.target.value)}
                placeholder="Repository name" 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="ci-cd" className="mb-8">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
          <TabsTrigger value="ci-cd" onClick={() => setActiveWorkflow('ci-cd.yml')}>CI/CD</TabsTrigger>
          <TabsTrigger value="codeql" onClick={() => setActiveWorkflow('codeql-analysis.yml')}>CodeQL</TabsTrigger>
          <TabsTrigger value="dependabot" onClick={() => setActiveWorkflow('auto-merge-dependabot.yml')}>Dependabot</TabsTrigger>
          <TabsTrigger value="synthetics" onClick={() => setActiveWorkflow('datadog-synthetics.yml')}>Synthetics</TabsTrigger>
          <TabsTrigger value="release" onClick={() => setActiveWorkflow('release.yml')}>Release</TabsTrigger>
        </TabsList>
      
        <TabsContent value="ci-cd" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                <span>CI/CD Pipeline</span>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleRefresh}
                  disabled={loading}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              </CardTitle>
              <CardDescription>
                Build, test, and deploy your application
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error fetching workflow status</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              {loading && !latestRun && !error && (
                <div className="flex justify-center items-center py-8">
                  <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              )}
              
              {latestRun && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(latestRun.status, latestRun.conclusion)}`}></div>
                      <span className="font-medium">{getStatusText(latestRun.status, latestRun.conclusion)}</span>
                    </div>
                    <Badge variant="outline">Run #{latestRun.id}</Badge>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Started</p>
                      <p className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        {new Date(latestRun.created_at).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Last Updated</p>
                      <p className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        {new Date(latestRun.updated_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter>
              {latestRun && (
                <Button variant="outline" onClick={() => window.open(latestRun.html_url, '_blank')}>
                  <GitPullRequest className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Content for other tabs would follow the same pattern */}
        <TabsContent value="codeql">
          <Card>
            <CardHeader>
              <CardTitle>CodeQL Analysis</CardTitle>
              <CardDescription>
                Security analysis to find vulnerabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Select the CodeQL tab to view analysis results</AlertTitle>
                <AlertDescription>
                  This workflow scans your code for security vulnerabilities using GitHub's CodeQL engine
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Similar structure for other tabs */}
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Automation Guide</CardTitle>
          <CardDescription>
            How to use GitHub Actions for automation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>GitHub Actions workflows are stored in <code className="bg-muted px-1 py-0.5 rounded">.github/workflows</code> directory.</p>
            
            <div>
              <h3 className="font-medium">Available Workflows:</h3>
              <ul className="list-disc pl-5 mt-2">
                <li><strong>CI/CD Pipeline</strong> - Builds and tests your application</li>
                <li><strong>CodeQL Analysis</strong> - Scans code for security vulnerabilities</li>
                <li><strong>Dependabot Auto-merge</strong> - Automatically merges dependency updates</li>
                <li><strong>Datadog Synthetics</strong> - Runs end-to-end tests</li>
                <li><strong>Release</strong> - Creates releases when you tag a new version</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Automation;
