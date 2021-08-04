import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from "react-bootstrap/ProgressBar";
import { Link } from "react-router-dom";
import StatusBadge from "../pages/projects/components/statusBadge";

export default function ProjectCard({project}){
    return (
        <Link className="project-card" to={`projects/${project.id}`}>
        <Card className="h-100" >
            <Card.Header className="border-0">
                    <Card.Title>
                    <div className="symbol symbol-50px w-50px bg-light">
                        <img src="https://preview.keenthemes.com/metronic8/demo2/assets/media/svg/brand-logos/plurk.svg" alt="image" className="p-3" />
                    </div>
                    </Card.Title>
                    <div className="card-toolbar">
                        <StatusBadge status={project.status}/>
                    </div>
            </Card.Header>
            <Card.Body>
                <div className="fs-3 fw-bolder text-dark">{project.name}</div>
                <p className="text-muted fs-6 mt-1 mb-3">{project.description}</p> 
               
                {/*begin::Info*/}
                <div className="d-flex flex-wrap mb-3">
                    {/*begin::Due*/}
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-2 mb-3">
                        <div className="text-gray-800 fw-bolder">{project.dueDate || 'TBD'}</div>
                        <div className="text-muted">Due Date</div>
                    </div>
                    {/*end::Due*/}
                    {/*begin::Budget*/}
                    <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                        <div className="text-gray-800 fw-bolder">{project.totalIssues || '0'}</div>
                        <div className="text-muted">Issues</div>
                    </div>
                    {/*end::Budget*/}
                </div>
                {/*end::Info*/}
                <ProgressBar now={60} className="mb-3" />

                <p>{project.id}</p>
            
            </Card.Body>
        </Card>
        </Link>
    );
}