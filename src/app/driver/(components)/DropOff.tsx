import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Input from '@/components/Input';

export default function DropOff() {
  return (
    <div className='p-8 flex justify-center text-primary'>
      <div className='flex flex-col max-w-sm gap-4 items-center justify-center'>
        <div className='flex w-full justify-between px-2'>
          <div className='flex gap-1 items-center'>
            <Icon name='location_on' className='text-secondary' />
            <p className='text-lg'>ยูเนี่ยนมอลล์</p>
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
          <p className='text-label'>รายละเอียดเพิ่มเติม</p>
          <Input value='' disabled />
        </div>
        <div className='flex w-full justify-between gap-2'>
          <Button>ส่งผู้โดยสารแล้ว</Button>
        </div>
      </div>
    </div>
  );
}
