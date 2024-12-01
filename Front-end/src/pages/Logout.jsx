import Cookie from "js-cookie";
import axios from "axios";

export const action = async () => {
  console.log("Logging out");
  const token = Cookie.get("userToken");

  try {
    const res = await axios.patch(
      "/auth/log-out",
      {},
      {
        headers: {
          authorization: `power ${token}`,
        },
      }
    );
    console.log(res);

    return res.data; // This will be accessible in the fetcher.data
  } catch (error) {
    console.error("Logout error:", error);
    throw new Error("Failed to log out.");
  }
};
