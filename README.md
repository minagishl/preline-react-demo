# Preline React Demo

A simple demonstration application showcasing the [preline-react](https://github.com/minagishl/preline-react) component library.

This demo provides a minimal example of how to integrate and use Preline React components in a React application built with Vite and Tailwind CSS.

## Live Demo

You can see this demo in action at [demo site](https://preline-react-demo.pages.dev) or by running it locally (see [Getting Started](#getting-started) below).

## What's Included

This demo showcases:

- Basic setup of `preline-react` with Vite
- Integration with Tailwind CSS v4
- Example usage of Preline React components (Button)
- Proper provider configuration
- TypeScript support

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling framework
- **Preline React** - Component library

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- pnpm (recommended)

### Installation

1. Clone this repository:

```bash
git clone https://github.com/minagishl/preline-react-demo.git
cd preline-react-demo
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── App.tsx          # Main demo component
├── main.tsx         # Entry point with PrelineProvider setup
├── index.css        # Tailwind CSS imports
└── vite-env.d.ts    # Vite type definitions
```

## Key Implementation Details

### Provider Setup

The demo shows how to properly wrap your application with `PrelineProvider`:

```tsx
import { PrelineProvider } from 'preline-react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<PrelineProvider>
			<App />
		</PrelineProvider>
	</StrictMode>
);
```

### Component Usage

Example of using Preline React components:

```tsx
import { Button } from 'preline-react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='p-6 text-center'>
			<h1 className='mb-4 text-2xl font-bold'>Count: {count}</h1>

			<Button variant='solid' color='blue' onClick={() => setCount(count + 1)}>
				Click
			</Button>
		</div>
	);
}
```

### Tailwind CSS Configuration

The demo uses Tailwind CSS v4 with the Vite plugin for optimal integration:

```ts
// vite.config.ts
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [react(), tailwindcss()],
});
```

## 📚 Learn More

- **Preline React Documentation**: [Storybook](https://minagishl.github.io/preline-react/)
- **Preline React Repository**: [GitHub](https://github.com/minagishl/preline-react)
- **Preline UI**: [Official Website](https://preline.co/)

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Contributing

This is a demo repository. For contributions to the main library, please visit the [preline-react repository](https://github.com/minagishl/preline-react).

## License

MIT License - See [LICENSE](LICENSE) file for details.

## Related Projects

- [preline-react](https://github.com/minagishl/preline-react) - The main component library
- [Preline UI](https://preline.co/) - The original UI framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
