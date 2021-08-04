import React from 'react';
import Container from 'react-bootstrap/Container';
import AddProjectForm from './project-add/addProjectFrom';


export default function SubHeader(){
    return(
        <div className="subheader bg-white py-2">
            <Container className="d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                <div className="d-flex fs-6 fw-bold">My Projects</div>
                <div className="d-flex">
                    <AddProjectForm />
                </div>
            </Container>

        </div>
    );
}