import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CListGroup,
  CListGroupItem,
  CCardGroup,
} from "@coreui/react";

import { CChartBar } from "@coreui/react-chartjs";
import api from "src/api";

const OrganizationDetails = () => {
  let { orgId } = useParams();

  const [data, setData] = useState([]);
  const [overview, setOverview] = useState({
    name: "Organization's Name",
    nStudents: 100,
    nTeachers: 10,
  });

  const labels = [
    "Strongly Disagree",
    "Disagree",
    "Uncertain/Neutral",
    "Agree",
    "Strongly Agree",
  ];
  const questions = [
    "I understand what basic living expenses are.",
    "I think buying a used car for my first car is a good idea.",
    "I know salary ranges for occupations I'm interested in.",
    "I understand that credit card companies charge interest when I use my card.",
    "I understand savings and retirement funds increase in value and provide a future source of money.",
    "I think it is important to work hard and save up my money when I want to buy something that is expensive.",
    "I understand that higher paying jobs require additional training or education beyond high school.",
    "I think it is important to put aside money in case of an emergency.",
    "I know how to budget my money.",
    "I would like to learn more about budgeting, spending, and saving.",
    "I believe there is more I should know about personal finances.",
  ];

  /**
   * Backend Connection
   */
  useEffect(() => {
    api
      .organizationStats(orgId)
      .then((res) => {
        if (res.success) {
          let data = [];

          for (let entry of res.data) {
            data.push([
              {
                label: "Before Simulation",
                backgroundColor: "#f87979",
                data: entry[0],
              },
              {
                label: "After Simulation",
                backgroundColor: "#9ad0f5",
                data: entry[1],
              },
            ]);
          }

          setData(data);
          setOverview(res.overview);
        } else {
          window.alert(
            "Something went wrong! Please refresh the page and try again!"
          );
          console.log(res.message);
        }
      })
      .catch((err) => window.alert("Server Error"));
  }, []);

  let tempData = [
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
    [
      [40, 20, 12, 39, 10],
      [80, 40, 20, 12, 11],
    ],
  ];

  const chartGenerator = () => {
    return data.map((entry, i) => {
      return (
        <CCard key={i}>
          <CCardHeader
            style={{
              backgroundColor: "var(--cui-card-cap-bg,rgba(0,0,21,.03))",
            }}
          >
            {questions[i]}
          </CCardHeader>
          <CCardBody>
            <CChartBar
              datasets={entry}
              labels={labels}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
            />
          </CCardBody>
        </CCard>
      );
    });
  };

  return (
    <>
      <CCard className="text-center">
        <CCardHeader
          style={{ backgroundColor: "var(--cui-card-cap-bg,rgba(0,0,21,.03))" }}
        >
          <h1>{overview.name}</h1>
        </CCardHeader>
        <CCardBody>
          <CListGroup
            style={{
              width: "35%",
              margin: "auto",
              border: "solid 1px rgba(0, 0, 21, 0.125)",
            }}
            flush
          >
            <CListGroupItem>
              Total No. of Students: <strong>{overview.nStudents}</strong>
            </CListGroupItem>
            <CListGroupItem>
              Total No. of Teachers: <strong>{overview.nTeachers}</strong>
            </CListGroupItem>
          </CListGroup>
        </CCardBody>
        {/* <CCardFooter className="text-muted">2 days ago</CCardFooter> */}
      </CCard>

      <CCard className="text-center">
        <CCardHeader>
          <h3>Organization Statistics</h3>
        </CCardHeader>
        <CCardBody>
          <CCardGroup columns className="cols-2">
            {chartGenerator()}
            {/* <CCard>
              <CCardHeader>Bar Chart</CCardHeader>
              <CCardBody>
                <CChartBar
                  datasets={[
                    {
                      label: "GitHub Commits",
                      backgroundColor: "#f87979",
                      data: [40, 20, 12, 39, 10],
                    },
                    {
                      label: "GitHub Commits",
                      backgroundColor: "#9ad0f5",
                      data: [80, 40, 20, 12, 11],
                    },
                  ]}
                  labels={[
                    "Strongly Disagree",
                    "Disagree",
                    "Uncertain/Neutral",
                    "Agree",
                    "Strongly Agree",
                  ]}
                  options={{
                    tooltips: {
                      enabled: true,
                    },
                  }}
                />
              </CCardBody>
            </CCard>
           */}
          </CCardGroup>
        </CCardBody>
      </CCard>
    </>
  );
};

export default OrganizationDetails;
