<script>
	import CourseList from './CourseList.svelte';
	import { courses } from '$lib/courseStore.js';

	export let data;

	if ($courses.length === 0) {
		courses.populate(data.courses);
	}

	let name = '';

	function saveCourse() {
		if (name.trim() === '') {
			return
		}
		let course = { name };

		courses.add(course);
		name = '';
	}
</script>

<h1>Opintojaksot</h1>
<div>
	<h3>Lisää opintojakso</h3>
    <input bind:value={name} placeholder="Kurssi nimi" />
	<button on:click={saveCourse}>Tallenna</button>
</div>

<CourseList courses={$courses} />