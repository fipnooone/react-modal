var getRoot = function () {
    var root = document.getElementById('root');
    if (root)
        return root;
    return document.body;
};
var getBlock = function () {
    var root = getRoot();
    var block = document.getElementById('modals');
    if (block)
        return block;
    var newBlock = document.createElement('div');
    newBlock.id = 'modals';
    root.appendChild(newBlock);
    return newBlock;
};
export { getBlock, getRoot };
//# sourceMappingURL=index.js.map