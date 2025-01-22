import { Navigation } from "@/components/Navigation"
import { Post } from "@/components/Post"

async function getPosts() {
  return [
    {
      id: 1,
      author: {
        name: "김개발",
        role: "Frontend Developer",
        image: "https://static.vecteezy.com/system/resources/thumbnails/029/554/988/small_2x/surprised-cat-scottish-isolated-on-white-background-generative-ai-photo.jpg",
      },
      content:
        "새로운 프로젝트를 시작하려고 합니다. React와 TypeScript를 사용할 예정이며, 함께할 프론트엔드 개발자를 찾습니다!\n\n요구사항:\n- React, TypeScript 경험\n- 협업 툴 사용 경험\n- 주 3회 이상 미팅 참여 가능",
      timestamp: "약 2시간 전",
      likes: 5,
      comments: 2,
      stars: 3,
      shares: 1,
      tags: ["프론트엔드", "리액트", "타입스크립트"],
    },
    {
      id: 2,
      author: {
        name: "이코딩",
        role: "Backend Developer",
        image: "https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg",
      },
      content:
        "React와 TypeScript를 사용하는 프로젝트에 참여하고 싶습니다. 경력 2년차 개발자입니다. 새로운 도전을 찾고 있어요!",
      timestamp: "약 14시간 전",
      likes: 3,
      comments: 1,
      stars: 2,
      shares: 0,
      tags: ["구직", "프론트엔드"],
      image: "/placeholder.svg?height=300&width=500",
    },
  ]
}

export default async function Home() {
  const posts = await getPosts()

  return (
    (<div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-1 mb-8">
          <h1 className="text-3xl font-bold">최근 글</h1>
          <p className="text-muted-foreground">개발자들의 최신 소식을 확인하세요</p>
        </div>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </main>
    </div>)
  );
}

