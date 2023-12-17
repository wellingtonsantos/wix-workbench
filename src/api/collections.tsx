const appId = '419d6dec-9375-4f4c-940a-a760a699b858'
const appSecretKey = '29fd562e-e34e-455f-9abd-d8d383ce5445'
const clientId = 'd2a4127e-5b6d-4a35-b843-aa705e8d12de'
const apiKey = 'IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjFiNmUxYmVhLWMxZWEtNDRmOC05NzlhLTUxZDNlZDRkZDY1ZVwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcImMyZjM4YjA2LTg0NjItNGVjNC04OTAzLTE3Y2RjYTc3YTJhY1wifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCJlN2U4NjYzYS1hNWM2LTRkYTQtYjViOC0zMjkyN2NmNmY4N2ZcIn19IiwiaWF0IjoxNzAyNzU1MjE0fQ.GluIOPIpsazsIFRBUQxoZuFLP8Xszn9-YFUs2C6PFRHxXMCylOWME3w90jMTd4l4RirRrXMYKhKU4YF2dQOl3unZsCRQ3tnPrQ1p0PFdj8QmGQmfnGV3L4fwYHUWuN3ZCamUQK9IIAvKxfZX4uw3h_saWwSlbsLilnMM6V8U5zl6rhVwBQ4U9CZx4Q7L-q_GD4fitXXHHlIgnGeaOhF3EX57MLxLH4XMvBEmjUfeLKYrOWFmch_iEBOij4Cds-_YfDQtPBFeC6mmixunUs27OcdCOHrgLPrmPVH8ZxYgVTxBOEom3t1T4ntLlptQbGc78I9acql2-XM9uG0A_el6kQ'

import { createClient, ApiKeyStrategy } from '@wix/sdk';
import { collections, items } from '@wix/data';

const wixClient = createClient({
    modules: { collections, items },
    auth: ApiKeyStrategy({
        siteId: '02c4d16f-ae60-4bb4-8e79-d5c94084d63d',
        apiKey: apiKey
    })
});

const collection = {
    _id: 'cmsworkbench',
    fields: [
        {
            key: 'type',
            type: 'TEXT'
        }, {
            key: 'dragHandle',
            type: 'TEXT'
        }, {
            key: 'position',
            type: 'OBJECT'
        }, {
            key: 'data',
            type: 'OBJECT'
        }
    ],
    permissions: {
        insert: 'ADMIN',
        update: 'ADMIN',
        remove: 'ADMIN',
        read: 'ANYONE'
    }
}

export async function listDataCollections() {
    return await wixClient.collections.getDataCollection('cmsworkbench')
        .then(async (res) => {
            // console.log(res)
            const { collections } = await wixClient.collections.listDataCollections()
            const collectionNodes = await queryDataItems({
                dataCollectionId: 'cmsworkbench',
                consistentRead: true
            })
            console.log('collectionNodes', collectionNodes)
            console.log('collections', collections)

            function getNode(collectionId: string) {
                const node = collectionNodes.filter(i => {
                    if (collectionId === i._id) {
                        return i
                    }
                })
                return node[0]
            }

            if (collections.length > 0) {
                const collectionNodes: any = []

                collections.map((collection: any) => {
                    const node = getNode(collection._id)
                    console.log('node', node)

                    if (collection._id !== 'cmsworkbench') {
                        if (collection.collectionType !== 'WIX_APP') {
                            collectionNodes.push({
                                _id: collection._id,
                                data: {
                                    _id: collection._id,
                                    type: 'database',
                                    dragHandle: '.custom-drag-handle',
                                    position: {
                                        x: node ? node.position.x : 750,
                                        y: node ? node.position.y : 350
                                    },
                                    data: collection
                                }
                            })
                        }
                    }
                })

                return await bulkSaveDataItems({
                    dataCollectionId: 'cmsworkbench',
                    dataItems: collectionNodes
                })
                    .then(async () => {
                        return await queryDataItems({
                            dataCollectionId: 'cmsworkbench',
                            consistentRead: true
                        })
                        .then((nodes) => {
                            const edges:any = []

                            nodes.map((node)=> {
                                const fields = node.data.fields

                                fields.map((field: any) => {
                                    if(field.type === 'REFERENCE') {
                                        edges.push({
                                            type: 'default',
                                            source: node._id,
                                            sourceHandle: field.key,
                                            target: field.typeMetadata.reference.referencedCollectionId,
                                            targetHandle: null,
                                            markerEnd: {
                                                type: 'arrow'
                                            },
                                            id: `${node._id}-${field.key}`
                                        })
                                    }
                                })
                            })

                            return { nodes, edges }
                        })
                    })
            }
        })
        // .catch(async (err) => {
        //     return await createDataCollection({ collection })
        //         .then(async (res) => {
        //             const { collections } = await wixClient.collections.listDataCollections()
        //             if (collections.length > 0) {
        //                 const collectionNodes = collections.map(collection => {
        //                     if (collection._id !== 'cmsworkbench') {
        //                         return {
        //                             type: 'database',
        //                             dragHandle: '.custom-drag-handle',
        //                             position: {
        //                                 x: 750,
        //                                 y: 350
        //                             },
        //                             data: collection
        //                         }
        //                     }
        //                 })

        //                 return await bulkSaveDataItems({
        //                     dataCollectionId: 'cmsworkbench',
        //                     dataItems: collectionNodes
        //                 })
        //             }
        //         })
        // })
}

async function createDataCollection(collection: any) {
    return await wixClient.collections.createDataCollection(collection);
}

async function bulkSaveDataItems(options: any) {
    return await wixClient.items.bulkSaveDataItems(options);
}

async function queryDataItems(options: any) {
    const { items } = await wixClient.items.queryDataItems(options).find();
    return items.map((i: any) => {
        return { ...i.data, id: i.data._id }
    })
}

// const newCollectionsNodes = (collections: any) => {

// }
