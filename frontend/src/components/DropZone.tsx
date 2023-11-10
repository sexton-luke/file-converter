"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadFile } from "~/types";
import { ArrowDownOnSquareStackIcon } from "@heroicons/react/24/outline";

type DropZoneProps = {
  files: UploadFile[];
  setFiles: (array: UploadFile[]) => void;
  extensions: Record<string, string[]>;
};

export default function DropZone({
  files,
  setFiles,
  extensions,
}: DropZoneProps) {
  const onDrop = useCallback(
    (droppedFiles: File[]) => {
      const selectedFiles: UploadFile[] = droppedFiles.map((file, index) => {
        const from = file.name?.split(".")?.pop() ?? "";
        const to = from ? extensions[from][0] : "";

        return {
          id: `${file.name}-${index}`,
          file,
          name: file.name,
          from,
          to,
          status: "...",
        };
      });
      setFiles([...files, ...selectedFiles]);
    },
    [extensions, files, setFiles]
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
