import { JobCard, ProposalExtend } from "@/app/components/JobCard";
import { verifyCrafter, verifyUser } from "@/app/server/server";
import { Skeleton } from "@/components/ui/skeleton";
import { Job, Proposal } from "@/lib/types";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, Phone } from "lucide-react";
import UserJobCard from "@/app/components/UserJobCard";

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const page = async () => {
  const { userId } = auth();
  const jobs: Job[] = (await axios.get(`${process.env.PORT_URL}/api/user/jobs`))
    .data;

  // fiter jobs based on user id
  const userJobs: Job[] = jobs.filter((job) => job.userId === userId);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-14 mt-4">
      {userJobs.length > 0 ? (
        userJobs.map((job) => (
          <UserJobCard key={job.id} job={job} />
          // <Card key={job.id} className="flex flex-col">
          //   <CardHeader>
          //     <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
          //     <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          //       <MapPin className="w-4 h-4" />
          //       <span>{job.location}</span>
          //     </div>
          //   </CardHeader>
          //   <CardContent className="flex-grow">
          //     <p className="text-sm text-muted-foreground mb-4">{job.desc}</p>
          //     <div className="flex flex-wrap gap-2">
          //       {/* <Badge variant="secondary" className="flex items-center"> */}
          //       {/* <Calendar className="w-3 h-3 mr-1" /> */}
          //       {/* {job.date.toDateString()} */}
          //       {/* </Badge> */}
          //       {job.pay && (
          //         <Badge variant="secondary" className="flex items-center">
          //           <p className=" mr-1">Rs</p>
          //           {job.pay}
          //         </Badge>
          //       )}
          //     </div>
          //   </CardContent>
          //   <CardFooter className="flex justify-between items-center">
          //     <div className="flex items-center text-sm text-muted-foreground">
          //       <Phone className="w-4 h-4 mr-2" />
          //       <span>{job.contact}</span>
          //     </div>
          //     <Button variant="outline" onClick={() => deleteJob(job.id)}>
          //       Delete
          //     </Button>
          //   </CardFooter>
          // </Card>
        ))
      ) : (
        <p className="text-2xl font-medium text-slate-700 text-center">
          No jobs posted yet
        </p>
      )}
    </div>
  );
};

export default page;
