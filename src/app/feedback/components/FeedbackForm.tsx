"use client";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";

export default function FeedbackForm() {
  const { data: userData } = useSession();

  const reportSchema = z.object({
    problemType: z
      .string()
      .min(5, { message: "Please enter complete information." }),
    description: z.string(),
  });

  type ReportData = z.infer<typeof reportSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReportData>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      problemType: "",
      description: "",
    },
  });

  const submitForm = (data: ReportData) => {
    console.log("Form data:", data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-center gap-4 mt-6"
    >
      <div className="font-bold flex flex-col  justify-center items-center  w-80  ">
        <p
          className="text-center font-jura text-secondary font-bold
        "
        >
          Your feedback will imporve our delivery experience.
        </p>
        <p className="mt-4">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
      </div>

      <div className="text-label font-bold flex-col flex gap-1 w-80">
        <p>Description </p>
        <textarea
          className="border rounded border-stroke px-4 py-2 text-secondary h-[124px]"
          {...register("description")}
        ></textarea>
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="text-label font-bold flex-col flex gap-1 w-80 mt-4">
        <Button type="submit" className="text-center">
          Done
        </Button>
      </div>
    </form>
  );
}
