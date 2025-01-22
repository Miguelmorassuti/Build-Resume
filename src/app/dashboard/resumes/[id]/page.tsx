import { ResumePage } from "@/components/pages/dashboard/resume";

type DashboardResumePageProps = {
  params: { id: string };
};

export default async function DashboardResumePage({
  params,
}: DashboardResumePageProps) {
  const ResumeId = params.id;

  return <ResumePage />;
}
