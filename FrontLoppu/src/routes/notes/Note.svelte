<script>
    import { notes } from "$lib/noteStore.js";

    export let id;
    export let text;
    export let course;
    export let timestamp;

    const removeNote = () => {
        notes.remove(id);
    };
</script>

<div>
    <h3>{#if course.name == undefined}
        {course}
    {:else}
        {course.name}
    {/if}
    </h3>
    {#if notes.length !== 0}
        <p>{text} ({timestamp}) (ID: {id})</p> 
    {:else}
        <p>Ei muistiinpanoja</p>
    {/if}

    <button on:click={removeNote}>Poista muistiinpano</button>
</div>

<style>
	div {
        border: 1px solid black;
        margin-bottom: 1rem;
        padding-left: 1rem;
        display: flex;
        justify-content: space-between;
    }
    button {
        padding: 0.5rem;
    }
</style>