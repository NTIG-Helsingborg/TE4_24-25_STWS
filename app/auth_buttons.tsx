import { signIn, signOut } from "@/auth"
export function Signin() {
	return (
		<button
			onClick={async () => {
				"use server"
				await signIn("google")
			}}>
			signIn
		</button>
	)
}
export function Signout() {
	return (
		<button
			onClick={async () => {
				"use server"
				await signOut({ redirectTo: "/" })
			}}>
			signOut
		</button>
	)
}
