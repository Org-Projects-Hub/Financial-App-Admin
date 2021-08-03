import React, { useState, useEffect } from "react";
import { CBadge, CDataTable, CButton } from "@coreui/react";
import Modal from "src/reusable/Modal";
import api from "src/api";
import useStateCallback from "src/utils/useStateCallback";

const Teachers = () => {
  const [visible, setVisible] = useState(false);
  const [teachers, setTeachers] = useState([]); // Data for the teachers table
  const [selectedTeacher, setSelectedTeacher] = useStateCallback(null);

  /**
   * Backend Call for teachers info and updates "teachers" state
   */
  const retrieveTeachers = () => {
    api
      .getTeachers()
      .then((res) => {
        if (res.success) {
          // Extract full name for each teacher
          for (let val of res.teachers) {
            val["name"] = val.firstName + " " + val.lastName;
          }

          setTeachers(res.teachers);
        } else {
          window.alert(
            "Something went wrong in the backend! Please try again!"
          );
        }
      })
      .catch((err) => {
        window.alert("Server Error!");
      });
  };

  /**
   * Backend call to detch data about teachers
   */
  useEffect(() => {
    retrieveTeachers();
  }, []);

  const tempData = [
    {
      _id: "1",
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: false,
      joinedOn: "2021/04/20",
    },
    {
      _id: "2",
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: true,
      joinedOn: "2021/04/20",
    },
    {
      _id: "3",
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: false,
      joinedOn: "2021/04/20",
    },
    {
      _id: "4",
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: true,
      joinedOn: "2021/04/20",
    },
    {
      _id: "5",
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: false,
      joinedOn: "2021/04/20",
    },
    {
      _id: "0000000023456",
      organization: "Riser Middle School",
      name: "Ashish Dev",
      isAuthorized: false,
      joinedOn: "2021/04/20",
    },
  ];

  const tempFields = [
    { key: "name", _style: { width: "25%" } },
    { key: "organization", _style: { width: "35%" } },
    { key: "joinedOn", label: "Registered", _style: { width: "20%" } },
    { key: "status", _style: { width: "10%" } },
    {
      key: "editOptions",
      label: "",
      //   _style: { width: "30%" },
      sorter: false,
      filter: false,
    },
  ];

  /**
   * Gives Style name for Status column
   * @param {boolean} status isAuthorized value of teacher
   * @returns {string} the style name for the status column of the row
   */
  const getBadge = (status) => {
    switch (status) {
      case true:
        return "success";
      case false:
        return "secondary";
      default:
        return "primary";
    }
  };

  /**
   * Gives Authorize or UnAuthorize Btn for each teacher based on it's current status
   * @param {*} item The table item (teacher)
   * @returns {HTMLElement} Authorize or UnAuthorize Btn
   */
  const getEditBtn = (item) => {
    let id = item._id;
    switch (item.isAuthorized) {
      case true:
        return (
          <CButton
            color="dark"
            variant="outline"
            onClick={() => {
              setSelectedTeacher(id, () => setVisible(!visible));
            }}
          >
            Unauthorize
          </CButton>
        );
      case false:
        return (
          <CButton
            color="success"
            variant="outline"
            onClick={() => {
              authOrUnAuth(id);
              // setSelectedTeacher(id, () => ());
            }}
          >
            Authorize
          </CButton>
        );
      default:
        return null;
    }
  };

  /**
   * Calls backend to flip the value of authorized param of the teacher
   * Default parameter is used when called by the confirmation modal
   */
  const authOrUnAuth = (id = selectedTeacher) => {
    api
      .authorizeTeacher(id)
      .then((res) => {
        if (res.success) {
          retrieveTeachers();
        } else {
          window.alert("Action not allowed!");
        }
        setSelectedTeacher(null);
      })
      .catch((err) => {
        window.alert("Server Error!");
        setSelectedTeacher(null);
      });
  };

  return (
    <>
      <CDataTable
        items={teachers}
        fields={tempFields}
        columnFilter
        tableFilter
        // columnHeaderSlot={{ name: "Organization's Name" }}
        //   footer
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots={{
          joinedOn: (item) => {
            return <td>{new Date(item.joinedOn).toLocaleString()}</td>;
          },
          status: (item) => (
            <td>
              <CBadge
                style={{ fontSize: "0.8rem" }}
                color={getBadge(item.isAuthorized)}
              >
                {item.isAuthorized ? "authorized" : "not authorized"}
              </CBadge>
            </td>
          ),

          editOptions: (item, index) => {
            return (
              <td style={{ display: "flex", justifyContent: "center" }}>
                {getEditBtn(item)}
              </td>
            );
          },
        }}
      />
      <Modal
        visible={visible}
        setVisible={setVisible}
        title={"Confirm Action"}
        body={`This teacher will not be able to make new classes`}
        action={"Continue"}
        color={"info"}
        actionFunc={() => {
          authOrUnAuth();
          setVisible(false);
        }}
      />
    </>
  );
};

export default Teachers;
