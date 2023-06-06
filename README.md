# Moved to https://github.com/cyberia-studio/react-modal

```tsx
import useModal from "@fipnooone/react-modal";

const MyComponent = () => {
	const [Modal, set, open, close] = useModal();

	useEffect(() => {
		set(<div>Modal content</div>);
		set((prevContent, prevOpen) => [<span>-_-<span>, false]);

		open();
		close();
		open((prev) => !prev);
		open(false);
	}, []);

	return (
		<div>
			<Modal />
			<h1>Hello!</h1>
		</div>
	);
};
```
