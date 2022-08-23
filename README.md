```js
import { Modal, ModalContext } from ".../Modal/Modal";

// index.tsx or another main component
<Modal.Provider>
	<Modal.Consumer />
	<OtherComponent />
</Modal.Provider>;

// OtherComponent.tsx
const OtherComponent = () => {
	const modal = useContext(ModalContext);

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
