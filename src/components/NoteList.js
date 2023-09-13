import { useEffect, useState } from "react";

export function NoteList({ param }) {
    return (
        <div>
            <button className="btn">Note 1</button><br />
            <button className="btn selected">Note 2</button><br />
            <button className="btn">Note 3</button>
        </div>
    )
}