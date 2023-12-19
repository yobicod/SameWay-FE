import axiosServer from '../lib/axiosServer'
export const checkUser = async (email: string) => {
  try {
    const { data } = await axiosServer.get<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/user/has-user-in-system/${email}`
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
