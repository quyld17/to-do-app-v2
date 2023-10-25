export default async function postMethodAPI(
  credentials: Object,
  endpoint: string,
  successCallback: (data: any) => void,
  errorCallback: (error: Error) => void
): Promise<void> {
  try {
    const response = await fetch(`http://localhost:4000${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
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
