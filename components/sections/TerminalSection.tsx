"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TERMINAL_COMMANDS, TERMINAL_WELCOME } from "@/data/terminal";
import { TERMINAL_PROMPT } from "@/config/site";
import { fadeInUp } from "@/lib/animations";

interface HistoryEntry {
  id: string;
  type: "input" | "output" | "error" | "welcome";
  content: string | string[];
}

export function TerminalSection() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { id: "welcome", type: "welcome", content: TERMINAL_WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();

    if (!cmd) return;

    // Add to command history
    setCommandHistory((prev) => [raw, ...prev].slice(0, 50));
    setHistoryIndex(-1);

    // Add input to terminal history
    const inputEntry: HistoryEntry = {
      id: `input-${Date.now()}`,
      type: "input",
      content: raw,
    };

    if (cmd === "clear") {
      setHistory([{ id: "welcome", type: "welcome", content: TERMINAL_WELCOME }]);
      return;
    }

    const command = TERMINAL_COMMANDS[cmd];

    if (command) {
      setHistory((prev) => [
        ...prev,
        inputEntry,
        {
          id: `output-${Date.now()}`,
          type: "output",
          content: command.output,
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        inputEntry,
        {
          id: `error-${Date.now()}`,
          type: "error",
          content: [
            `Command not found: ${cmd}`,
            "Type 'help' to see available commands.",
          ],
        },
      ]);
    }
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? "" : (commandHistory[newIndex] ?? ""));
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Simple tab completion
      const commands = Object.keys(TERMINAL_COMMANDS);
      const match = commands.find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

  const renderLines = (content: string | string[]) => {
    const lines = Array.isArray(content) ? content : [content];
    return lines.map((line, i) => (
      <div key={i} className={line === "" ? "h-3" : ""}>
        {line}
      </div>
    ));
  };

  return (
    <section id="terminal" className="section-padding" aria-labelledby="terminal-heading">
      <div className="section-container">
        <SectionHeader
          label="Terminal"
          title="Explore via"
          titleGradient="CLI"
          description="An interactive terminal. Type 'help' to get started."
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0a0a] shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex flex-1 items-center justify-center gap-2">
                <Terminal size={12} className="text-muted-foreground" />
                <span className="font-mono text-xs text-muted-foreground">
                  portfolio — bash
                </span>
              </div>
            </div>

            {/* Terminal output */}
            <div
              ref={containerRef}
              className="no-scrollbar h-80 overflow-y-auto p-4 font-mono text-xs leading-relaxed sm:text-sm"
              onClick={() => inputRef.current?.focus()}
              role="log"
              aria-label="Terminal output"
              aria-live="polite"
            >
              {history.map((entry) => (
                <div key={entry.id} className="mb-1">
                  {entry.type === "input" && (
                    <div className="flex items-start gap-2">
                      <span className="shrink-0 text-green-400">{TERMINAL_PROMPT}</span>
                      <span className="text-foreground">{entry.content as string}</span>
                    </div>
                  )}

                  {entry.type === "welcome" && (
                    <div className="mb-2 text-muted-foreground">
                      {renderLines(entry.content)}
                    </div>
                  )}

                  {entry.type === "output" && (
                    <div className="my-1 text-muted-foreground">
                      {renderLines(entry.content)}
                    </div>
                  )}

                  {entry.type === "error" && (
                    <div className="my-1 text-red-400">
                      {renderLines(entry.content)}
                    </div>
                  )}
                </div>
              ))}

              {/* Current input line */}
              <div className="flex items-center gap-2">
                <span className="shrink-0 text-green-400">{TERMINAL_PROMPT}</span>
                <div className="relative flex flex-1 items-center">
                  <span className="text-foreground">{input}</span>
                  <span className="animate-blink ml-px text-accent">▋</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="absolute inset-0 cursor-text bg-transparent opacity-0"
                    aria-label="Terminal input"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                  />
                </div>
              </div>

              <div ref={bottomRef} />
            </div>

            {/* Quick commands */}
            <div className="border-t border-border px-4 py-3">
              <p className="mb-2 font-mono text-[10px] text-muted-foreground/60">
                Quick commands:
              </p>
              <div className="flex flex-wrap gap-2">
                {["help", "about", "projects", "skills", "contact"].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => {
                      executeCommand(cmd);
                      inputRef.current?.focus();
                    }}
                    className="rounded-md border border-border bg-surface-1 px-3 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
