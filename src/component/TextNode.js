import React, { memo } from 'react';
import { Handle, useStore, Position } from 'reactflow';
import './textNode.css';

export default memo(({ data }) => {
    // console.log(useStore())
    return (
        <>
            <Handle type="target" position={Position.Right} />
            <div className='text-node-container'>
                <div className='header'>
                    Send Message
                </div>
                <div className='body'>
                    {data.label}
                </div>
            </div>
            <Handle type="source" position={Position.Left} />
        </>
    );
});
