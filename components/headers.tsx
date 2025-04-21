export const getAuthHeaders = (
  isJsonRequest = false,
): Record<string, string> => {
  const id = "01JJJWM9FWPAFZT37386QYR5C4";

  if (!id) {
    return {};
  }

  const headers: Record<string, string> = {
    "User-ID": id,
  };

  if (isJsonRequest) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
};
