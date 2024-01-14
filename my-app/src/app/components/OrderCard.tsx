"use client";
import { Order } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function OrderCard({ order }: { order: Order }) {
  const { crafterId, date, id, jobId, status, userId } = order;

  const [isReviewBoxOpen, setIsReviewBoxOpen] = useState(false);
  const [isFinishBoxOpen, setIsFinishBoxOpen] = useState(false);

  const cancelOrder = async () => {
    try {
      toast.loading("Cancelling order...");
      await axios.delete(`/api/user/orders?id=${id}`);
      toast.success("Order cancelled successfully");
    } catch (error) {
      toast.dismiss();
      toast.error("Error cancelling order");
      console.log(error);
    }
  };

  const finishOrder = async () => {
    try {
      const loadToastId = toast.loading("Marking order as completed...");
      await axios.patch(`/api/user/order?id=${id}`);
      toast.dismiss(loadToastId);
      toast.success("Order cancelled successfully");
    } catch (error) {
      toast.dismiss();
      toast.error("Error");
      console.log(error);
    }
  };

  const submitReview = async () => {
    try {
      toast.loading("Posting your review...");
      await axios.patch(`/api/crafter/review`);
      toast.success("Thanks for the feedback...");
      setIsFinishBoxOpen(true);
    } catch (error) {
      toast.dismiss();
      toast.error("Error posting review!");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-wrap justify-center space-y-5">
      <Card>
        <CardHeader>
          <CardTitle className="space-y-3">
            <div className="flex gap-x-4 items-center">
              <p className="text-lg">{id}</p>
              <p
                className={`text-sm ${
                  status === "pending" ? "text-gray-950" : "text-green-800"
                } ${
                  status === "pending" ? "bg-slate-300" : "bg-green-300"
                } opacity-70 px-3 py-1 rounded-full`}
              >
                {status}
              </p>
            </div>
            <div className="text-sm font-normal space-y-1">
              <p>Crafter Id {crafterId}</p>
              <p>Job Id {jobId}</p>
              <p>date</p>
            </div>
          </CardTitle>
          {/* <CardDescription className="">
            <p>sndmsdmn</p>
          
          </CardDescription> */}
        </CardHeader>
        <CardFooter className="gap-x-4">
          <Button className="rounded-full" onClick={cancelOrder}>
            Cancel
          </Button>
          {status === "pending" ? (
            <Button
              className="rounded-full"
              onClick={() => setIsReviewBoxOpen(true)}
            >
              Finish Order
            </Button>
          ) : null}
        </CardFooter>
      </Card>

      <Dialog
        open={isReviewBoxOpen}
        onOpenChange={() => setIsReviewBoxOpen(false)}
      >
        <DialogContent className="w-52 ">
          <DialogHeader className="space-y-4">
            <DialogTitle>Rate Crafter</DialogTitle>
            <DialogDescription>
              <Button onClick={submitReview}>Rate</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Dialog
        open={isFinishBoxOpen}
        onOpenChange={() => setIsFinishBoxOpen(false)}
      >
        <DialogContent className="w-56">
          <DialogHeader className="space-y-4">
            <DialogTitle>Finish Order</DialogTitle>
            <DialogDescription>
              <Button onClick={finishOrder}>Finish</Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}