import React, {useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProjectHeader from './project-header/ProjectHeader';
import SubHeader from './subHeader';

export default function Project(){
    const { projectId } = useParams();
    
    return(
        <React.Fragment>
            {/*Temporary Subheader*/}
            <div className="subheader bg-white py-2">
                <Container className="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                    <div className="d-flex fs-6 fw-bold">Project | Issue List</div>
                    <div className="d-flex">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">Search</span>
                            <input type="text" className="form-control" placeholder="Project or Issue" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                </Container>
            </div>
            {/* End Temporary Subheader*/}
            <Container>
                <ProjectHeader projectId={projectId} />
            </Container>
        </React.Fragment>
        
    );
}