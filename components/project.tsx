import { Button } from '@/components/ui/button';
import { MessageSquare, Heart, Share2, MoreVertical } from 'lucide-react';

export function Project({ post }) {
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
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden">
            <img src="https://picsum.photos/100" alt="" />
          </div>
          <div>
            {/* 태그 */}
            <h3 className="text-base">{post.relatedProduct.name}</h3>
            <p className="text-sm text-gray-500">{post.relatedProduct.description}</p>
          </div>
        </div>
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
