"use client";
import UploadButton from "@/components/FileUpload";
import { Button } from "@radix-ui/themes";
import Input from "@/components/Input";
import { useSession } from "next-auth/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ReportForm() {
  const { data: userData } = useSession();

  const reportSchema = z.object({
    problemType: z
      .string()
      .min(5, { message: "Please enter complete information." }),
    description: z
      .string()
      .min(5, { message: "Please enter complete information." }),
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
      className="h-full flex flex-col justify-start items-center gap-4 mt-6 overflow-hidden"
    >
      <div className="text-label font-bold flex-col flex gap-1 w-80">
        <p>Please select a problem *</p>
        <Input
          placeholder="Select Problem"
          register={register("problemType")}
        />
        {errors.problemType && (
          <p className="text-red-500">{errors.problemType.message}</p>
        )}
      </div>
      <div className="text-label font-bold flex-col flex gap-1 w-80">
        <p>Description *</p>
        <textarea
          className="border rounded border-stroke px-4 py-2 text-secondary h-[240px]"
          {...register("description")}
        ></textarea>
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div className="text-label font-bold flex-col flex gap-1 w-80">
        <p>Attachment</p>
        <div className="flex justify-center items-center h-[166px] border-dotted border-2 rounded">
          <UploadButton></UploadButton>
        </div>
      </div>
      <div className="text-label font-bold flex-col flex gap-1 w-80">
        <Button type="submit" className="text-center">
          Done
        </Button>
      </div>
    </form>
  );
}
