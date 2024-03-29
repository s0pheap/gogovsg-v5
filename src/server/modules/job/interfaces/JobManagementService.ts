import { JobItemType, JobType } from '../../../models/job'
import { JobStatusEnum } from '../../../../shared/util/jobs'

export interface JobItemCallbackStatus {
  isSuccess: boolean
  errorMessage?: string
}

export interface JobInformation {
  job: JobType
  jobItemUrls: string[]
}

export interface JobManagementService {
  createJob(userId: number): Promise<JobType>
  createJobItem: (properties: {
    params: JSON
    jobId: number
    jobItemId: string
  }) => Promise<JobItemType>
  updateJobItemStatus(
    jobItemId: string,
    status: JobItemCallbackStatus,
  ): Promise<JobItemType>
  computeJobStatus(jobItems: JobItemType[]): JobStatusEnum
  updateJobStatus(jobId: number): Promise<JobType>
  getJobInformation(jobId: number): Promise<JobInformation>
  getLatestJobForUser(userId: number): Promise<JobInformation>
  pollJobStatusUpdate(userId: number, jobId: number): Promise<JobInformation>
  sendJobCompletionEmail(jobId: number): Promise<void>
}
