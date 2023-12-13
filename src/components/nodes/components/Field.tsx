import React, { useState, useEffect } from 'react';
import { Handle, Position } from 'reactflow';

import { Draggable } from 'react-beautiful-dnd';

import { EditSmall, MultiRow } from '@wix/wix-ui-icons-common';
import { Text, CustomModalLayout, Modal } from '@wix/design-system';

export default function Square(props: any) {
    const [field, setField] = useState(props.field);

    useEffect(() => {
        setField(props.field)
    });

    return (
        <div>

            <div
                className='group h-min px-2 py-3 flex flex-col gap-2 border-b border-D70 draggable hover:border hover:bg-D70'

            >
                <div className='flex gap-2 justify-between w-full group-hover:mb-1'>
                    <Draggable draggableId={String(props.index)} key={props.index} index={props.index}>
                        {(provided, snapshot) => (
                            <button
                                className='cursor-pointer'
                                {...provided.dragHandleProps}
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                            >
                                <MultiRow width={20} height={20} className='fill-D40' />
                            </button>
                        )}
                    </Draggable>
                    <div className='flex flex-col w-full'>
                        <Text size='small'>{field.displayName}</Text>
                        <Text size='tiny' className='text-D55'>{field.type}</Text>
                    </div>
                    <Text size='small' className='text-D55'>{field.key}</Text>
                </div>
                <div className='items-center justify-items-center hidden group-hover:flex'>
                    <div className='bg-D50 w-8 h-8 rounded flex justify-center items-center group hover:bg-B10'>
                        <EditSmall className='fill-D10 group-hover:fill-D80' />
                    </div>
                </div>
            </div>

            <Handle
                id={field.key}
                type='source'
                position={Position.Right}
                className='-right-5 top-auto -mt-[10%] w-3 h-3 bg-B20'
            />
        </div>
    );
}
