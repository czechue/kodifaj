import axios, { AxiosResponse } from 'axios';
import { Solution } from '../../../lib/types/solution';
import { HOSTNAME } from '../../../lib/hostname.config';

export default function addSolution({
  repo,
  demo,
  comment,
  taskId,
}: AddNewSolution) {
  return axios.post<AddNewSolution, AxiosResponse<Solution[]>>(
    `${HOSTNAME}/api/solutions`,
    {
      repo,
      demo,
      comment,
      taskId,
      phase: 'review',
    },
  );
}

interface AddNewSolution extends AddSolutionFormData {
  taskId: string;
  phase?: string;
}

export interface AddSolutionFormData {
  repo: string;
  demo: string;
  comment: string;
}
