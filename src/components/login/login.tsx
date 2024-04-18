import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

export function Login() {
  const { data: session } = useSession();
  return session ? (
    <Button
      className="text-black hover:bg-gray-100 h-full md:mx-2 md:px-4 rounded-none"
      onClick={() => signOut()}
    >
      Logout
    </Button>
  ) : (
    <Button
      className="text-black hover:bg-gray-100 h-full md:mx-2 md:px-4 rounded-none"
      onClick={() => signIn()}
    >
      Login
    </Button>
  );
}
