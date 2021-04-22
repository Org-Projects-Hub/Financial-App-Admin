import React, { useState } from "react";
import { CBadge, CDataTable, CButton } from "@coreui/react";
import Modal from "../../reusable/Modal";

const Teachers = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const tempData = [
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      status: "unauthorized",
      registered: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      status: "authorized",
      registered: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      status: "unauthorized",
      registered: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      status: "authorized",
      registered: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      status: "unauthorized",
      registered: "2021/04/20",
    },
    {
      organization: "Riser Middle School",
      name: "Ashish Dev",
      status: "unauthorized",
      registered: "2021/04/20",
    },
  ];

  const [details, setDetails] = React.useState([]);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const tempFields = [
    { key: "name", _style: { width: "30%" } },
    { key: "organization", _style: { width: "35%" } },
    { key: "registered", _style: { width: "15%" } },
    { key: "status", _style: { width: "10%" } },
    {
      key: "editOptions",
      label: "",
      //   _style: { width: "30%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "authorized":
        return "success";
      case "unauthorized":
        return "secondary";
      default:
        return "primary";
    }
  };

  const getEditBtn = (status) => {
    switch (status) {
      case "authorized":
        return (
          <CButton
            color="dark"
            variant="outline"
            onClick={() => {
              //   setSelectedItem(item);
              setVisible(!visible);
            }}
          >
            Unauthorize
          </CButton>
        );
      case "unauthorized":
        return (
          <CButton
            color="success"
            variant="outline"
            onClick={() => {
              //   setSelectedItem(item);
              setVisible(!visible);
            }}
          >
            Authorize
          </CButton>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <CDataTable
        items={tempData}
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
          status: (item) => (
            <td>
              <CBadge
                style={{ fontSize: "0.8rem" }}
                color={getBadge(item.status)}
              >
                {item.status}
              </CBadge>
            </td>
          ),

          editOptions: (item, index) => {
            return (
              <td style={{ display: "flex", justifyContent: "center" }}>
                {getEditBtn(item.status)}
              </td>
            );
          },
        }}
      />
      <Modal
        visible={visible}
        setVisible={setVisible}
        title={"Confirm Delete"}
        body={`Are you sure you want to DELETE "${selectedItem.name}"?`}
        action={"Delete"}
        color={"danger"}
      />
    </>
  );
};

export default Teachers;
