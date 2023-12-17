import Button from '@/components/Button'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import Image from 'next/image'

export default function DriverDetail() {
  return (
    <div className='flex flex-col items-center'>
      <div className='border-b w-full py-3 flex items-center justify-center'>
        <p className='rounded-full border text-2xl px-6 py-1 font-jura font-bold text-secondary'>
          5.4 km
        </p>
      </div>
      <div className='px-9 py-4 flex w-full max-w-sm text-gray text-primary flex-col gap-4'>
        <div className='rounded-4xl flex h-[296px] justify-center gap-2 items-center bg-fieldGray p-5'>
          <div className='flex grow h-full w-1/12 flex-col items-center justify-center'>
            <div className='rounded-full bg-fieldOrange w-2 h-2' />
            <div className='border-l h-2/3 border-dashed border-secondary' />
            <div className='rounded-full bg-secondary w-2 h-2' />
          </div>
          <div className='flex flex-col gap-3 '>
            <div className='bg-white rounded-[20px] '>
              <div className='border-b-2 border-fieldGray flex justify-center py-3 px-4 gap-1 items-center '>
                <Icon name='location_on' className='text-fieldOrange' />
                <p className='font-lexendExa '>Airport rail link</p>
              </div>
              <div className='py-3 px-6 flex justify-center'>
                <p className='font-lexendDeca font-light'>
                  Ramkhamhaeng, suanluang, suanluang, 10250
                </p>
              </div>
            </div>
            <div className='bg-white rounded-[20px] '>
              <div className='border-b-2 border-fieldGray flex justify-center py-3 px-4 gap-1 items-center '>
                <Icon name='location_on' className='text-fieldOrange' />
                <p className='font-lexendExa '>Airport rail link</p>
              </div>
              <div className='py-3 px-6 flex justify-center'>
                <p className='font-lexendDeca font-light'>
                  Ramkhamhaeng, suanluang, suanluang, 10250
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='font-jura  flex flex-col gap-2'>
          <p className='text-label'>Notes from passenger</p>
          <Input value='fja;kdjfldjflasjd;fsadfsafsadfsafsf' disabled />
        </div>
        <div className='flex justify-between gap-2'>
          <Button className='bg-white border-2 border-secondary text-secondary'>
            CANCEL
          </Button>
          <Button>ACCEPT JOB</Button>
        </div>
      </div>
    </div>
  )
}
