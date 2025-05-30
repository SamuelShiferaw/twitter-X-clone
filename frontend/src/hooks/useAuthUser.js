// src/hooks/useAuthUser.js
import { useQuery } from "@tanstack/react-query";

const useAuthUser = () => {
  return useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();
      if (data.error) return null;
      if (!res.ok) throw new Error(data.error);
      console.log("authUser is here: ", data);
      return data;
    },
    retry: false,
  });
};

export default useAuthUser;
