const useTreeTraversal = () => {
    const insertNode = (tree, isFolder, folderId, node) => {
        if (tree && tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: node,
                isFolder,
                items: []
            })
            return tree;
        }
        const latestTree = tree.items.map(item => {
            return insertNode(item, isFolder, folderId, node)
        })
        return { ...tree, item: latestTree.filter(a => !!a) }
    }

    const deleteNode = (tree, id) => {
        if (tree.id === id) {
            return {}
        }
        if (tree && Array.isArray(tree.items) && tree.items.length > 0) {
            const itemIndex = tree.items.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                tree.items = tree.items.filter(item => item.id !== id);
                return tree;
            }
        }
        const latestTree = tree.items.map(item => {
            return deleteNode(item, id)
        })
        return { ...tree, items: latestTree.filter(a => !!a) }
    }

    const updateNode = (tree, id, node) => {
        if (tree.id === id) {
            tree.name = node
            return tree;
        }
        if (tree && Array.isArray(tree.items) && tree.items.length > 0) {
            const itemIndex = tree.items.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                tree.items[itemIndex].name = node;
                return tree;
            }
        }
        let latestTree = tree.items.map(item => {
            return updateNode(item, id, node)
        })

        return { ...tree, item: latestTree.filter(a => !!a) }
    }

    return { insertNode, deleteNode, updateNode }
}

export default useTreeTraversal;
