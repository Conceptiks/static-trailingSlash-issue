// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	interface MdsvexFile {
		default: import('svelte/internal').SvelteComponent;
		metadata: Record<string, string>;
	}

	type MdsvexResolver = () => Promise<MdsvexFile>;

	interface BlogPost {
		title: string;
		shortDescription?: string;
		watermark?: string;
		date: string;
		description: string;
		author: string;
		authorImage: string;
		authorProfile: string;
		type: string;
		categories: string[];
		tags: string[];
		slug: string;
	}
}

export {};
