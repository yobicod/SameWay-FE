import { useState } from 'react'
import {
  CaptionProps,
  DayPicker,
  DayPickerDefaultProps,
  useNavigation,
} from 'react-day-picker'
import * as Popover from '@radix-ui/react-popover'
import Icon from './Icon'
import { th } from 'date-fns/locale'

type Props = {
  onChange: (data: Date | undefined) => void
  selectedDate: Date | undefined
}

const MONTH = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม',
]

const classNames: DayPickerDefaultProps['classNames'] = {
  cell: 'w-10 p-1',
  day_selected: 'font-medium text-white bg-secondary',
  day: ' rounded-full w-8 h-8 hover:bg-[#A4BFB7]',
  day_today: 'font-medium text-secondary',
}

export default function DatePicker({ onChange, selectedDate }: Props) {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const CustomCaption = (props: CaptionProps) => {
    const { goToMonth, nextMonth, previousMonth } = useNavigation()
    return (
      <div className='flex justify-between items-center p-2 bg-secondary rounded-t-lg text-white mb-2'>
        <span
          onClick={() => previousMonth && goToMonth(previousMonth)}
          className='flex items-center'>
          <Icon name='chevron_left' className='cursor-pointer' />
        </span>
        <div>
          {selectedDate ? (
            <div className='flex gap-2'>
              <span>{MONTH[props.displayMonth.getMonth()]}</span>
              <span>{props.displayMonth.getFullYear()}</span>
            </div>
          ) : (
            <span>กรุณาเลือกวันที่</span>
          )}
        </div>
        <span
          onClick={() => nextMonth && goToMonth(nextMonth)}
          className='flex items-center'>
          <Icon name='chevron_right' className='cursor-pointer' />
        </span>
      </div>
    )
  }

  const DatePickerComponent = () => {
    return (
      <div className='flex justify-center border-stroke border rounded-lg bg-white'>
        <DayPicker
          classNames={classNames}
          mode='single'
          selected={selectedDate}
          onSelect={onChange}
          locale={th}
          components={{ Caption: CustomCaption }}
        />
      </div>
    )
  }
  return (
    <Popover.Root open={showDatePicker} onOpenChange={setShowDatePicker}>
      <Popover.Trigger asChild>
        <div
          className='flex justify-between border py-2 px-4 rounded border-stroke text-secondary'
          onClick={() => setShowDatePicker(!showDatePicker)}>
          {selectedDate ? (
            <span>
              {selectedDate.getDate()}/{selectedDate.getMonth() + 1}/
              {selectedDate.getFullYear()}
            </span>
          ) : (
            <span>กรุณาเลือกวันที่</span>
          )}
          <Icon name='calendar_month' iconStyle='rounded' />
        </div>
      </Popover.Trigger>
      <Popover.Content className='z-50' sideOffset={10}>
        <DatePickerComponent />
      </Popover.Content>
    </Popover.Root>
  )
}
