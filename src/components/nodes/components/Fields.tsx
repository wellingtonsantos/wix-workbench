import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Field from './Field';

export default function Square(props: any) {
    const [fields, setFields] = useState(props.fields);

    useEffect(() => {
        setFields(props.fields)
    });

    return (
        <Droppable droppableId='ROOT' type='group'>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {
                        fields.map((field: any, index: any) => {
                            return <Field key={index} field={field} index={index} />
                        })
                    }
                </div>
            )}
        </Droppable>
    );
}
