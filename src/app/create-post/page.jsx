"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreatePost() {
  const [content, setContent] = useState("")
  const [postType, setPostType] = useState("team")

  const handleSubmit = (e) => {
    e.preventDefault()
    // 여기서 API를 호출하여 포스트를 생성합니다.
    console.log("Submitting post:", { type: postType, content })
    // 제출 후 폼 초기화
    setContent("")
    setPostType("team")
  }

  return (
    (<div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-8">글 작성</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select value={postType} onValueChange={setPostType}>
            <SelectTrigger>
              <SelectValue placeholder="글 유형 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="team">팀원 찾기</SelectItem>
              <SelectItem value="join">프로젝트 참가</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요..."
            className="h-40" />
          <Button type="submit">글 작성</Button>
        </form>
      </main>
    </div>)
  );
}

