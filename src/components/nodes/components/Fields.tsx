import React, { useState, useEffect } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Field from './Field';

export default function Square({ dataFields, dataCollectionId }: any) {
    const [fields, setFields] = useState(dataFields);

    useEffect(() => {
        setFields(fields)
    });

    return (
        <Droppable droppableId='ROOT' type='group'>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    {
                        fields.map((field: any, index: any) => {
                            return <Field key={index} field={field} index={index} dataCollectionId={dataCollectionId} />
                        })
                    }
                </div>
            )}
        </Droppable>
    );
}
