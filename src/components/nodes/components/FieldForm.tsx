import React, { useState, useContext } from 'react';
import { Text, CustomModalLayout, Modal, Input, Dropdown, FormField } from '@wix/design-system';
import { toCamelCaseString } from '../utils/camelCase';
import { CustomerContext } from '../../../contexts/customer';
import { fieldTypes } from '../../../dashboard/data';

export default function FieldForm({ shown, setShown, collectionId }: any) {
    // const { addField } = useContext(CustomerContext)
    const [newField, setNewField] = useState({ key: '', displayName: '', type: '' })
    const [fieldError, setFieldError] = useState('')

    function sendForm(dataField : any) {
        try {
            if (!dataField.type) {
                throw new Error('O tipo do campo é obrigátorio!');
            }
            if (!dataField.displayName) {
                throw new Error('O nome do campo é obrigátorio!');
            }
            if (!dataField.key) {
                throw new Error('O id do campo é obrigátorio!');
            }

            
            // addField(collectionId, dataField)
            setShown(false)
            setNewField({ key: '', displayName: '', type: '' })
        } catch (error) {
            setFieldError(String(error))
        }
    }

    return (
        <Modal
            isOpen={shown}
            onRequestClose={() => setShown(false)}
            shouldCloseOnOverlayClick
            screen='desktop'
        >
            <CustomModalLayout
                primaryButtonText='Confirmar'
                primaryButtonOnClick={() => sendForm(newField)}
                secondaryButtonText='Cancelar'
                secondaryButtonOnClick={() => setShown(false)}
                onCloseButtonClick={() => setShown(false)}
                title='Adicionar campo'
                overflowY='none'
                content={
                    <div className='flex flex-col gap-4'>
                        <FormField id='type' label='Selecione o tipo do campo' labelPlacement='top'>
                            <Dropdown onSelect={(e) => { setNewField({ ...dataField, type: e.value }) }} id='type' size='medium' placeholder='Selecione o tipo do campo' options={fieldTypes} required={true} />
                        </FormField>
                        <FormField id='displayName' label='Nome do campo' labelPlacement='top'>
                            <Input value={dataField.displayName} onChange={({ target }) => {
                                setNewField({
                                    ...dataField,
                                    key: toCamelCaseString(target.value),
                                    displayName: target.value
                                })
                            }} id='displayName' size='medium' placeholder='Nome do campo' required={true} />
                        </FormField>
                        <FormField id='key' label='ID do campo' labelPlacement='top'>
                            <Input value={dataField.key} onChange={({ target }) => { setNewField({ ...dataField, key: target.value }) }} id='key' size='medium' placeholder='ID do campo' required={true} />
                        </FormField>
                    </div>
                }
                footnote={
                    fieldError &&
                    <Text>{fieldError}</Text>
                }
            />
        </Modal>
    );
}
