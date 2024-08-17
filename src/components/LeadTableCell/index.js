import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import './LeadCell.css';

function LeadCell({ value, index, onDrop, onClick, data, idRow}) {
    const ref = useRef();
    const typeCell = 'td#'+ idRow;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: typeCell,
        item: { index},
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
        canDrag: () =>{return value.length > 0}
    }), [index, value]);

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: typeCell,
        drop: (item) =>{ onDrop(item.index, index)},
        collect: (monitor) => { 
            const {index: dragIndex} = monitor.getItem() || {};
            if(dragIndex === index){
                return {}
            }
            return {
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop(),
            }
    },
    }), [index]);

    drag(drop(ref));

    return (
        <td
            ref={ref}
            className={"leadCell"}
            id={idRow}
            style={{
                opacity: isDragging ? 0.5 : 1,
                backgroundColor: isOver && canDrop ? 'lightblue' : 'white',
            }}
            onClick={onClick}
        >
            {value}
        </td>
    );
}

export default LeadCell;