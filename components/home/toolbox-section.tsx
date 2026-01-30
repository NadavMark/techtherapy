'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { AnimatedWrapper } from '@/components/shared/animated-wrapper';
import { Icon } from '@iconify/react';

interface Tool {
  name: string;
  icon?: string;
  image?: string;
  color?: string;
}

const tools: Tool[] = [
  // --- AI Tools ---
  { name: 'Google Gemini', icon: 'logos:google-gemini' }, 
  { name: 'ChatGPT', icon: 'simple-icons:openai', color: '#10A37F' },
  { name: 'Claude', icon: 'logos:claude-icon' },

  // --- Office (Microsoft) ---
  { name: 'Word', icon: 'vscode-icons:file-type-word' },
  { name: 'PowerPoint', icon: 'vscode-icons:file-type-powerpoint' },
  { name: 'Excel', icon: 'vscode-icons:file-type-excel' },

  // --- Office (Google) - שמות מתוקנים ---
{ name: 'Google Docs', icon: 'simple-icons:googledocs', color: '#4285F4' },
  { name: 'Google Sheets', icon: 'simple-icons:googlesheets', color: '#34A853' }, 
  { name: 'Google Drive', icon: 'logos:google-drive' },
  { name: 'Gmail', icon: 'logos:google-gmail' },
  { name: 'Calendar', icon: 'logos:google-calendar' },
  { name: 'Google Keep', icon: 'logos:google-keep' }, 

  // --- Creative & Media ---
  { name: 'Spotify', icon: 'logos:spotify-icon' },
  { name: 'YouTube', icon: 'logos:youtube-icon' },
  { name: 'Canva', icon: 'devicon:canva' },            // תוקן: ספריית devicon
  { name: 'Blender', icon: 'logos:blender' },
  
  // תמונות מותאמות אישית (לוודא שהן קיימות בתיקיית public)
  { name: 'Ableton Live', image: '/live.png' }, 
  { name: 'Suno', image: '/Suno_Logo_1.png' },   
    { name: 'VLC', image: '/vlc_icon.png' }, 


  // --- Communication ---
  { name: 'Zoom', icon: 'logos:zoom-icon' },
  { name: 'WhatsApp', icon: 'logos:whatsapp-icon' },
  { name: 'Facebook', icon: 'logos:facebook' },
  { name: 'Instagram', icon: 'logos:instagram-icon' },

  // --- Utilities & Search ---
  { name: 'Google Search', icon: 'logos:google-icon' },
  { name: 'Chrome', icon: 'logos:chrome' },
  { name: 'Wikipedia', icon: 'flat-color-icons:wikipedia' }, 
  { name: 'File Explorer', icon: 'flat-color-icons:folder' },
  { name: 'Google Lens', icon: 'simple-icons:googlelens', color: '#4285F4' }, 
  { name: 'Google Maps', icon: 'logos:google-maps' },
  { name: 'Android', icon: 'logos:android-icon' },
];

export function ToolboxSection() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <SectionWrapper className="bg-gray-50 py-12">
      <AnimatedWrapper>
        <h2 className="mb-8 text-center text-3xl font-bold text-dark-teal md:text-4xl">
          הכלים והתוכנות שנלמד
        </h2>
      </AnimatedWrapper>

      {/* Grid: 4 עמודות במובייל, עד 10 במסכים ענקיים - צפוף וממורכז */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 justify-items-center">
        {tools.map((tool, index) => {
          return (
            <AnimatedWrapper key={tool.name} delay={index * 0.02}>
              <div
                className="group relative flex flex-col items-center justify-center p-2 rounded-xl transition-all hover:bg-white hover:shadow-sm hover:scale-105 cursor-pointer w-20 h-20"
                onMouseEnter={() => setHoveredTool(tool.name)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                {tool.image ? (
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain drop-shadow-sm transition-all group-hover:drop-shadow-md"
                  />
                ) : (
                  <Icon
                    icon={tool.icon!}
                    className="h-10 w-10 drop-shadow-sm transition-all group-hover:drop-shadow-md"
                    // כאן התיקון החשוב שמאפשר לאבלטון להיות שחור ולשאר להיות בצבע המקורי שלהם
                    color={tool.color} 
                    style={!tool.color ? { color: 'inherit' } : undefined}
                  />
                )}

                {/* Tooltip */}
                {hoveredTool === tool.name && (
                  <div className="absolute -top-8 z-20 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white shadow-lg animate-in fade-in zoom-in-95 duration-150">
                    {tool.name}
                    <div className="absolute -bottom-1 start-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-800" />
                  </div>
                )}
              </div>
            </AnimatedWrapper>
          );
        })}
      </div>
    </SectionWrapper>
  );
}