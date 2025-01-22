import { Navigation } from "@/components/Navigation"
import { Post } from "@/components/Post"

// 이 함수는 실제로는 API에서 데이터를 가져와야 합니다.
async function getTeamPosts() {
  return [
    {
      id: 1,
      author: "박팀장",
      content: "웹 애플리케이션 개발 프로젝트입니다. 백엔드 개발자를 찾고 있습니다. Node.js, Express 경험자 우대!",
      timestamp: "2023-07-03",
      likes: 7,
      comments: 3,
    },
    {
      id: 2,
      author: "최기획",
      content: "모바일 앱 개발 팀원을 구합니다. React Native 경험이 있으신 분을 찾고 있어요.",
      timestamp: "2023-07-04",
      likes: 4,
      comments: 2,
    },
  ]
}

export default async function FindTeam() {
  const posts = await getTeamPosts()

  return (
    (<div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-8">팀원 찾기</h1>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </main>
    </div>)
  );
}

