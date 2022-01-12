import React, { useState } from "react";
import ChildrenWraper from "./ChildrenWraper";
import PropTypes from 'prop-types';
import {FaRegCalendarAlt} from 'react-icons/fa'
import {MdOutlineLabelImportant} from 'react-icons/md'
import {FiDelete, FiEdit3} from 'react-icons/fi'
const { DateTime } = require("luxon");

const Todo = ({todo, toggleComplete, removeTodo}) => {

  const {description, deadline, id, completed} = todo

  const [edit, setEdit] = useState(true);
  const [editedDescription, setEditedDescription] = useState(description)
  const [newDeadline, setNewDeadline] = useState(deadline)
  const newd = DateTime.fromISO(newDeadline).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
  console.log(newd);

  return (
    <ChildrenWraper>
      <li style={{display: 'flex', justifyContent: 'space-between'}}>
        {edit ? (
          <>
            <div
              style={{ textDecoration: completed ? "line-through" : null, color: completed ? "red" : "black", flex: '1', textAlign: 'left', paddingLeft: '10px',  fontWeight: 'bold', fontSize:'18px' }}
            >
              <MdOutlineLabelImportant style = {{color: 'darkblue'}} />{' '}{editedDescription}
            </div>
            <div
              style={{ textDecoration: completed ? "line-through" : null, color: completed ? "red" : "black", flex: 'initial'  }}
            >
              <FaRegCalendarAlt style={{color: 'darkblue', fontSize: '16px'}}/> {' '}{newd}
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              onChange={(e) => setEditedDescription(e.target.value)}
              value={editedDescription}
            ></input>
            <input
              type="date"
              onChange={(e) => setNewDeadline(e.target.value)}
              value={newDeadline}
            ></input>
          </>
        )}
        <div style = {{flex: 'initial'}}>

        <input
          style = {{marginLeft: '25px'}}
          type="checkbox"
          checked={completed}
          onChange={ () => toggleComplete(id) }
        />
        <button onClick={ () => removeTodo(id)}><FiDelete style={{fontSize: '16px'}} /></button>
        <button onClick={ () => setEdit(!edit)}>{ edit ? <FiEdit3 style={{fontSize: '16px'}} /> : 'Update' }</button>
        </div>

      </li>
    </ChildrenWraper>
  );
}

Todo.propTypes = {
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool
}

export default Todo;
