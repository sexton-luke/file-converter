import axios from "axios";
import { UploadFile } from "~/types";
import FileConvertButton from "./buttons/FileConvertButton";
import SelectElement from "./SelectElement";
import { convertRoute, deleteTempFilesRoute } from "~/routes";

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
  const { id, name, file: contents, from, to } = file;
  const options = extensions[from];

  const handleSelectionChange = (option: string) => {
    const updatedFile = { ...file, to: option };
    const updatedFiles = [...files];
    const index = updatedFiles.findIndex((file) => file.id === id);
    updatedFiles[index] = updatedFile;
    setFiles(updatedFiles);
  };

  const onConvertClick = async () => {
    try {
      const formData = new FormData();
      formData.append("file", contents);
      formData.append("from_format", from);
      formData.append("to_format", to);
      const response = await axios.post(convertRoute, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      });
      const contentType = response.headers["content-type"];

      const blob = new Blob([response.data], { type: contentType });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      const rawName = name.split(".")[0];
      a.href = url;
      a.download = `${rawName}.${to}`;
      document.body.appendChild(a);
      a.click();
      // Clean up the temporary URL and anchor element
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      // Clear files from server
      const contentDisposition = response.headers["content-disposition"];
      const filename = contentDisposition.split("=")[1];
      const id = filename.split(".")[0];
      console.log("filename", id);
      axios.delete(`${deleteTempFilesRoute}/${id}`);
    } catch (error) {
      console.error("Error converting file..", error);
    }
  };

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
        <FileConvertButton onConvertClick={onConvertClick} />
      </td>
    </tr>
  );
}
