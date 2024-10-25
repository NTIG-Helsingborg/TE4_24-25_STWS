import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"
import Client_test from "./client_test"
export default async function ClientPage() {
	const session = await auth()
	if (session?.user) {
		// TODO: Look into https://react.dev/reference/react/experimental_taintObjectReference
		// filter out sensitive data before passing to client.
		session.user = {
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
		}
	}

	return (
		<>
			<SessionProvider session={session}>
				<Client_test />
			</SessionProvider>
		</>
	)
}
