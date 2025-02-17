import { CreatePost } from '@/components/create-post';
import Filters from '@/components/filters';
import { Post } from '@/components/post';
import { Project } from '@/components/project';

const MOCK_POSTS = [
  {
    id: 1,
    author: {
      name: '이재문',
      role: 'Business Developer',
      avatar: '/placeholder.svg',
    },
    title: '제목입니다',
    content:
      "광고수익화를 시작할 때 가장 먼저 생각할 것\n\n'광고 수익화를 시작하면서 어떤 지표를 봐야 할까요?' 많은 분들이 eCPM, Request, Impression 등의 성과지표에 집중하시는데요. 하지만 이런 지표들은 결과값일 뿐입니다. 정작 우리가 가장 먼저 생각해야 할 것 따로 있습니다. 광고...",
    timeAgo: '약 2시간 전',
    stats: {
      comments: 0,
      likes: 2,
      shares: 2,
    },
    relatedProduct: {
      name: 'DISQUIET',
      description: '광고수익화를 시작할 때 가장 먼저...',
    },
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto">
      <Filters />
      <CreatePost />

      {/* 게시글 종류 구분 */}
      <div className="flex flex-col gap-8 pb-8">
        {MOCK_POSTS.map((post) => (
          <div className="flex flex-col gap-8">
            <Post post={post} />
            <Project post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
