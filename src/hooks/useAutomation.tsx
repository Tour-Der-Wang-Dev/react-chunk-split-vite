
import { useState, useEffect } from 'react';

interface AutomationStatusProps {
  workflowName: string;
  repositoryOwner: string;
  repositoryName: string;
}

interface WorkflowRun {
  id: number;
  name: string;
  status: string;
  conclusion: string | null;
  created_at: string;
  updated_at: string;
  html_url: string;
}

export function useAutomation({ workflowName, repositoryOwner, repositoryName }: AutomationStatusProps) {
  const [latestRun, setLatestRun] = useState<WorkflowRun | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWorkflowStatus = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // GitHub API endpoint to get workflow runs
        const response = await fetch(
          `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/actions/workflows/${workflowName}/runs?per_page=1`
        );
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.workflow_runs && data.workflow_runs.length > 0) {
          setLatestRun(data.workflow_runs[0]);
        } else {
          setLatestRun(null);
        }
      } catch (err) {
        console.error('Error fetching workflow status:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkflowStatus();
    
    // Poll for updates every 30 seconds if actively watching
    const interval = setInterval(fetchWorkflowStatus, 30000);
    
    return () => clearInterval(interval);
  }, [workflowName, repositoryOwner, repositoryName]);

  return { latestRun, loading, error };
}
