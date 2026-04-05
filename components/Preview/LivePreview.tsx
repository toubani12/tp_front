"use client";

import React, { useRef, useEffect } from "react";

interface LivePreviewProps {
  html: string;
}

export default function LivePreview({ html }: LivePreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(html || "<html><body></body></html>");
    doc.close();
  }, [html]);

  return (
    <div className="relative h-full flex flex-col bg-white rounded-lg overflow-hidden border border-gray-200">
      {/* Preview header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border-b border-gray-200 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-gray-300" />
          <span className="w-3 h-3 rounded-full bg-gray-300" />
          <span className="w-3 h-3 rounded-full bg-gray-300" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-white border border-gray-200 rounded px-3 py-0.5 text-xs text-gray-400 font-mono">
            preview · index.html
          </div>
        </div>
        <span className="text-[10px] text-emerald-500 font-mono font-medium">
          ● LIVE
        </span>
      </div>

      {/* iframe */}
      <iframe
        ref={iframeRef}
        className="flex-1 w-full bg-white"
        sandbox="allow-scripts"
        title="Live Preview"
      />
    </div>
  );
}
