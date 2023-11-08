import { UploadFile } from "~/types";
import UploadedFile from "./UploadedFile";

type UploadTableProps = {
  extensions: Record<string, string[]>;
  files: UploadFile[];
  setFiles: (array: UploadFile[]) => void;
};

export default function UploadTable({
  extensions,
  files,
  setFiles,
}: UploadTableProps) {
  return (
    <div className="mt-4 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  From
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  To
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {files.length > 0 &&
                files.map((file) => (
                  <UploadedFile
                    key={file.id}
                    extensions={extensions}
                    file={file}
                    files={files}
                    setFiles={setFiles}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
