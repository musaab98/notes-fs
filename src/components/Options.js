import { useEffect, useState } from "react";

export function Options({ param }) {
    return (
        <div className="options">
            <button className="btn icon">Up</button>
            <button className="btn icon">Down</button>
            <div className="trash">
                <button className="btn icon">Trash</button>
            </div>
        </div>
    )
}