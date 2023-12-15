import NextAuth, { NextAuthOptions, getServerSession } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { updateDriver } from '../api-caller/update-user'
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next'
import { checkUser } from '../api-caller/check-user'
import { createUser } from '../api-caller/create-user'
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      console.log(account, profile)
      if (!profile?.email) {
        throw new Error('no profile')
      }
      const haveUser = await checkUser(profile.email)
      if (haveUser) {
        await updateDriver({
          email: profile.email,
          fullName: profile.name,
          role: 'user',
        })
      } else {
        await createUser({
          email: profile.email,
          fullName: profile.name || '',
          role: 'user',
        })
      }
      return true
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthOptions

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions)
}
export default NextAuth(authOptions)
