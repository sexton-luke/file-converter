"use client";
import { UploadFile, UploadFileAction } from "~/types";
import FileConvertButton from "./buttons/FileConvertButton";
import FileDownloadButton from "./buttons/FileDownloadButton";
import SelectElement from "./SelectElement";
import { useState } from "react";

type UploadedFileProps = {
  extensions: Record<string, string[]>;
  file: UploadFile;
  files: UploadFile[];
  setFiles: (array: UploadFile[]) => void;
};

export default function UploadedFile({
  extensions,
  file,
  files,
  setFiles,
}: UploadedFileProps) {
  const [downloadFileUuid, setDownloadFileUuid] = useState<string>("");
  const { id, name, from, to, status } = file;
  const options = extensions[from];

  const handleSelectionChange = (option: string) => {
    const updatedFile = { ...file, to: option };
    const updatedFiles = [...files];
    const index = updatedFiles.findIndex((file) => file.id === id);
    updatedFiles[index] = updatedFile;
    setFiles(updatedFiles);
  };

  const onConvertClick = () => {
    console.log("converting file..");
    /**
     * TODO: Send file to API to be converted and stored temporaily on the server.
     * Request returns a uuid to be used to download the file.
     */
  };

  const action =
    status === UploadFileAction.Convert ? (
      <FileConvertButton onConvertClick={onConvertClick} />
    ) : (
      <FileDownloadButton id={downloadFileUuid} />
    );
  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
        {name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">{from}</td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
        <SelectElement
          options={options}
          onSelectionChange={handleSelectionChange}
        />
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-white">
        {action}
      </td>
    </tr>
  );
}
