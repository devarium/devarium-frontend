import Filter from './ui/filter';

export default function Filters() {
  return (
    <div className="flex justify-between p-1 border rounded-xl">
      <Filter items={['전체', '프로덕트', '아티클', '로그']} />
      <Filter items={['인기', '최신']} />
    </div>
  );
}
