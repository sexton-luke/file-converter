"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadFile } from "~/types";
import FileUploadButton from "./buttons/FileUploadButton";
import FileClearButton from "./buttons/FileClearButton";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";

type DropZoneProps = {
  setFiles: (array: UploadFile[]) => void;
  extensions: Record<string, string[]>;
};

export default function DropZone({ setFiles, extensions }: DropZoneProps) {
  const onDrop = useCallback(
    (files: File[]) => {
      console.log("DropZone Files:", files);

      const selectedFiles: UploadFile[] = files.map(({ name }, index) => {
        const from = name?.split(".")?.pop() ?? "";
        const to = from ? extensions[from][0] : "";

        return {
          id: `${name}-${index}`,
          name,
          from,
          to,
          status: "...",
        };
      });
      setFiles(selectedFiles);
    },
    [extensions, setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="px-3.5 py-4" {...getRootProps()}>
      <input {...getInputProps()} />
      <div className="sm:p-6 bg-slate-200 text-black rounded-md text-center hover:bg-green-200">
        <ArrowDownOnSquareStackIcon className="mx-auto mb-4 h-12 w-12 text-blue-500" />
        {isDragActive ? (
          <p className="p-2">Drop the files here ...</p>
        ) : (
          <p className="p-2">
            Drag and drop some files here... or click to select files.
          </p>
        )}
      </div>
    </div>
  );
}
