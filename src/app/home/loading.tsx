export default function HomePageLoading() {
  return (
    <div className='bg-gray-200 w-full h-screen flex items-center justify-center'>
      <div
        className='w-12 h-12 rounded-full animate-spin
                    border-x-8 border-dashed border-purple-500 border-t-transparent'
      ></div>
    </div>
  );
}
