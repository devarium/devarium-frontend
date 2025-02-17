'use client';

import React, { useState } from 'react';

function Filter({ items }: { items: string[] }) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <div className="flex rounded-lg bg-gray-100">
      <div className="flex gap-1 items-center p-0.5">
        {items &&
          items.map((item) => (
            <div
              className={`px-3 py-2 rounded-lg h-8 text-gray-500 text-xs cursor-pointer hover:text-black ${
                item === selectedItem && '!text-black !bg-white drop-shadow-md'
              }`}
              onClick={() => setSelectedItem(item)}
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Filter;
