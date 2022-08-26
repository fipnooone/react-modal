```js
import { Modal } from ".../Modal/Modal";

// index.tsx or another main component
<Modal.Provider>
	<OtherComponent />
</Modal.Provider>;

// OtherComponent.tsx
const OtherComponent = () => {
	const modal = Modal.use();

	useEffect(() => {
		modal.set(<div>Modal</div>); // откроется автоматически

		modal.open();
		modal.close();
		Modal.open();
		Modal.close();

		modal.content;
	}, []);

	return <></>;
};
```
