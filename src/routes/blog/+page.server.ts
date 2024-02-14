import { slugFromPath } from '$lib/slugFromPath';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob(`/content/**/*.{md,svx,svelte.md}`);
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path).includes('index.md')
						? slugFromPath(path).slice(0, slugFromPath(path).lastIndexOf('/'))
						: slugFromPath(path),
					...(post as unknown as MdsvexFile).metadata
				}) as BlogPost
		)
	);

	const posts = await Promise.all(postPromises);

	posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return { posts };
};
