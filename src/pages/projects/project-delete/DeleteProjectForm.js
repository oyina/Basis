import React, {useState} from 'react';
import { Modal, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { DeleteProject} from '../../../redux/projectActions';
import { useHistory } from 'react-router-dom'


export default function DeleteProjectForm({projectId}){
    const dispatch = useDispatch();
    const history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        dispatch(DeleteProject(projectId));
        history.push(`/projects`);
        
    }
  
    return (
      <React.Fragment>
        <Button variant="danger" onClick={handleShow} className="ms-2">
          Delete
        </Button>
  
        <Modal show={show} onHide={handleClose} centered className="text-center">
          <Modal.Header className="text-center">
            <Modal.Title className="text-center">Delete Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this project?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete Project
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
}