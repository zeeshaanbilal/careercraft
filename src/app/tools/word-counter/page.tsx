"use client";

import React, { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(Boolean).length : 0;
  const readingTime = Math.ceil(words / 200); // avg 200 wpm

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-2xl font-bold text-slate-800">Word Counter</h1>
            <p className="text-slate-500 mt-1">Paste your text below to get instant word, sentence, and paragraph counts.</p>
          </div>
          <div className="p-6">
            <textarea
              className="w-full h-64 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-slate-800"
              placeholder="Paste or type your text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                <span className="block text-3xl font-bold text-blue-600">{words}</span>
                <span className="text-sm text-slate-500 font-medium">Words</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                <span className="block text-3xl font-bold text-blue-600">{sentences}</span>
                <span className="text-sm text-slate-500 font-medium">Sentences</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                <span className="block text-3xl font-bold text-blue-600">{paragraphs}</span>
                <span className="text-sm text-slate-500 font-medium">Paragraphs</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-200">
                <span className="block text-3xl font-bold text-blue-600">{readingTime}</span>
                <span className="text-sm text-slate-500 font-medium">Min Read</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 prose prose-slate max-w-none">
          <h2 className="text-xl font-bold text-slate-800">How to use this tool</h2>
          <p className="text-slate-600">
            Simply paste your document, essay, or blog post into the text area above. The counts will update automatically in real-time. This tool processes everything directly in your browser, meaning your text is secure and never sent to any server.
          </p>
          <h2 className="text-xl font-bold text-slate-800 mt-6">How it's calculated</h2>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li><strong>Words:</strong> Counted by splitting the text by spaces.</li>
            <li><strong>Sentences:</strong> Counted by splitting the text by periods, exclamation marks, and question marks.</li>
            <li><strong>Paragraphs:</strong> Counted by splitting the text by line breaks.</li>
            <li><strong>Reading Time:</strong> Estimated based on an average reading speed of 200 words per minute.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
