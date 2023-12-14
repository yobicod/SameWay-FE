import axios from 'axios'

export const checkUser = async (email: string) => {
  try {
    const { data } = await axios.get<boolean>(
      `${process.env.NEXT_PUBLIC_API_URL}/user/has-user-in-system/${email}`
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
