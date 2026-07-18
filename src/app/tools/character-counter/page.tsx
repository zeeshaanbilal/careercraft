"use client";

import React, { useState } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  const charactersWithSpaces = text.length;
  const charactersWithoutSpaces = text.replace(/\s+/g, "").length;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-2xl font-bold text-slate-800">Character Counter</h1>
            <p className="text-slate-500 mt-1">Check character limits for social media, meta tags, and SMS messages.</p>
          </div>
          <div className="p-6">
            <textarea
              className="w-full h-64 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-slate-800"
              placeholder="Paste or type your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-50 p-6 rounded-lg text-center border border-slate-200">
                <span className="block text-4xl font-bold text-emerald-500">{charactersWithSpaces}</span>
                <span className="text-sm text-slate-500 font-medium mt-1 block">Characters (with spaces)</span>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg text-center border border-slate-200">
                <span className="block text-4xl font-bold text-emerald-500">{charactersWithoutSpaces}</span>
                <span className="text-sm text-slate-500 font-medium mt-1 block">Characters (no spaces)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 prose prose-slate max-w-none">
          <h2 className="text-xl font-bold text-slate-800">How to use this tool</h2>
          <p className="text-slate-600">
            Paste your text into the box above to immediately see the exact character count. This is particularly useful for platforms with strict limits like Twitter (280 characters), SMS messages (160 characters), or SEO meta descriptions (typically 150-160 characters).
          </p>
          <h2 className="text-xl font-bold text-slate-800 mt-6">How it's calculated</h2>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li><strong>Characters (with spaces):</strong> The absolute length of your text, including every space, tab, and line break.</li>
            <li><strong>Characters (no spaces):</strong> The length of your text after removing all whitespace characters.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
