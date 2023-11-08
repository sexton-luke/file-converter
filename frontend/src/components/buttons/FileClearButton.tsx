"use client";
import { XCircleIcon } from "@heroicons/react/24/outline";
import React, { MouseEvent } from "react";
import { UploadFile } from "~/types";

type FileClearButtonProps = {
  setFiles: (array: UploadFile[]) => void;
};

export default function FileClearButton({ setFiles }: FileClearButtonProps) {
  const handleButtonClick = (event: MouseEvent) => {
    event.preventDefault;
    event.stopPropagation();
    setFiles([]);
  };

  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="inline-flex items-center gap-x-2 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Clear Files
      <XCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
    </button>
  );
}
