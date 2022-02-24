import fs from 'fs';
import matter from 'gray-matter';

export async function get() {
	const fileNames = await fs.promises.readdir('./posts');

	const blogs = await Promise.all(
		fileNames.map(async (fileName) => {
			const doc = await fs.promises.readFile(`posts/${fileName}`, 'utf8');
			const { data } = matter(doc);

			return data;
		})
	);
	blogs.sort((a, b) => b.created - a.created);
	return {
		body: JSON.stringify(blogs)
	};
}
