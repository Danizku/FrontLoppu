<script>
    import { courses } from "$lib/courseStore.js";

    export let id;
    export let name;

    const removeCourse = () => {
        courses.remove(id);
    };
</script>

<div>
    <h3>{name}  (ID: {id})</h3>
    <a href={`/add/?course=${name}`}>
        <p>Lisää muistiinpano</p>
    </a>

    <button on:click={removeCourse}>Poista kurssi</button>
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