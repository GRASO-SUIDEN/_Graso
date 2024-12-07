import { pinata } from "../../config";

export async function uploadFileToPinata(request: any) {
  try {
    const data = await request.formData();
    const file = data.get("file");
    const uploadData = await pinata.upload.file(file);
    return { status: 200, data: uploadData }; // Return the upload data
  } catch (e) {
    console.error(e);
    return { status: 500, error: "Internal Server Error" };
  }
}

export async function fetchFiles() {
  try {
    const response = await pinata.listFiles();
    return { status: 200, data: response[0] }; // Return the list of files
  } catch (e) {
    console.error(e);
    return { status: 500, error: "Internal Server Error" };
  }
}
