import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';

function NotificationComponent({visible, header, message}) {
    const [show, setShow] = useState(visible);
    const [headerText] = useState(header);
    const [messageText] = useState(message);

  return (
    <>
      {
        <Toast
          className="d-inline-block m-1 float-right"
          key="1"
          onClose={() => setShow(false)} show={show} delay={3000} autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{headerText}</strong>
          </Toast.Header>
          <Toast.Body>
            {messageText}
          </Toast.Body>
        </Toast>
      }
    </>
  );
}

export default NotificationComponent;