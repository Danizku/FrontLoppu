<!-- Muistiinpanolista näkymä -->
<script>
    import Note from "./Note.svelte";

    export let notes;

    let selectCourse = 'Kaikki';

    $: filterNotes = selectCourse === 'Kaikki' ? notes : notes.filter(note => {
        return note.course === selectCourse || note.course.name === selectCourse;
    });

    $: courses = ['Kaikki', ...new Set(notes.map(note => note.course.name || note.course))];

    function courseChange(event) {
        selectCourse = event.target.value;
    }
    // $: console.log(filterNotes);
</script>

<h1><strong>Muistiinpanot</strong></h1>
{#if filterNotes.length === 0}
    <p><strong>Ei muistiinpanoja!</strong></p>
{:else}
    <p><strong>Muistiinpanoja {filterNotes.length}</strong></p>
{/if}

<div>
    <p>Valitse kurssi</p>
    <select bind:value={selectCourse} on:change={courseChange}>
        {#each courses as course}
            <option value={course}>{course}</option>
        {/each}
    </select>
</div>

{#each filterNotes as note}
    <Note {...note} />
{/each}

<style>
    div {
        display: block ruby;
    }
    select {
        height: 1.5rem;
    }
</style>