"use client";

import React, { useState, useRef } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [format, setFormat] = useState<"png" | "svg">("png");
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const downloadQR = () => {
    if (!text) return;

    if (format === "png") {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = url;
      link.click();
    } else {
      const svg = svgRef.current;
      if (!svg) return;
      const svgData = new XMLSerializer().serializeToString(svg);
      const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "qrcode.svg";
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-2xl font-bold text-slate-800">QR Code Generator</h1>
            <p className="text-slate-500 mt-1">Generate a downloadable QR code from any text or URL instantly.</p>
          </div>
          <div className="p-6 md:flex gap-8">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Enter Text or URL
              </label>
              <textarea
                className="w-full h-32 p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-slate-800"
                placeholder="https://example.com"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Format
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="text-blue-600 focus:ring-blue-500 h-4 w-4"
                      checked={format === "png"}
                      onChange={() => setFormat("png")}
                    />
                    <span className="ml-2 text-slate-700">PNG</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      className="text-blue-600 focus:ring-blue-500 h-4 w-4"
                      checked={format === "svg"}
                      onChange={() => setFormat("svg")}
                    />
                    <span className="ml-2 text-slate-700">SVG</span>
                  </label>
                </div>
              </div>

              <button
                onClick={downloadQR}
                disabled={!text}
                className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-300 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex justify-center items-center"
              >
                Download QR Code
              </button>
            </div>
            
            <div className="mt-8 md:mt-0 flex-1 flex flex-col items-center justify-center bg-slate-50 p-6 rounded-lg border border-slate-200">
              {text ? (
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  {format === "png" ? (
                    <QRCodeCanvas
                      value={text}
                      size={200}
                      ref={canvasRef}
                      level={"H"}
                      includeMargin={true}
                    />
                  ) : (
                    <QRCodeSVG
                      value={text}
                      size={200}
                      ref={svgRef}
                      level={"H"}
                      includeMargin={true}
                    />
                  )}
                </div>
              ) : (
                <div className="w-[200px] h-[200px] border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-sm text-center p-4">
                  Enter text to generate QR code
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 prose prose-slate max-w-none">
          <h2 className="text-xl font-bold text-slate-800">How to use this tool</h2>
          <p className="text-slate-600">
            Type or paste any text, link, or contact information into the input field. A QR code will instantly appear on the right. You can choose to download the QR code as a PNG image (best for most uses) or an SVG vector file (best for professional printing).
          </p>
          <h2 className="text-xl font-bold text-slate-800 mt-6">Privacy & Security</h2>
          <p className="text-slate-600">
            This QR code generator runs entirely in your browser. Your text or URL is never uploaded to our servers or stored anywhere. The conversion happens instantly on your own device.
          </p>
        </div>
      </div>
    </div>
  );
}
