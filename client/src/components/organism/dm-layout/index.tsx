import DmListItem from '../../molecules/dm-list-item/dm-list-item';
import DmListHeader from '../../molecules/dm-list-header/dm-list-header';

export default function DmLayout() {
  return (
    <div className=''>
      <DmListHeader />

      <div className=''>
        <DmListItem id='adc1' name={"Aditya Raj1"} active={false} />
        <DmListItem id='adc2' name={"Aditya Raj2"} active={true} />
        <DmListItem id='adc3' name={"Aditya Raj3"} active={true} />
        <DmListItem id='adc4' name={"Aditya Raj4"} active={false} />
        <DmListItem id='adc5' name={"Aditya Raj5"} active={true} />
      </div>
    </div>
  )
}
