import {  useForm } from "react-hook-form";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import useCrud from "./useCrud";
import Modal from 'react-bootstrap/Modal';

const Formulario = (props) => {

    const url = 'http://users-crud.academlo.tech/';
    const { register, handleSubmit, reset } = useForm();
    const [ createUsers] = useCrud(url);

    const onSubmit = (data) => {
        createUsers('/users', data);
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
            image_url: '',
        })
    }

    return(
        <>

    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Formulario
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            

        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextNombre">
            <Form.Label column sm="2">
            Nombre
            </Form.Label>
            <Col sm="10">
            <Form.Control  defaultValue="" placeholder="Kevin" {...register("first_name")}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextLastName">
            <Form.Label column sm="2">
            Apellidos
            </Form.Label>
            <Col sm="10">
            <Form.Control  defaultValue="" placeholder="Borge" {...register("last_name")}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Correo
            </Form.Label>
            <Col sm="10">
            <Form.Control  defaultValue="" placeholder="tntkevin065@outlook.com" {...register("email")}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">
            Contraseña
            </Form.Label>
            <Col sm="10">
            <Form.Control type="password" placeholder="" {...register("password")}/>
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextCumple">
            <Form.Label column sm="2">
            Cumpleaños
            </Form.Label>
            <Col sm="10">
            <Form.Control type="date" defaultValue="" {...register("birthday")}/>
            </Col>
        </Form.Group>


        <Form.Group as={Row} className="mb-3" controlId="formPlaintextAvatar">
            <Form.Label column sm="2">
            Avatar
            </Form.Label>
            <Col sm="10">
            <Form.Control type="text" placeholder="" {...register("image_url")}/>
            </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
        Agregar nuevo usuario
        </Button>

    </Form>


        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
    </Modal>



        {/* <Alert show={show} variant="success">
        
        <Alert.Heading>Nuevo usuario</Alert.Heading>

        <Button onClick={() => setShow(false)} variant="outline-success">
            X
        </Button>

        
    </Alert> */}
        </>
    )
}

export default Formulario;