import { writable } from 'svelte/store';

function createCourses() {

    const { subscribe, set, update } = writable([]);

    const add_course = (course) => {
        update((courses) => {
            let id = courses.length;
            return [...courses, { id, ...course}];
        });
    };

    const remove_course = (courseId) => {
        update((courses) => {
            return courses.filter(course => course.id !== courseId);
        });
    };

    return {
        subscribe,
        add: add_course,
        remove: remove_course,
        reset: () => set([]),
        populate: (courses) => set(courses)
    };
};

export const courses = createCourses();