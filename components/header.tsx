"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession, signIn } from "next-auth/react"
import { Plus } from "lucide-react"

export function Header() {
  const { data: session, status } = useSession()

  const navItems = [
    { label: "전체", href: "/" },
    { label: "프로덕트", href: "/products" },
    { label: "아티클", href: "/articles" },
    { label: "로그", href: "/logs" },
  ]

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl font-bold">
            Devarium
          </Link>
          <nav className="flex space-x-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-2 rounded-md hover:bg-gray-100">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {status === "loading" ? (
            <Button disabled>Loading...</Button>
          ) : session ? (
            <>
              <Button variant="ghost">인기</Button>
              <Button variant="ghost">최신</Button>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                새로그
              </Button>
            </>
          ) : (
            <Button onClick={() => signIn("google")}>Google로 시작하기</Button>
          )}
        </div>
      </div>
    </header>
  )
}

