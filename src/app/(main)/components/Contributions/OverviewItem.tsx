import Card from '@/components/elements/Card';

interface OverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

const OverviewItem = ({ label, value, unit = '' }: OverviewItemProps) => (
  <Card className='flex flex-col self-center rounded-xl  py-3 px-4 border border-neutral-900'>
    <span className='text-sm text-neutral-400'>{label}</span>
    <div className='flex items-center gap-1'>
      <div className='text-xl lg:text-2xl font-medium text-green-600'>{value}</div>
      {unit && <span className='text-sm text-neutral-400'> {unit}</span>}
    </div>
  </Card>
);

export default OverviewItem;