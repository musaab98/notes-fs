import { useEffect, useState } from "react";
import { NoteList } from './NoteList';
import { Options } from './Options';

export function SideBar({ param }) {
    return (
        <div>
            <Options />
            <NoteList />
        </div>
    )
}
    
