import React from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { MediaType } from '@/app/enums/MediaTypeEnum';


interface Props {
    value: string;
    onChange: (value: MediaType) => void;
}

function PopularToggle({ value, onChange }: Props) {
    return (
        <ToggleGroup
            type="single"
            value={value}
            onValueChange={(val) => {
                if (val) onChange(val as MediaType);
            }}
            className="border border-blue-900 rounded-full overflow-hidden h-[30px]"
        >
            <ToggleGroupItem
                value="tv"
                className={`px-4 py-2 font-semibold rounded-full data-[state=on]:bg-blue-900 data-[state=on]:text-green-400`}
            >
                TV
            </ToggleGroupItem>
            <ToggleGroupItem
                value="movie"
                className={`px-4 py-2 font-semibold rounded-full data-[state=on]:bg-blue-900 data-[state=on]:text-green-400`}
            >
                Movies
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

export default PopularToggle