import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageSquare, Heart, Share2, MoreVertical } from "lucide-react"

const MOCK_POSTS = [
  {
    id: 1,
    author: {
      name: "이재문",
      role: "Business Developer",
      avatar: "/placeholder.svg",
    },
    content:
      "광고수익화를 시작할 때 가장 먼저 생각할 것\n\n'광고 수익화를 시작하면서 어떤 지표를 봐야 할까요?' 많은 분들이 eCPM, Request, Impression 등의 성과지표에 집중하시는데요. 하지만 이런 지표들은 결과값일 뿐입니다. 정작 우리가 가장 먼저 생각해야 할 것 따로 있습니다. 광고...",
    timeAgo: "약 2시간 전",
    stats: {
      comments: 0,
      likes: 2,
      shares: 2,
    },
    relatedProduct: {
      name: "DISQUIET",
      description: "광고수익화를 시작할 때 가장 먼저...",
    },
  },
]

export function PostFeed() {
  return (
    <div className="space-y-6">
      {MOCK_POSTS.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex-row items-center space-x-4 p-4">
            <Avatar>
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center">
                <span className="font-semibold">{post.author.name}</span>
                <span className="mx-2 text-gray-500">·</span>
                <span className="text-gray-500">{post.author.role}</span>
                <span className="mx-2 text-gray-500">·</span>
                <span className="text-gray-500">{post.timeAgo}</span>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="whitespace-pre-line mb-4">{post.content}</p>
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {post.stats.comments}
                </Button>
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  {post.stats.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  {post.stats.shares}
                </Button>
              </div>
            </div>
            {post.relatedProduct && (
              <Card className="mt-4 bg-gray-50">
                <CardContent className="p-4">
                  <h3 className="font-semibold">{post.relatedProduct.name}</h3>
                  <p className="text-sm text-gray-500">{post.relatedProduct.description}</p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

