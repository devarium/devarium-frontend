import { Button } from '@/components/ui/button';
import { MessageSquare, Heart, Share2, MoreVertical } from 'lucide-react';
import Carousel from './ui/carousel';

export function Post({ post }) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src="https://picsum.photos/50" alt="" />
        </div>
        <span className="text-sm">{post.author.name}</span>
        <span className="text-gray-400 text-xs">{post.timeAgo}</span>
      </div>
      <div className="p-4 pb-2 rounded-xl shadow-md cursor-pointer">
        <div className="flex-1">
          {/* 이미지 여러장 */}
          <Carousel />
          {/* 이미지 한장 */}
          <div className="aspect-video mb-4 items-center bg-black rounded-lg overflow-hidden shadow-md">
            <img className="w-full h-full object-cover" src="https://picsum.photos/800" alt="" />
          </div>
          <p className="whitespace-pre-line mb-4 text-lg">{post.title}</p>
          <p className="whitespace-pre-line mb-4 text-sm">{post.content}</p>
        </div>
        {post.relatedProduct && (
          <div className="flex items-center gap-2 p-1 rounded-md shadow-md">
            <div className="w-6 h-6 rounded-md overflow-hidden">
              <img src="https://picsum.photos/100" alt="" />
            </div>
            <h3 className="text-sm">{post.relatedProduct.name}</h3>
            {/* <p className="text-sm text-gray-500">{post.relatedProduct.description}</p> */}
          </div>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="flex justify-around w-full">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4 mr-2" />
              {post.stats.likes}
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" />
              {post.stats.comments}
            </Button>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              {post.stats.shares}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
