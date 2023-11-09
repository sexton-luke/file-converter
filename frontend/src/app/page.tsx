"use client";
import { useState } from "react";
import DropZone from "~/components/DropZone";
import FileClearButton from "~/components/buttons/FileClearButton";
import UploadTable from "~/components/UploadTable";
import { UploadFile } from "~/types";

const extensionsLookup: Record<string, string[]> = {
  avi: ["mp4"],
  mp4: ["avi"],
  jpg: ["png"],
  pdf: ["docx"],
  png: ["jpg"],
};

export default function Home() {
  const [files, setFiles] = useState<UploadFile[]>([]);

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-black">
      <div className="divide-y divide-gray-200 overflow-hidden rounded-l shadow">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl">File Converter</h1>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-xl">
            Instructions to convert files from one to another:
          </h2>
          <ol className="list-decimal indent-4 list-inside mt-2">
            <li>
              Drag and drop files or click the upload button to select files.
            </li>
            <li>
              Select an applicable type to convert {""}
              <span className="font-bold">to</span>.
            </li>
            <li>
              Click the <span className="font-bold">Convert</span> button to
              convert the file.
            </li>
            <li>
              Click the <span className="font-bold">Download</span> button once
              the file has been converted.
            </li>
          </ol>
        </div>
        <DropZone extensions={extensionsLookup} setFiles={setFiles} />
      </div>
      <div className="px-4 py-5 sm:p-6 div divide-y divide-gray-200 overflow-hidden rounded-l shadow">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Uploaded Files:</h2>
          <FileClearButton
            isDisabled={files.length === 0}
            setFiles={setFiles}
          />
        </div>
        <UploadTable
          extensions={extensionsLookup}
          files={files}
          setFiles={setFiles}
        />
      </div>
    </div>
  );
}
