import React from "react";

import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";

const Modal = ({
  visible,
  setVisible,
  title,
  body,
  action,
  color,
  actionFunc,
}) => {
  //   const [visible, setVisible] = React.useState(false);

  return (
    <>
      <CModal alignment="center" show={visible} color={color}>
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{body}</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color={color} onClick={actionFunc}>
            {action}
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Modal;
