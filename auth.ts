import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	callbacks: {
		jwt({ token, trigger, session, account }) {
			if (trigger === "update") token.name = session.user.name
			if (account?.provider === "keycloak") {
				return { ...token, accessToken: account.access_token }
			}
			return token
		},
	},
})
