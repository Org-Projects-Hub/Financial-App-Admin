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
import { setLocalStorage } from "src/utils/others";
import Modal from "src/reusable/Modal";

const Login = () => {
  const [code, setCode] = useState("");
  const [phase, setPhase] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    // Call API here
    // api
    api
      .login(code)
      .then((res) => {
        if (res.success) {
          setLocalStorage("finapp_admin_token", res.token);
          history.push("/");
        } else {
          setShowModal(true);
          // Something
        }
      })
      .catch((err) => {
        window.alert("Sever Error! Please try again.");
      });
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
      <Modal
        visible={showModal}
        setVisible={setShowModal}
        title={"Invalid Login Code"}
        body={
          "Please Enter the code sent to the admin email! \n Every code expires in 15 minutes. Your code might have expired. In that case, you can resend a new code."
        }
        action={"Resend Code"}
        color={"warning"}
        actionFunc={() => {}}
      />
    </div>
  );
};

export default Login;
