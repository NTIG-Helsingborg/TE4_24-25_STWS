import { Signin, Signout } from "../auth_buttons";
import { auth } from "@/auth";
export default async function btns() {
  const session = await auth();
  if (!session?.user) return <Signin />;
  return <Signout />;
}
