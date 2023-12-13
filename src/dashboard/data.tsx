export const data = () => {
    return {
        "collections": [
            {
                "id": "my-second-collection",
                "collectionType": "NATIVE",
                "displayName": "My Second Collection",
                "displayField": "name",
                "capabilities": {
                    "dataOperations": [
                        "AGGREGATE",
                        "BULK_INSERT",
                        "BULK_REMOVE",
                        "BULK_SAVE",
                        "BULK_UPDATE",
                        "COUNT",
                        "DISTINCT",
                        "FIND",
                        "GET",
                        "INSERT",
                        "INSERT_REFERENCE",
                        "IS_REFERENCED",
                        "QUERY_REFERENCED",
                        "REMOVE",
                        "REMOVE_REFERENCE",
                        "REPLACE_REFERENCES",
                        "SAVE",
                        "TRUNCATE",
                        "UPDATE"
                    ],
                    "collectionOperations": ["UPDATE", "REMOVE"]
                },
                "fields": [
                    {
                        "key": "title",
                        "displayName": "Book title",
                        "type": "TEXT",
                        "systemField": false,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "author_ref",
                        "displayName": "Book author",
                        "type": "REFERENCE",
                        "typeMetadata": {
                            "reference": { "referencedCollection": "my-first-collection" }
                        },
                        "systemField": false,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "_id",
                        "displayName": "ID",
                        "type": "TEXT",
                        "systemField": true,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "_owner",
                        "displayName": "Owner",
                        "type": "TEXT",
                        "systemField": true,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "_createdDate",
                        "displayName": "Created Date",
                        "type": "DATETIME",
                        "systemField": true,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "_updatedDate",
                        "displayName": "Updated Date",
                        "type": "DATETIME",
                        "systemField": true,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    }
                ],
                "permissions": {
                    "insert": "ADMIN",
                    "update": "ADMIN",
                    "remove": "ADMIN",
                    "read": "ADMIN"
                },
                "revision": "1",
                "plugins": [],
                "pagingModes": ["OFFSET"],
                "createdDate": "2022-09-19T15:15:59.099Z",
                "updatedDate": "2022-09-19T15:15:59.099Z"
            },
            {
                "id": "my-first-collection",
                "collectionType": "NATIVE",
                "displayName": "My First Collection",
                "displayField": "name",
                "capabilities": {
                    "dataOperations": [
                        "AGGREGATE",
                        "BULK_INSERT",
                        "BULK_REMOVE",
                        "BULK_SAVE",
                        "BULK_UPDATE",
                        "COUNT",
                        "DISTINCT",
                        "FIND",
                        "GET",
                        "INSERT",
                        "INSERT_REFERENCE",
                        "IS_REFERENCED",
                        "QUERY_REFERENCED",
                        "REMOVE",
                        "REMOVE_REFERENCE",
                        "REPLACE_REFERENCES",
                        "SAVE",
                        "TRUNCATE",
                        "UPDATE"
                    ],
                    "collectionOperations": ["UPDATE", "REMOVE"]
                },
                "fields": [
                    {
                        "key": "name",
                        "displayName": "First Name",
                        "type": "TEXT",
                        "systemField": false,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "age",
                        "displayName": "Age",
                        "type": "NUMBER",
                        "systemField": false,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "_id",
                        "displayName": "ID",
                        "type": "TEXT",
                        "systemField": true,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "_owner",
                        "displayName": "Owner",
                        "type": "TEXT",
                        "systemField": true,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "_createdDate",
                        "displayName": "Created Date",
                        "type": "DATETIME",
                        "systemField": true,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    },
                    {
                        "key": "_updatedDate",
                        "displayName": "Updated Date",
                        "type": "DATETIME",
                        "systemField": true,
                        "capabilities": {
                            "sortable": true,
                            "queryOperators": [
                                "EQ",
                                "LT",
                                "GT",
                                "NE",
                                "LTE",
                                "GTE",
                                "STARTS_WITH",
                                "ENDS_WITH",
                                "CONTAINS",
                                "HAS_SOME",
                                "HAS_ALL",
                                "EXISTS",
                                "URLIZED"
                            ]
                        },
                        "encrypted": false
                    }
                ],
                "permissions": {
                    "insert": "ADMIN",
                    "update": "ADMIN",
                    "remove": "ADMIN",
                    "read": "ADMIN"
                },
                "revision": "1",
                "plugins": [],
                "pagingModes": ["OFFSET"],
                "createdDate": "2022-09-19T15:10:56.603Z",
                "updatedDate": "2022-09-19T15:10:56.603Z"
            }
        ],
        "pagingMetadata": {
            "count": 2,
            "offset": 0,
            "total": 2,
            "tooManyToCount": false
        }
    }
}

export const newField = ({ key, displayName, type }: any) => {
    return {
        key,
        displayName: displayName ? displayName : key,
        type: type ? type : 'UNKNOWN_FIELD_TYPE',
    }
}

export const fieldTypes = () => {
    return [
        { label: 'Texto', value: 'TEXT' },
        { label: 'Número', value: 'NUMBER' },
    ]
}