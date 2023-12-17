import React, { useState, useEffect, useContext } from 'react';
import { Handle, Position } from 'reactflow';

import { Draggable } from 'react-beautiful-dnd';

import { EditSmall, MultiRow, DeleteSmall } from '@wix/wix-ui-icons-common';
import { Text, CustomModalLayout, Modal } from '@wix/design-system';

import { CustomerProvider, CustomerContext } from '../../../contexts/customer';

export default function Square(props: any) {
    const [field, setField] = useState(props.field);

    useEffect(() => {
        setField(props.field)
    });

    return (
        <div>

            <div
                className='group h-min px-2 py-2 flex flex-col gap-2 border-b border-D70 draggable hover:border hover:bg-D70'
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
                <div className='items-center justify-items-center gap-1 hidden group-hover:flex'>
                    <button className='bg-D50 w-8 h-8 rounded flex justify-center items-center group hover:bg-B10'>
                        <EditSmall className='fill-D10 group-hover:fill-D80' />
                    </button>
                    <button className='bg-D50 w-8 h-8 rounded flex justify-center items-center group hover:bg-R10'>
                        <DeleteSmall className='fill-D10 group-hover:fill-D80' />
                    </button>
                </div>
            </div>

            {
                field.type === 'REFERENCE' &&
                <Handle
                    id={field.key}
                    type='source'
                    position={Position.Right}
                    className='-right-5 top-auto -mt-[10%] w-3 h-3 bg-B20'
                />
            }
        </div>
    );
}
