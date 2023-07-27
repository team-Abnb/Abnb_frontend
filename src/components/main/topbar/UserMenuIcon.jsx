import React from 'react';

function UserMenuIcon() {
    return (
        <div>
            <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                    display: 'block',
                    fill: 'none',
                    height: '16px',
                    width: '16px',
                    stroke: 'currentcolor',
                    strokeWidth: 3,
                    overflow: 'visible',
                }}
            >
                <g fill="none" fillRule="nonzero">
                    <path d="m2 16h28" />
                    <path d="m2 24h28" />
                    <path d="m2 8h28" />
                </g>
            </svg>
        </div>
    );
}

export default UserMenuIcon;
