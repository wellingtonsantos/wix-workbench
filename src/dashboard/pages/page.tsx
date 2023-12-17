import React, { useCallback, useEffect, useContext } from 'react';
import ReactFlow, {
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  addEdge,
  useEdgesState,
  useNodesState,
  MarkerType,
  MiniMap,
  NodeChange
} from 'reactflow';
import 'reactflow/dist/style.css';
import * as Toolbar from '@radix-ui/react-toolbar';

import { zinc } from 'tailwindcss/colors';
import '../global.css';
import "@wix/design-system/styles.global.css";
import '@reactflow/node-resizer/dist/style.css';

import Database from '../../components/nodes/Database';
import DefaultEdge from '../../components/edges/DefaultEdge';

import { DataCollection } from '@wix/wix-ui-icons-common';

import { CustomerProvider, CustomerContext } from '../../contexts/customer';

const NODE_TYPES = {
  database: Database,
}

const EDGE_TYPES = {
  default: DefaultEdge,
}

const INITIAL_NODES = [
] satisfies Node[]

export default function Index() {
  const { collections }:any = useContext(CustomerContext);

  const [edges, setEdges, onEdgesChange] = useEdgesState(collections.edges)
  const [nodes, setNodes, onNodesChange] = useNodesState(collections.nodes)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge({ ...connection, markerEnd: { type: MarkerType.Arrow } }, edges))
  }, [])
  
  async function addDataBase() {
    // setNodes(nodes => [
    //   ...nodes,
    //   {
    //     id: crypto.randomUUID(),
    //     type: 'database',
    //     dragHandle: '.custom-drag-handle',
    //     position: {
    //       x: 750,
    //       y: 350
    //     },
    //     data: database.collections[1]
    //   }
    // ])
  }

  // useEffect(() => {
  
  // });

  return (
    <CustomerProvider>
      <div className='w-screen h-screen'>
        <ReactFlow
          snapToGrid={true}
          nodeTypes={NODE_TYPES}
          edgeTypes={EDGE_TYPES}
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodesChange={onNodesChange}
          // connectionMode={ConnectionMode.Loose}
          defaultEdgeOptions={{
            type: 'default'
          }}
          defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        >
          <Background
            gap={12}
            size={2}
            color={zinc[200]}
          />
          <Controls />
          <MiniMap />
        </ReactFlow>

        <Toolbar.Root className='fixed flex gap-2 bottom-20 left-1/2 -translate-x-1/2 bg-D80 rounded-2xl shadow-lg border border-D60 py-3 px-3 h-min w-96 overflow-x-scroll no-scrollbar'>
          <Toolbar.Button
            onClick={addDataBase}
            className='w-12 h-12 rounded border flex flex-col items-center justify-center transition-transform hover:border-B10 group hover:scale-110'>
            <DataCollection className='group-hover:fill-B10' />
            {/* <Text size='tiny'>Nova coleção</Text> */}
          </Toolbar.Button>
        </Toolbar.Root>
      </div>
    </CustomerProvider>
  );
}
