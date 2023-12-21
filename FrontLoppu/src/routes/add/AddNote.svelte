<!-- Muistiinpanon lisäys näkymä -->
<script>
  import { onMount } from 'svelte';
  import { notes } from '$lib/noteStore.js';

  let course;
  let noteText = '';
  let sessionNotes = [];

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    course = params.get('course');
    // console.log('course:', course);
    
  });

  const addNote = () => {
    if (noteText.trim() !== '') {
      const newNote = {
        text: noteText,
        course: course,
        timestamp: new Date().toLocaleString(),
      };
      sessionNotes = [...sessionNotes, newNote];
      notes.add(newNote);
      noteText = '';
    }
  };
</script>

<div>
  <h2>Lisää muistiinpano</h2>
  {#if course}
    <p>Lisää muistiinpano kurssille: {course}</p>
  {:else}
    <p>Virhe: Kurssi puuttuu.</p>
  {/if}

  <form on:submit={addNote}>
    <textarea bind:value={noteText}></textarea>
    <button>Tallenna</button>
  </form>
</div>

<!-- Listaa session muistiinpanot -->
<h3>Session muistiinpanot</h3>
<ul>
  {#each sessionNotes as note}
    <li>{note.text}</li>
  {/each}
</ul>

<style>
  div {
    border: 1px solid black;
    margin-bottom: 1rem;
    padding: 1rem;
  }

  textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 1rem;
  }
</style>