"use client";

import React, { use } from "react";
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
import { Job } from "@/lib/types";
import axios from "axios";
import { useRouter } from "next/navigation";

const deleteJob = async (jobId: string) => {
  // call api to delete job
  try {
    toast.loading("Deleting job...");
    await axios.delete(`/api/user/job?id=${jobId}`);
    toast.success("Job deleted successfully");
    toast.dismiss();
  } catch (error) {
    console.log(error);
    toast.error("Error deleting job");
  }
};

const UserJobCard = ({ job }: { job: Job }) => {
  const router = useRouter();
  return (
    <Card key={job.id} className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground mb-4">{job.desc}</p>
        <div className="flex flex-wrap gap-2">
          {/* <Badge variant="secondary" className="flex items-center"> */}
          {/* <Calendar className="w-3 h-3 mr-1" /> */}
          {/* {job.date.toDateString()} */}
          {/* </Badge> */}
          {job.pay && (
            <Badge variant="secondary" className="flex items-center">
              <p className=" mr-1">Rs</p>
              {job.pay}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center text-sm text-muted-foreground">
          <Phone className="w-4 h-4 mr-2" />
          <span>{job.contact}</span>
        </div>
        <Button
          variant="outline"
          onClick={async () => {
            try {
              toast.loading("Deleting job...");
              await axios.delete(`/api/user/job?id=${job.id}`);
              toast.success("Job deleted successfully");
              toast.dismiss();
              router.refresh();
            } catch (error) {
              console.log(error);
              toast.error("Error deleting job");
            }
          }}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserJobCard;
