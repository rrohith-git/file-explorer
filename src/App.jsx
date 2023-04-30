import { useState } from 'react';
import Explorer from './components/Explorer';
import ActionHeader from './components/ActionHeader';
import ExplorerData from './data/explorerData';
import useTreeTraversal from './hooks/useTreeTraversal';

function App() {

  const [explorerData, setExplorerData] = useState(ExplorerData);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null
  });
  const [selectedFolderId, setSelectedFolderID] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleInputVisiblity = (isFolder) => {
    setShowInput({ isFolder, isVisible: true })
  }

  const { insertNode, deleteNode, updateNode } = useTreeTraversal();

  const insertNodeHandler = (folderId, isFolder, node) => {
    if (node) {
      const latestTree = insertNode(explorerData, isFolder, folderId, node);
      setExplorerData(latestTree)
    }
  }

  const editNodeHandler = (newName) => {
    if (newName) {
      setIsEdit(!isEdit)
      const latestTree = updateNode(explorerData, selectedFolderId, newName);
      setExplorerData(latestTree)
    }
  }

  const deleteNodeHandler = () => {
    const latestTree = deleteNode(explorerData, selectedFolderId);
    setExplorerData(latestTree);
    setSelectedFolderID(null);
  }

  return (
    <div style={{ paddingLeft: '20px', margin: '10px', width: '30%', overflow: 'scroll' }}>
      <ActionHeader
        onVisibilty={handleInputVisiblity}
        onDelete={deleteNodeHandler}
        onEdit={setIsEdit}
      />
      <Explorer
        explorerData={explorerData}
        onInsertNode={insertNodeHandler}
        setShowInput={setShowInput}
        setIsEdit={setIsEdit}
        showInput={showInput}
        selectedFolderId={selectedFolderId}
        setSelectedFolderID={setSelectedFolderID}
        onEditNode={editNodeHandler}
        isEdit={isEdit}
      />
    </div>
  );
}

export default App;
