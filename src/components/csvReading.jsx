import React, { useState } from "react";
import Papa from "papaparse";
import TableData from "./TableContent";
// import * as React from "react";
// import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// Allowed extensions for input file
const allowedExtensions = ["csv"];

const CsvWork = () => {
  // This will store the name of the uploaded file
  const [fileName, setfileName] = useState("  Choose a file");

  // This state will store the parsed data
  const [data, setData] = useState([[]]);

  // It state will contain the error when
  // correct file extension is not used
  const [error, setError] = useState("");

  // It will store the file uploaded by the user
  const [file, setFile] = useState("");

  // This function will be called when
  // the file input changes
  const handleFileChange = (e) => {
    setError("");
    // console.log("fffffffffffffffffff:  ", e);
    // setfileName(e.data);
    // Check if user has entered the file
    if (e.target.files.length) {
      const inputFile = e.target.files[0];

      // Check the file extensions, if it not
      // included in the allowed extensions
      // we show the error
      const fileExtension = inputFile?.type.split("/")[1];
      if (!allowedExtensions.includes(fileExtension)) {
        setError("Please input a csv file");
        return;
      }

      // If input type is correct set the state
      setFile(inputFile);
      setfileName(inputFile.name);
      // console.log("inputFilefffffffffffffff", inputFile.name);
    }
  };
  const handleParse = () => {
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();

    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
      console.log("target:   ", target.result);
      const csv = Papa.parse(target.result, { header: false });
      const parsedData = csv?.data;
      console.log("parseData:   ", parsedData);
      // const columns = parsedData[0];
      // const columns1 = parsedData[1];

      var tableData = [];
      for (var i = 0; i < parsedData.length; i++) {
        var temp = [];
        const columns = parsedData[i];
        for (var j = 0; j < columns.length; j++) {
          temp.push(columns[j]);
        }
        tableData.push(temp);
      }
      console.log("tableData---++++++", tableData);
      // console.log("columns1----", columns1);
      setData(tableData);
      console.log("data----", data);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <div style={{ marginTop: "-4rem" }}>
        <TableData param={data} />
      </div>
      <div
        style={{
          // display: "flex",
          // justifyContent: "center",
          paddingLeft: "45%",
          paddingTop: "2%",
        }}
      >
        <div
          style={{
            paddingTop: "2%",
            paddingBottom: "2%",
            display: "flex",
            // paddingRight: "5%",
          }}
        >
          <Button
            variant="contained"
            component="label"
            style={{ backgroundColor: "#42D8DD" }}
          >
            Upload
            <input
              hidden
              accept="file"
              multiple
              type="file"
              onChange={handleFileChange}
            />
            {/* <p>x</p> */}
          </Button>
          <div>{fileName}</div>
        </div>
        <div>
          <Button
            variant="outlined"
            onClick={handleParse}
            style={{ color: "#42D8DD", borderBlockColor: "#42D8DD" }}
          >
            Submit
          </Button>
          {/* <button>Submit</button> */}
        </div>
      </div>
    </div>
  );
};

export default CsvWork;
// {
//   /* <input
//           onChange={handleFileChange}
//           id="csvInput"
//           name="file"
//           type="File"
//         /> */
// }
