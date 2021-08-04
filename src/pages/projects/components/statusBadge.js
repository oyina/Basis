import React from 'react';

export default function StatusBadge({status}) {
    const badge = status === 'progress' ? {class: 'primary', text: 'In Progress'} : {class: 'success', text: 'Completed'};
    return(
        <span className={`badge badge-light-${badge.class} fw-bolder me-auto px-2 py-2`}>{badge.text}</span>
    )
}