"use client";

import { useState } from "react";

export default function Home() {
  const [thoughts, setThoughts] = useState("");
  const [letter, setLetter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!thoughts.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ thoughts }),
      });

      const data = await response.json();
      setLetter(data.letter);
      setShowLetter(true);
      setThoughts("");
    } catch (error) {
      console.error("Error:", error);
      setLetter("We encountered an error. Please try again.");
      setShowLetter(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setShowLetter(false);
    setLetter("");
    setThoughts("");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-3xl w-full">
        {!showLetter ? (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-5xl font-serif text-gray-800 tracking-tight">
                Share Your Thoughts
              </h1>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                Whatever is weighing on your heart, you can express it here.
                This is a safe, private space. No accounts, no storage, no
                judgment, You are not alone.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <textarea
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                  placeholder="Write what's on your mind..."
                  className="w-full h-64 p-6 text-lg border-2 border-gray-200 rounded-lg resize-none focus:outline-none focus:border-gray-400 transition-colors font-light text-gray-800 placeholder-gray-400"
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col items-center space-y-4">
                <button
                  type="submit"
                  disabled={isLoading || !thoughts.trim()}
                  className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-light text-lg tracking-wide"
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>

                <p className="text-sm text-gray-500 font-light italic text-center max-w-md">
                  Your words will be deleted immediately after you receive a
                  response. Nothing is saved or stored anywhere.
                </p>
              </div>
            </form>

            <div className="mt-12 pt-8 border-t border-gray-200 space-y-4">
              <p className="text-sm text-gray-500 font-light text-center max-w-2xl mx-auto leading-relaxed">
                This space offers comfort and companionship through words. It is
                not a replacement for professional mental health support. If you
                are in crisis, please reach out to a crisis helpline or mental
                health professional in your area.
              </p>
              <p className="text-sm text-gray-400 font-light text-center">
                <a
                  href="https://github.com/mdxabu/letters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors underline"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-gray-50 rounded-lg p-8 sm:p-12 border border-gray-200">
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap font-serif text-gray-800 leading-relaxed text-lg">
                  {letter}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-sm text-blue-900 font-light leading-relaxed text-center">
                  <strong className="font-medium">Your privacy matters:</strong>{" "}
                  We have deleted your input from our systems. Just as we let go
                  of your words, we hope you can begin to release the thoughts
                  that weigh heavily on you.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-light text-lg tracking-wide"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 space-y-4">
              <p className="text-sm text-gray-500 font-light text-center max-w-2xl mx-auto leading-relaxed">
                Remember: This is a moment of comfort, not a replacement for
                professional help. If you are struggling, please consider
                reaching out to a mental health professional or crisis support
                service.
              </p>
              <p className="text-sm text-gray-400 font-light text-center">
                <a
                  href="https://github.com/mdxabu/letters"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors underline"
                >
                  View on GitHub
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
