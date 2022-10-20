import React, { Profiler, useState } from "react";
import { Button, Modal } from "react-bootstrap";

function ViewProfile(props) {
    // const [show, setShow] = useState(true);
    console.log(props);

    const handleClose = () => {
        props.setModelStatus(false);
    };
    // const handleShow = () => setShow(true);

    return (
        <>
            <Modal show={props.modelStatus} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <span>User Id : </span>
                        <span>{props.userProfile.id}</span>
                    </div>
                    <div>
                        <span>Name : </span>
                        <span>{props.userProfile.name}</span>
                    </div>
                    <div>
                        <span>Email : </span>
                        <span>{props.userProfile.email}</span>
                    </div>
                    <div>
                        <span>Address : </span>
                        <span>{props.userProfile.address}</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ViewProfile;
