import React from 'react';

type Props = {
  imageUrl: string;
  caption?: string;
  isRounded?: boolean;
}

export default function ImageCard({ imageUrl, caption, isRounded = false }: Props) {
  return (
    <figure className="relative">
      <div className={`
        aspect-[4/3] 
        border-4 
        border-border 
        bg-main 
        shadow-light 
        hover:-translate-y-1 
        hover:-translate-x-1 
        transition-all 
        duration-200
        overflow-hidden
        ${isRounded ? 'rounded-[2rem]' : 'rounded-base'}
      `}>
        <img 
          className="h-full w-full object-cover"
          src={imageUrl} 
          alt={caption || "image"} 
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-main border-t-4 border-border p-4 font-bold">
            {caption}
          </div>
        )}
      </div>
    </figure>
  );
}