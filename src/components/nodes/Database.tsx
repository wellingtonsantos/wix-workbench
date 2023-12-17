import React, { useState, useContext } from 'react';
import { NodeProps, Handle, Position } from 'reactflow';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { DataCollectionSmall, AddSmall } from '@wix/wix-ui-icons-common';
import { Heading, CustomModalLayout, Modal, Input, Dropdown, FormField } from '@wix/design-system';

import Fields from './components/Fields';
import { newField, fieldTypes } from '../../dashboard/data';
import { toCamelCaseString } from './utils/camelCase';

import { CustomerProvider, CustomerContext } from '../../contexts/customer';

export default function Square(props: NodeProps) {
    const { collections }:any = useContext(CustomerContext);

    const [dataCollection, setDataCollection] = useState(props.data);
    const [shown, setShown] = useState(false);

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;
        const items = dataCollection.fields
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setDataCollection({ ...dataCollection, fields: items })
    }

    return (
        <div
            id={dataCollection.id}
            className='bg-white rounded-lg w-full h-full min-w-[140px] min-h-[100px] overflow-hidden'
            style={{
                border: props.selected ? '1px solid #7db5f9' : '1px solid #DFE5EB'
            }}
        >
            <div className='custom-drag-handle px-1 py-2 border-b-2 flex gap-2 justify-between'>
                <div className='flex justify-center items-center'>
                    <DataCollectionSmall width={40} />
                    <Heading size='tiny'>{dataCollection.displayName}</Heading>
                </div>
                <div className='flex'>
                    <button className='flex justify-center items-center group'
                        onClick={() => setShown(true)}
                    >
                        <AddSmall width={40} className='group-hover:fill-B10 group-hover:scale-125' />
                    </button>
                </div>
            </div>
            <div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Fields collectionId={dataCollection.id} dataFields={dataCollection.fields} />
                </DragDropContext>
            </div>
            <Handle
                id={dataCollection.id}
                type='target'
                position={Position.Left}
                className='-left-5 w-3 h-3 bg-B30'
            />
        </div>
    );
}
