import { useState } from "react";
import { useRouter } from "expo-router";

export const useLogin = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const router = useRouter();

  const handleLogin = (values: any) => {
    console.log(values);
    router.push("/Home");
  };

  const goToParameters = () => {
    router.push("/Configuration");
  };

  return {
    hidePassword,
    setHidePassword,
    handleLogin,
    goToParameters
  };
};