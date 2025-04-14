'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

export function FlipCard() {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="relative w-full aspect-square perspective cursor-pointer group"
    >
      <div
        className={clsx(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          flipped && "rotate-y-180"
        )}
      >
        {/* Frente */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
          <Image
            src="/FotoBigeus.jpg"
            alt="Vinícius Simões"
            fill
            className="object-cover"
          />
          {/* Easter Egg Frente */}
          <span className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/30 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Vinícius Simões
          </span>
        </div>

        {/* Verso */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl overflow-hidden">
          <Image
            src="/xProfilePic.jpg"
            alt="Bigeus"
            fill
            className="object-cover"
          />
          {/* Easter Egg Verso */}
          <span className="absolute bottom-2 left-2 text-xs text-white/80 bg-black/30 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Bigeus
          </span>
        </div>
      </div>
    </div>
  )
}
