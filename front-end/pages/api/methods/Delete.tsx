export default async function deleteMethodAPI(
  endpoint: string,
  successCallback: (data: any) => void,
  errorCallback: (error: Error) => void
): Promise<void> {
  try {
    const response = await fetch(`http://localhost:4000${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      errorCallback(errorData.message);
    } else {
      const data = await response.json();
      successCallback(data);
    }
  } catch (error: any) {
    errorCallback(error);
  }
}
