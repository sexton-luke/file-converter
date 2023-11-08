export type UploadFile = {
  id: string;
  name: string;
  from: string;
  to: string;
  status: string;
};

export enum UploadFileAction {
  Convert = "convert",
  Download = "download",
}
