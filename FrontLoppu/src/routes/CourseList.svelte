<!-- Kurssilista näkymä -->
<script>
    import Course from "./Course.svelte";

    export let courses;
</script>

{#if courses.length == 0}
    <p><strong>Ei opintojaksoja!</strong></p>
{:else}
    <p><strong>Opintojaksoja {courses.length}</strong></p>
{/if}

{#each courses as course}
	<Course {...course} />
{/each}