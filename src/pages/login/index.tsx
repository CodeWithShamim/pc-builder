import RootLayout from "@/components/layouts/RootLayout";
import { Button } from "antd";
import React, { ReactElement } from "react";
import { signIn } from "next-auth/react";
import { GithubFilled, GoogleCircleFilled } from "@ant-design/icons";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const { callbackUrl } = router.query;

  return (
    <div className="flex flex-col justify-center w-full md:w-52 items-center mx-auto gap-4 pt-10">
      <div className="flex items-center gap-2 justify-center ">
        <GithubFilled className="text-xl md:text-2xl lg:text-3xl pt-1" />
        <Button
          onClick={() =>
            signIn("github", {
              callbackUrl:
                (callbackUrl as string) || (process.env.NEXTAUTH_URL as string),
            })
          }
          type="primary"
        >
          Sign in with Github
        </Button>
      </div>
      <div className="flex items-center gap-2 justify-center ">
        <GoogleCircleFilled className="text-xl md:text-2xl lg:text-3xl pt-1 text-yellow-700" />
        <Button
          onClick={() =>
            signIn("google", {
              callbackUrl:
                (callbackUrl as string) || (process.env.NEXTAUTH_URL as string),
            })
          }
          type="primary"
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};

export default Login;
