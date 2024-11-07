"use client"
import { useSession as UseSession } from "next-auth/react"
export default function name() {
	const { data: session } = UseSession()
	return <p style={{ whiteSpace: "pre" }}>{JSON.stringify(session, null, 4)}</p>
}
