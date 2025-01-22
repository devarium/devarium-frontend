import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PenSquare, Users, UserPlus } from "lucide-react"

export function Navigation() {
  return (
    (<nav
      className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div
        className="container mx-auto px-4 h-14 flex items-center justify-between max-w-2xl">
        <Link href="/" className="text-xl font-bold">
          Devarium
        </Link>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/find-team">
              <Users className="w-4 h-4 mr-2" />
              팀원 찾기
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/join-project">
              <UserPlus className="w-4 h-4 mr-2" />
              프로젝트 참가
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/create-post">
              <PenSquare className="w-4 h-4 mr-2" />
              글쓰기
            </Link>
          </Button>
        </div>
      </div>
    </nav>)
  );
}

