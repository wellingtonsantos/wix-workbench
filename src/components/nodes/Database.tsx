import React, { useState } from 'react';
import { NodeProps, Handle, Position } from 'reactflow';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { DataCollectionSmall, EditSmall, AddSmall, MultiRow } from '@wix/wix-ui-icons-common';
import { Heading, Text, CustomModalLayout, Modal, Input, Dropdown, FormField } from '@wix/design-system';

import Fields from './components/Fields';
import { newField, fieldTypes } from '../../dashboard/data';
import { toCamelCaseString } from './utils/camelCase';

export default function Square(props: NodeProps) {
    const [data, setData] = useState(props.data);
    const [shown, setShown] = useState(false);
    const [field, setField] = useState({ key: '', displayName: '', type: '' })
    const [fieldError, setFieldError] = useState('')

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;
        const items = data.fields
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setData({ ...data, fields: items })
    }

    function addField() {
        try {
            if (!field.type) {
                throw new Error('O tipo do campo é obrigátorio!');
            }
            if (!field.displayName) {
                throw new Error('O nome do campo é obrigátorio!');
            }
            if (!field.key) {
                throw new Error('O id do campo é obrigátorio!');
            }

            const newFieldData = newField(field)
            setData({ ...data, fields: [...data.fields, newFieldData] })
            setShown(false)
            setField({ key: '', displayName: '', type: '' })
        } catch (error) {
            setFieldError(String(error))
        }
    }

    return (
        <div
            id={data.id}
            className='bg-white rounded-lg w-full h-full min-w-[240px] min-h-[200px] overflow-hidden'
            style={{
                border: props.selected ? '1px solid #7db5f9' : '1px solid #DFE5EB'
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
                        screen='desktop'
                    >
                        <CustomModalLayout
                            primaryButtonText='Confirmar'
                            primaryButtonOnClick={() => addField()}
                            secondaryButtonText='Cancelar'
                            secondaryButtonOnClick={() => setShown(false)}
                            onCloseButtonClick={() => setShown(false)}
                            title='Adicionar campo'
                            overflowY='none'
                            content={
                                <div className='flex flex-col gap-4'>
                                    <FormField id='type' label='Selecione o tipo do campo' labelPlacement='top'>
                                        <Dropdown onSelect={(e) => { setField({ ...field, type: e.value }) }} id='type' size='medium' placeholder='Selecione o tipo do campo' options={fieldTypes} required={true} />
                                    </FormField>
                                    <FormField id='displayName' label='Nome do campo' labelPlacement='top'>
                                        <Input value={field.displayName} onChange={({ target }) => {
                                            setField({ 
                                                ...field, 
                                                key: toCamelCaseString(target.value), 
                                                displayName: target.value
                                            })
                                        }} id='displayName' size='medium' placeholder='Nome do campo' required={true} />
                                    </FormField>
                                    <FormField id='key' label='ID do campo' labelPlacement='top'>
                                        <Input value={field.key} onChange={({ target }) => { setField({ ...field, key: target.value }) }} id='key' size='medium' placeholder='ID do campo' required={true} />
                                    </FormField>
                                </div>
                            }
                            footnote={
                                fieldError &&
                                <p>{fieldError}</p>
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
