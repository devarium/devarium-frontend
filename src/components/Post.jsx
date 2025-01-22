import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Heart, Star, Share2, Bookmark } from "lucide-react"
import Image from "next/image"

export function Post({
  author,
  content,
  timestamp,
  likes,
  comments,
  stars,
  shares,
  tags,
  image
}) {
  return (
    (<Card className="mb-4 border-0 shadow-none">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src={author.image || `https://api.dicebear.com/6.x/initials/svg?seed=${author.name}`} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <span className="font-semibold">{author.name}</span>
              {author.role && <span className="text-sm text-muted-foreground">{author.role}</span>}
              <span className="text-sm text-muted-foreground">· {timestamp}</span>
            </div>
            <p className="mt-2 text-base whitespace-pre-wrap">{content}</p>
            {image && (
              <div className="mt-3 relative rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt="Post image"
                  width={500}
                  height={300}
                  className="object-cover" />
              </div>
            )}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}
              </div>
            )}
            <div className="flex items-center space-x-6 mt-4 text-muted-foreground">
              <button
                className="flex items-center space-x-1 hover:text-foreground transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">{comments}</span>
              </button>
              <button
                className="flex items-center space-x-1 hover:text-foreground transition-colors">
                <Heart className="w-4 h-4" />
                <span className="text-sm">{likes}</span>
              </button>
              <button
                className="flex items-center space-x-1 hover:text-foreground transition-colors">
                <Star className="w-4 h-4" />
                <span className="text-sm">{stars}</span>
              </button>
              <button
                className="flex items-center space-x-1 hover:text-foreground transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">{shares}</span>
              </button>
              <button
                className="flex items-center space-x-1 hover:text-foreground transition-colors ml-auto">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>)
  );
}

