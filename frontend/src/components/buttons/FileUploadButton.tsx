"use client";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
import React, { useRef, ChangeEvent } from "react";
import { UploadFile, UploadFileAction } from "~/types";

type FileUploadButtonProps = {
  setFiles: (array: UploadFile[]) => void;
  extensions: Record<string, string[]>;
};

export default function FileUploadButton({
  extensions,
  setFiles,
}: FileUploadButtonProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (!files || files.length === 0) return;

    const selectedFiles: UploadFile[] = Array.from(files).map(
      ({ name }, index) => {
        const from = name?.split(".")?.pop() ?? "";
        const to = from ? extensions[from][0] : "";

        return {
          id: `${name}-${index}`,
          name,
          from,
          to,
          status: UploadFileAction.Convert,
        };
      }
    );
    setFiles(selectedFiles);
    // Clear file input by setting value to empty string
    event.target.value = "";
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleButtonClick}
        className="inline-flex items-center gap-x-2 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Upload Files
        <ArrowUpCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleInputChange}
        multiple
      />
    </div>
  );
}
