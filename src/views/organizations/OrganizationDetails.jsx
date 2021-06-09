import React from "react";

import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCardTitle,
  CCardText,
  CRow,
  CButton,
  CCollapse,
} from "@coreui/react";

const OrganizationDetails = () => {
  return (
    <CCard className="text-center">
      <CCardHeader>
        <h2>Organization Name</h2>
      </CCardHeader>
      <CCardBody>
        <CRow className="text-center">
          {/* <CCardTitle>Special title treatment</CCardTitle> */}
          <CCardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CCardText>
          {/* <CButton href="#">Go somewhere</CButton> */}
        </CRow>
      </CCardBody>
      {/* <CCardFooter className="text-muted">2 days ago</CCardFooter> */}
    </CCard>
  );
};

export default OrganizationDetails;
