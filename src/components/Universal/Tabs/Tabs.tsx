import React, { useState } from "react";
import '@/components/Universal/Tabs/Tabs.scss';

type Tab = {
    label: string;
    content: React.ReactNode;
};

type TabsProps = {
    tabs: Tab[];
    height?: string | number;
};

export default function Tabs({ tabs, height = "300px" }: TabsProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="tabs">
            <div style={{ display: "flex", borderBottom: "2px solid #ccc" }}>
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        style={{
                            borderBottom: activeIndex === i ? "3px solid #212722" : "3px solid transparent",
                            fontWeight: activeIndex === i ? "bold" : "normal",
                            color: activeIndex === i ? "#212722" : "#555",
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="tabs-container"
                style={{
                    height,
                }}
            >
                {tabs[activeIndex]?.content}
            </div>
        </div>
    );
}
