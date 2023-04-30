import React, { useState } from 'react';
import classes from './Explorer.module.css';
import { AiOutlineFolderOpen, AiOutlineFolder, AiOutlineFile } from "react-icons/ai";

const Explorer = ({
    explorerData,
    onInsertNode,
    onEditNode,
    setIsEdit,
    showInput,
    setShowInput,
    setSelectedFolderID,
    selectedFolderId,
    isEdit
}) => {

    const [expand, setExpand] = useState(false);
    // const [showInput, setShowInput] = useState({
    //     isVisible: false,
    //     isFolder: null
    // });

    // const handleInputVisiblity = (event, isFolder) => {
    //     event.stopPropagation();
    //     setExpand(true)
    //     setShowInput({ isFolder, isVisible: true })
    // }

    const onAddHandler = (event) => {
        if (event.keyCode === 13 && event.target.value) {
            setShowInput((prevState) => {
                return { ...prevState, isVisible: false }
            })
            onInsertNode(explorerData.id, showInput.isFolder, event.target.value);
        }
    }

    const onEditHandler = (event) => {
        if (event.keyCode === 13 && event.target.value) {
            onEditNode(event.target.value)
        }
    }

    if (Object.keys(explorerData).length < 1) {
        return <h2 style={{ color: '#333' }}>No Folders</h2>
    }
    if (!explorerData.isFolder) {
        return (
            <div
                className={classes.file && (selectedFolderId === explorerData.id) ? classes.file__highlight : ''}
                onClick={() => {
                    setSelectedFolderID(explorerData.id)
                }}
            >
                <span>
                    <AiOutlineFile color='#333' />
                    {(isEdit && (selectedFolderId === explorerData.id)) ?
                        <input
                            type='text'
                            autoFocus
                            defaultValue={explorerData.name}
                            onBlur={() => setIsEdit(!isEdit)}
                            onKeyDown={onEditHandler}
                        /> :
                        explorerData.name}
                </span>
            </div>
        )
    } else {
        return (
            <div>
                <div
                    className={classes.folder && (selectedFolderId === explorerData.id) ? classes.folder__highlight : ''}
                    onClick={() => {
                        setExpand(!expand)
                        setSelectedFolderID(explorerData.id)
                    }}
                >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        {(expand ? <AiOutlineFolderOpen color='#333' /> : <AiOutlineFolder color='#333' />)}
                        {(isEdit && (selectedFolderId === explorerData.id)) ?
                            <input
                                type='text'
                                autoFocus
                                defaultValue={explorerData.name}
                                onBlur={() => setIsEdit(!isEdit)}
                                onKeyDown={onEditHandler}
                            /> :
                            explorerData.name}
                    </span>
                    {/* <div className={classes.actionButtons}>
                        <button onClick={(event) => handleInputVisiblity(event, true)}>Folder +</button>
                        <button onClick={(event) => handleInputVisiblity(event, false)}>File +</button>
                    </div> */}
                </div>
                {(selectedFolderId === explorerData.id && showInput.isVisible) &&
                    <div className={classes.textInput}>
                        <span style={{ display: 'flex', justifyContent: 'center' }}>
                            {showInput.isFolder ? (expand ? <AiOutlineFolderOpen color='#333' /> : <AiOutlineFolder color='#333' />) : <AiOutlineFile color='#333' />}
                        </span>
                        <input
                            type='text'
                            autoFocus
                            onBlur={() => setShowInput((prevState) => {
                                return { ...prevState, isVisible: false }
                            })}
                            onKeyDown={onAddHandler}
                        />
                    </div>
                }
                <div
                    className={expand ? classes.file : classes.file_hide}
                >
                    {explorerData.items.map(item => (
                        <span key={item.id}>
                            <Explorer
                                explorerData={item}
                                onInsertNode={onInsertNode}
                                onEditNode={onEditNode}
                                showInput={showInput}
                                setIsEdit={setIsEdit}
                                setShowInput={setShowInput}
                                selectedFolderId={selectedFolderId}
                                setSelectedFolderID={setSelectedFolderID}
                                isEdit={isEdit}
                            />
                        </span>
                    ))}
                </div>
            </div>
        )
    }
}

export default Explorer
