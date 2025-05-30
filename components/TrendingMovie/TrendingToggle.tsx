import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"


interface Props {
    value: string;
    onChange: (value: string) => void;
}

function TrendingToggle({ value, onChange }: Props) {
    return (
        <ToggleGroup
            type="single"
            value={value}
            onValueChange={(val) => {
                if (val) onChange(val);
            }}
            className="border border-blue-900 rounded-full overflow-hidden"
        >
            <ToggleGroupItem
                value="day"
                className={`px-4 py-2 font-semibold rounded-full data-[state=on]:bg-blue-900 data-[state=on]:text-green-400`}
            >
                Today
            </ToggleGroupItem>
            <ToggleGroupItem
                value="week"
                className={`px-4 py-2 font-semibold rounded-full data-[state=on]:bg-blue-900 data-[state=on]:text-green-400`}
            >
                This Week
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

export default TrendingToggle