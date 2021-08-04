import React, {useEffect, useState} from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import StatusBadge from '../components/statusBadge';
import ProjectsCRUD from '../../../redux/projectCRUD';
import EditProjectForm from '../project-edit/editProjectFrom';
import { selectProjects, updateProject } from '../../../redux/projectsSlice';
import DeleteProjectForm from '../project-delete/DeleteProjectForm';

export default function ProjectHeader({projectId}) {
    const projects = useSelector(selectProjects);
    const dispatch = useDispatch();
    const project = projects[projectId];
    
    const initialProjectState = {
        name: '', 
        id: null,
        description: '',
        dueDate: '',
        status: '',
        createdBy: '',
        totalIssues: 0,
        createdOn: ''
    }
    const [currentProject, setCurrentProject] = useState(initialProjectState);

    async function RetrieveProject (id){
        try {
            const res = await ProjectsCRUD.get(id);
            dispatch(updateProject(res.data));
            return Promise.resolve(res.data);
        }
        catch(err) {
            return Promise.reject(err);
        }
    } 
    
    useEffect(() => {
        if(project) {
            setCurrentProject(project);
            console.log('using redux');
        } else {
            RetrieveProject(projectId);
            console.log('using api');
        }
        
    }, [project]);
    
    return(
        
            <Row>
                <Col>
                    <Card className="my-5">
                        <Card.Body>
                            <div className="d-flex flex-wrap flex-sm-nowrap">
                                <div className="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                                    <img className="mw-50px" src="https://preview.keenthemes.com/metronic8/demo2/assets/media/svg/brand-logos/volicity-9.svg" alt="image" />                                
                                </div>
                                
                                <div className="flex-grow-1">
                                    <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                        {/*begin::Details*/}
                                        <div className="d-flex flex-column">
                                            {/*begin::Status*/}
                                            <div className="d-flex align-items-center mb-1">
                                                <div className="text-gray-800 fs-2 fw-bolder me-3">{currentProject.name}</div>
                                                <StatusBadge status={currentProject.status} />
                                            </div>
                                            {/*end::Status*/}
                                            {/*begin::Description*/}
                                            <div className="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">{currentProject.description}</div>
                                            {/*end::Description*/}
                                        </div>
                                        {/*end::Details*/}
                                        <div className="d-flex">
                                            {currentProject.id === null ?
                                                <div>loading</div> :
                                                <EditProjectForm currentProject={currentProject} refreshCurrentProject={setCurrentProject}/>
                                                
                                            }
                                            <DeleteProjectForm projectId={projectId} />
                                            
                                            
                                        </div>
                                        

                                    </div>
                                    {/*begin::Info*/}
                                    <div className="d-flex">
                                            {/*begin::Due*/}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-2 mb-3">
                                                <div className="text-gray-800 fw-bolder">{currentProject.createdOn || 'TBD'}</div>
                                                <div className="text-muted">Start Date</div>
                                            </div>
                                            {/*end::Due*/}
                                            {/*begin::Due*/}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-2 mb-3">
                                                <div className="text-gray-800 fw-bolder">{currentProject.dueDate || 'TBD'}</div>
                                                <div className="text-muted">Due Date</div>
                                            </div>
                                            {/*end::Due*/}
                                            {/*begin::Budget*/}
                                            <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mb-3">
                                                <div className="text-gray-800 fw-bolder">{currentProject.totalIssues || '0'}</div>
                                                <div className="text-muted">Issues</div>
                                            </div>
                                            {/*end::Budget*/}
                                        </div>
                                        {/*end::Info*/}
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        
    );

}