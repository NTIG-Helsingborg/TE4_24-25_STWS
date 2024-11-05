import { signIn, signOut } from "@/auth";
export function Signin() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signIn("google");
      }}
    >
      sign In
    </button>
  );
}
export function Signout() {
  return (
    <button
      onClick={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      sign Out
    </button>
  );
}
