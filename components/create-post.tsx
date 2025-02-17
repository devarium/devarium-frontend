'use client';

import { Button } from '@/components/ui/button';
import { ImageIcon, FileIcon } from 'lucide-react';
import { PlusIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async () => {
    // TODO: Implement post creation API
    // await fetch('/api/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({ content }),
    // })
  };

  return (
    <div className="my-4 rounded-xl shadow-md">
      <form className="p-4" onSubmit={handleSubmit}>
        <input
          placeholder="제목을 작성해주세요."
          className="w-full py-2 border-0 outline-none text-lg text-nowrap"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="로그를 작성해보세요."
          className="w-full min-h-[100px] resize-none border-0 outline-none text-sm"
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
            <div className="relative">
              <div
                className={'flex items-center gap-2 px-3 py-2 rounded-lg shadow-md text-sm cursor-pointer hover:shadow-lg'}
                onClick={() => setIsOpen(!isOpen)}
              >
                <PlusIcon className="w-4 h-4 text-gray-500" />
                <span>관련 프로덕트</span>
                <ChevronDownIcon className="w-4 h-4 text-gray-500" />
              </div>
              {isOpen && (
                <ul className="absolute flex flex-col gap-2 mt-2 px-3 py-2 min-w-48 rounded-lg shadow-md text-sm text-gray-600 bg-white z-20">
                  <li className="hover:text-gray-900 cursor-pointer">프로덕트 1</li>
                  <li className="hover:text-gray-900 cursor-pointer">프로덕트 2</li>
                  <li className="hover:text-gray-900 cursor-pointer">프로덕트 3</li>
                </ul>
              )}
            </div>

            <div
              className={`px-3 py-2 rounded-lg shadow-md text-sm text-white ${
                !content.length ? 'bg-gray-200 !cursor-not-allowed' : 'bg-black hover:shadow-lg'
              }`}
            >
              로그 남기기
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
