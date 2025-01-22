import { Navigation } from "@/components/Navigation"
import { Post } from "@/components/Post"

// 이 함수는 실제로는 API에서 데이터를 가져와야 합니다.
async function getJoinPosts() {
  return [
    {
      id: 1,
      author: "정주니어",
      content: "주니어 개발자입니다. React, Next.js 경험 있습니다. 열정적으로 배우며 성장하고 싶습니다!",
      timestamp: "2023-07-05",
      likes: 6,
      comments: 2,
    },
    {
      id: 2,
      author: "강디자인",
      content: "UI/UX 디자이너입니다. Figma 능숙합니다. 개발자와 협업하며 멋진 프로덕트를 만들고 싶어요.",
      timestamp: "2023-07-06",
      likes: 5,
      comments: 1,
    },
  ]
}

export default async function JoinProject() {
  const posts = await getJoinPosts()

  return (
    (<div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-8">프로젝트 참가</h1>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </main>
    </div>)
  );
}

