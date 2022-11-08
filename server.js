import { createServer as createViteServer } from 'vite';

const vite = await createViteServer({
	server: { middlewareMode: true },
	appType: 'custom',
});

const entry = await vite.ssrLoadModule('entry.js');
console.log('e', entry);
