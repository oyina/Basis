import React, {useEffect} from 'react';
import { Container, Row, Col, Spinner} from 'react-bootstrap';
import ProjectCard from '../../components/projectCard';
import { useSelector, useDispatch } from 'react-redux';
import { selectProjects } from '../../redux/projectsSlice';
import { RetrieveProjects} from '../../redux/projectActions';
import SubHeader from './subHeader';



export default function Projects() {
    const projects = useSelector(selectProjects);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(RetrieveProjects());
    }, [dispatch]);

    return (
        <React.Fragment>
        <SubHeader />
        <Container className="my-5">
            { Object.keys(projects).length === 0 ?
                <Row>
                    <Col className="text-center">
                        <Spinner animation="border" variant="primary"  />
                    </Col>
                </Row>
                :
                <Row>
                {Object.values(projects).map((project) => (
                        <Col key={project.id} xs={6} className="mb-3">
                            <ProjectCard project={project}/>
                        </Col>
                    ))}
                </Row> 
            }            
        </Container>
        </React.Fragment>
    );
}