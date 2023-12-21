import { writable } from 'svelte/store';

function createNotes() {

    const { subscribe, set, update } = writable([]);
    const add_note = (note) => {
        update((notes) => {
            let id = notes.length;
            return [...notes, { id, ...note}];
        });
    };

    const remove_note = (noteId) => {
        update((notes) => {
            return notes.filter(note => note.id !== noteId);
        });
    };

    return {
        subscribe,
        add: add_note,
        remove: remove_note,
        reset: () => set([]),
        populate: (notes) => set(notes),
    };
};

export const notes = createNotes();