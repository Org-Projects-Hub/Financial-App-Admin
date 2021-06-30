import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import api from "src/api";

const Login = () => {
  const [code, setCode] = useState("");
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    console.warn("HEre");
    // Call API here
    // api
    history.push("/");
  };
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm
                    className="justify-content-center text-center"
                    onSubmit={onSubmit}
                  >
                    <h1>Admin Login</h1>
                    <p className="text-muted">
                      Please enter the one-time code sent to the admin inbox
                    </p>
                    <br />
                    <CInputGroup className=" input-group-lg mb-2 ">
                      <CInput
                        type="text"
                        placeholder="Login Code"
                        autoComplete="code"
                        className="text-center"
                        onChange={(e) => {
                          setCode(e.target.value);
                        }}
                      />
                    </CInputGroup>
                    <br />

                    <CRow className="justify-content-center">
                      <CCol md="12" className="text-left">
                        <CButton
                          color="primary"
                          className="px-5"
                          type="submit"
                          style={{ width: "100%" }}
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
