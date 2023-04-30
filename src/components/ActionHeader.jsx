import React from 'react'
import classes from './ActionHeader.module.css';
import { AiOutlineFileAdd, AiOutlineDelete, AiOutlineEdit, AiOutlineFolderAdd } from "react-icons/ai";

const ActionHeader = ({ onVisibilty, onDelete, onEdit }) => {
    return (
        <div className={classes.actionButtons}>
            <AiOutlineFolderAdd size='1.5rem' onClick={() => onVisibilty(true)} />
            <AiOutlineFileAdd size='1.5rem' onClick={() => onVisibilty(false)} />
            <AiOutlineEdit size='1.5rem' onClick={onEdit} />
            <AiOutlineDelete size='1.5rem' onClick={onDelete} />
        </div>
    )
}

export default ActionHeader
