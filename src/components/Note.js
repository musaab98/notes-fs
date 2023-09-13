import { useEffect, useState } from "react";
import { NoteContent } from "./NoteContent";
import { Title } from "./Title";

export function Note({ param }) {
    return (
        <div>
            <Title />
            <NoteContent />
        </div>
    )
}