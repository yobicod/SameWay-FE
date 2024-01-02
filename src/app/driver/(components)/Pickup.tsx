import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input';

export default function Pickup() {
  return (
    <div className='p-8 flex justify-center text-primary'>
      <div className='flex flex-col max-w-sm gap-4 items-center justify-center'>
        <div className='flex w-full justify-between px-2'>
          <div className='flex gap-1 items-center'>
            <Icon name='location_on' className='text-fieldOrange' />
            <p className='text-lg'>แอพอร์ตเรลลิ้ง</p>
          </div>
          <div className='flex gap-2'>
            <Icon name='phone' className='border rounded-full p-1' />
            <Icon name='close' className='border rounded-full p-1' />
          </div>
        </div>
        <div className='bg-fieldGray w-full flex gap-5 px-4 py-3 rounded-3xl items-center'>
          <p className='p-1 rounded-4xl px-2 py-1 border border-[#B5B7B9] text-secondary'>
            5กม.
          </p>
          <p className='font-light w-56'>
            รามคำแหง ตรงนั้นแหละ สวนหลวง สวนหลวง 10250
          </p>
        </div>
        <div className='w-full flex flex-col gap-2'>
          <p className='text-label font-bold'>รายละเอียดเพิ่มเติม</p>
          <Input value='' disabled />
        </div>
        <div className='flex w-full justify-between gap-2'>
          <Button className='bg-white border-2 border-secondary text-secondary'>
            ถึงแล้ว!
          </Button>
          <Button>รับผู้โดยสารแล้ว</Button>
        </div>
      </div>
    </div>
  );
}
