const baseRoute = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_API_PORT}`;

export const convertRoute = `${baseRoute}/convert`;
export const deleteTempFilesRoute = `${baseRoute}/delete-temp-files`;
