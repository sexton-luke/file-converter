const baseRoute = `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.API_PORT}`;

export const convertRoute = `${baseRoute}/convert`;
export const deleteTempFilesRoute = `${baseRoute}/delete-temp-files`;
