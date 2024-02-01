"use client"
import React, {useState} from 'react';

function Note() {
const [newNoteTitle,setNewNoteTitle] = useState("New Title");
const [newNoteText,setNewNoteText] = useState("What's on your mind?");
    const [userNotes, setUserNotes] = useState(["Books "])
    return (
        <section id="note" className="w-full h-screen bg-base-200 px-24 py-10">
            <textarea placeholder={newNoteTitle} className="w-full h-16 text-3xl mb-1 p-3 bg-base-200 focus:outline focus:outline-base-50 rounded text-base-900 resize-none"/>
            <textarea placeholder={newNoteText} className="w-full h-full max-h-full text-lg p-3 bg-base-200 focus:outline focus:outline-base-50 rounded text-base-900 resize-none"/>
        </section>
    );
}

export default Note;
