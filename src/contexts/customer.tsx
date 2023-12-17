import React, { createContext, useEffect, useState } from "react";
import { data, newField, newCollection } from '../../src/dashboard/data';

import { listDataCollections } from '../api/collections';

type PropsUserContext = {
    collections: any,
    setDatabase: React.Dispatch<React.SetStateAction<any>>,
    addField: any
}

export const CustomerContext = createContext({
    collections: await listDataCollections()
});

export const CustomerProvider = ({ children }: any) => {
    const [collections, setCollections] = useState<any>(data);

    useEffect(() => {
        async function getCollections() {
            setCollections(await listDataCollections())
        }
        getCollections()
    }, [])

    function addField(collectionId: string, dataField: any) {
        let cols
        let collection = collections.filter((i: any, index: number) => {
            if (i.id === collectionId) {
                cols = collections.splice(index, 1)
                return i
            }
        })

        const newFieldData = newField(dataField)
        const fields = [...collection[0].fields, newFieldData]
        console.log('field in context', fields)
        // setDatabase({ ...collection[0], fields })
    }

    // function addCollection() {
    //     const collections = database.collections
    //     const newCol = newCollection('test', 'test')
    //     setDatabase([...collections, ...newCol])
    // }

    return (
        <CustomerContext.Provider value={{ collections: collections }} >
            {children}
        </CustomerContext.Provider>
    )
}