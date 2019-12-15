import axios from 'axios';

export default function addSolution({
  repo,
  demo,
  comment,
  taskId,
}: AddNewSolution) {
  return axios.post('/api/solutions', {
    repo,
    demo,
    comment,
    taskId,
    phase: 'review',
  });
}

interface AddNewSolution extends AddSolutionFormData {
  taskId: string;
}

export interface AddSolutionFormData {
  repo: string;
  demo: string;
  comment: string;
}
