<script>
    import NoteList from "./NoteList.svelte";
    import { notes } from "$lib/noteStore.js";

    export let data;

	if ($notes.length === 0) {
		notes.populate(data.notes);
	}
</script>

<NoteList notes={$notes} />