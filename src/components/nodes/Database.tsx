import React, { useState } from 'react';
import { NodeProps, Handle, Position } from 'reactflow';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { DataCollectionSmall, EditSmall, AddSmall, MultiRow } from '@wix/wix-ui-icons-common';
import { Heading, Text, CustomModalLayout, Modal } from '@wix/design-system';

import Fields from './components/Fields';
import { newField } from '../../dashboard/data';

export default function Square(props: NodeProps) {
    const [data, setData] = useState(props.data);
    const [shown, setShown] = React.useState(false);

    function handleOnDragEnd(result:any) {
        if(!result.destination) return;
        const items = data.fields
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setData({...data, fields: items})
    }

    function addField({ key, displayName, type }: any) {
        const newF = newField({key, displayName, type})
        setData({...data, fields: [...data.fields, newF]})
        console.log(data.fields)
        setShown(false)
    }

    return (
        <div
            id={data.id}
            className='bg-white rounded-lg w-full h-full min-w-[240px] min-h-[200px] overflow-hidden'
            style={{
                border: props.selected ? '1px solid #7db5f9' : '0px solid #7db5f9'
            }}
        >
            <div className='custom-drag-handle px-2 py-3 border-b-2 flex gap-4 justify-between'>
                <div className='flex justify-center items-center'>
                    <DataCollectionSmall width={40} />
                    <Heading size='tiny'>{data.displayName}</Heading>
                </div>
                <div className='flex'>
                    <button className='flex justify-center items-center group'
                        onClick={() => setShown(true)}
                    >
                        <AddSmall width={40} className='group-hover:fill-B10 group-hover:scale-125' />
                    </button>
                    <Modal
                        isOpen={shown}
                        onRequestClose={() => setShown(false)}
                        shouldCloseOnOverlayClick
                        screen="desktop"
                    >
                        <CustomModalLayout
                            primaryButtonText="Confirmar"
                            primaryButtonOnClick={() => addField({ key: 'new', displayName: 'New', type: 'TEXT' })}
                            secondaryButtonText="Cancelar"
                            secondaryButtonOnClick={() => setShown(false)}
                            onCloseButtonClick={() => setShown(false)}
                            title="Adicionar campo"
                            overflowY="none"
                            content={
                                <Heading>Olá</Heading>
                            }
                        />
                    </Modal>
                </div>
            </div>
            <div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Fields fields={data.fields} />
                </DragDropContext>
            </div>
            <Handle
                id={data.id}
                type='target'
                position={Position.Left}
                className='-left-5 w-3 h-3 bg-B30'
            />
        </div>
    );
}
