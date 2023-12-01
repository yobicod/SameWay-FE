import SignInButton from '@/components/SignInButton'

export default async function Login() {
  return (
    <div className='flex h-screen justify-center items-center flex-col'>
      <p>Sign In</p>
      <div>
        <SignInButton />
      </div>
    </div>
  )
}
