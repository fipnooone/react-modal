const getRoot = () => {
    const root = document.getElementById('root');

    if (root) return root;

    return document.body;
};

const getBlock = () => {
    const root = getRoot();

    const block = document.getElementById('modals');

    if (block) return block;

    const newBlock = document.createElement('div');
    newBlock.id = 'modals';

    root.appendChild(newBlock);

    return newBlock;
};

export { getBlock, getRoot };
