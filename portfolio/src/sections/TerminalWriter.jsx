import React, { useState, useRef, useEffect } from "react";

export default function TerminalWriter() {
    const [history, setHistory] = useState([
        { id: 0, text: "Welcome, Hiring Manager 👋", type: "system" },
        { id: 1, text: "I’m James — a full-stack developer who loves building clean, functional, and fun projects.", type: "system" },
        { id: 2, text: "Type one of the commands below to explore:", type: "system" },
        { id: 3, text: "npm run skills     → Show my technical skills", type: "system" },
        { id: 4, text: "npm run contact    → Get my contact details", type: "system" },
        { id: 5, text: "npm run hire       → Why you should hire me", type: "system" },
        { id: 6, text: "npm run joke       → A little humor for you", type: "system" },
        { id: 7, text: "npm run help       → Show available commands again", type: "system" },
    ]);

    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const idRef = useRef(8);

    const COMMANDS = {
        "npm run skills": [
            "Frontend: React, TailwindCSS",
            "Backend: Node.js, Express, MongoDB",
            "Extras: Git, REST APIs",
        ],
        "npm run contact": [
            "Email: msizajst@example.com",
            "GitHub: github.com/coffee-driven-dev007",
            "Phone: +27-67-004-5453",
        ],
        "npm run hire": [
            "✔ Writes clean, maintainable code.",
            "✔ Ships features — not excuses.",
            "✔ Turns ☕ into production-ready apps.",
            "🔥 Success pipeline initiated. Welcome aboard!",
        ],
        "npm run joke": [
            "Hiring Manager: Why should we hire you?",
            "Me: Because 'npm uninstall stress && npm install results' 🤖",
            "Or better yet: console.log('I’m the missing semicolon in your team’s success.');",
        ],
        "npm run help": [
            "Available commands:",
            "npm run skills     → Show my technical skills",
            "npm run contact    → Get my contact details",
            "npm run hire       → Why you should hire me",
            "npm run joke       → A little humor for you",
            "npm run help       → Show available commands again",
        ],
    };

    useEffect(() => {
        // focusInput();
    }, []);

    useEffect(() => {
        const el = document.getElementById("terminal-body");
        if (el) el.scrollTop = el.scrollHeight;
    }, [history]);

    function focusInput() {
        setTimeout(() => inputRef.current && inputRef.current.focus(), 50);
    }

    function appendToHistory(text, type = "output") {
        setHistory((h) => [...h, { id: idRef.current++, text, type }]);
    }

    function runCommand(cmd) {
        if (!cmd.trim()) return;
        appendToHistory(`> ${cmd}`, "command");
        const output = COMMANDS[cmd];
        if (output) {
            output.forEach((line) => appendToHistory(line, "output"));
        } else {
            appendToHistory("Command not found. Type: npm run help", "error");
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        runCommand(input);
        setInput("");
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6" id="terminal">
            <div className="w-full max-w-5xl bg-black rounded-lg border border-black overflow-hidden">
                <div className="flex items-center gap-3 p-3 bg-black border-b border-black">
                    <div className="flex gap-2 items-center">
                        <span className="w-3 h-3 bg-red-500 rounded-full" />
                        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                        <span className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="ml-3 text-sm text-gray-300">James@portfolio — Terminal</div>
                </div>

                <div id="terminal-body" className="p-4 h-[70vh] overflow-y-auto font-mono text-sm text-gray-200 bg-black">
                    {history.map((line) => (
                        <div key={line.id} className="mb-1">
                            {line.type === "system" && <div className="text-gray-400">{line.text}</div>}
                            {line.type === "command" && <div className="text-green-400">{line.text}</div>}
                            {line.type === "output" && <div className="text-gray-200">{line.text}</div>}
                            {line.type === "error" && <div className="text-red-400">{line.text}</div>}
                        </div>
                    ))}
                </div>

                <div className="p-3 border-t border-black bg-black">
                    <form onSubmit={handleSubmit} className="flex gap-3 items-center">
                        <div className="font-mono text-green-400">James@host:~$</div>
                        <input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 bg-black outline-none text-gray-200 font-mono"
                            placeholder="Type a command..."
                            autoComplete="off"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
