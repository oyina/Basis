import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import {CreateProject } from '../../../redux/projectActions';


export default function AddProjectForm(){
    const dispatch = useDispatch();

    /*Modal */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*Form */
    const projectInitialState = {
        name: '', 
        id: uuidv4(),
        description: '',
        dueDate: '',
        status: 'progress',
        createdBy: 'Oyin Abatan',
        totalIssues: 0
    }
    const [project, setProject] = useState(projectInitialState);

    const handleInputChange = (e) => {
        const {name,  value} = e.target;
        setProject({...project, [name]:value});
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //add date so its
        const completeObject = {[project.id]: {...project, createdOn: new Date().toString()}}
        dispatch(CreateProject(completeObject));
        setProject(projectInitialState);
    }
    return(
        <React.Fragment>
            <Button variant="primary" size="sm" onClick={handleShow}>
                Add Project
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" name="name" value={project.name}  onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" name="description" value={project.description}  onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDueDate">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control type="date" placeholder="Select Date" name="dueDate" value={project.dueDate}  onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicId">
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter ID" name="id" value={project.id} onChange={handleInputChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
        
        
    );
}