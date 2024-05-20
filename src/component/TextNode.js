import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import './textNode.css';

export default memo(({ data }) => {
    return (
        <>
            <Handle type="source" position={Position.Right} />
            <div className='text-node-container'>
                <div className='header'>
                    Send Message
                </div>
                <div className='body'>
                    {data.label}
                </div>
            </div>
            <Handle type="target" position={Position.Left} />
        </>
    );
});
