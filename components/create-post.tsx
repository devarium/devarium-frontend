"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageIcon, FileIcon } from "lucide-react"
import { useState } from "react"

export function CreatePost() {
  const [content, setContent] = useState("")

  const handleSubmit = async () => {
    // TODO: Implement post creation API
    // await fetch('/api/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({ content }),
    // })
  }

  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <textarea
          placeholder="로그를 작성해보세요."
          className="w-full min-h-[100px] resize-none border-0 focus:ring-0"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <ImageIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <FileIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline">관련 프로덕트</Button>
            <Button onClick={handleSubmit}>로그 남기기</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

