import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import Explore from './Explore'
type AboutSectionProps={
    paragraphs:string[],
    imgSrc:StaticImageData,
    title:string,
    imgDirection:string
}

export default function AboutSection({paragraphs,imgSrc,title,imgDirection}:AboutSectionProps) {
    return (
        <>
        {imgDirection === "right" ? (
          <>
            <div className="space-y-8 col-span-3">
              <h1 className="text-accent-400 text-4xl font-medium mb-10">{title}</h1>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="space-y-8 col-span-2">
              <Image src={imgSrc} alt="about-image" quality={90} placeholder="blur" />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-8 col-span-2">
              <Image src={imgSrc} alt="about-image" quality={90} placeholder="blur" />
            </div>
            <div className="space-y-8 col-span-3">
              <h1 className="text-accent-400 text-4xl font-medium mb-10">{title}</h1>
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Explore extraStyles='inline-block'/>
            </div>
          </>
        )}
      </>
  )
}
