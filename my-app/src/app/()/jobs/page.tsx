import DisplayJobs from "@/app/components/DisplayJobs";
import { JobCard } from "@/app/components/JobCard";
import { Job } from "@/lib/types";
import { SignIn, auth } from "@clerk/nextjs";
import axios from "axios";

export const revalidate = 0;

export default async function page() {
  const jobs: Job[] = (await axios.get(`${process.env.PORT_URL}/api/user/jobs`))
    .data;

  return (
    <div className="pt-5 px-20">
      <DisplayJobs jobsData={jobs} />
    </div>
  );
}
