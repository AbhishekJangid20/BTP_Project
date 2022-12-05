import "../App.css";
const TableData = (props) => {
  var ids = {};
  var colors = [
    "#F48A8A",
    "#FE7B7B",
    "#D4EB77",
    "#77EB9A",
    "#3A3AF7",
    "#77B5EB",
    "#77EBD0",
    "#F888F4",
    "#BBE0F2",
    "#FCF373",
  ];
  var check = 0;
  var index = 0;
  props.param.map((e) => {
    var check2 = 0;
    e.map((a) => {
      // console.log("yes", a);
      const y = a.split(" ");
      var temp = "";

      for (let i = 0; i < y.length; i++) {
        if (y[i] !== " ") {
          temp = temp + y[i];
        }
      }
      // let d = ""
      // const l = temp.split("/\n/");
      // let temp1 = "";
      // for (let c = 0; c < l.length; c++) {
      //   if (l[c] !== " ") {
      //     temp1 = temp1 + l[c];
      //   }
      // }
      // // console.log("temp1", temp);
      // for (let h = 0; h < temp1.length; h++) {
      //   console.log("char11", temp1[h]);
      // }
      if (
        check != 0 &&
        check2 != 0 &&
        ids.hasOwnProperty(temp) == false &&
        temp != ""
      ) {
        ids[temp] = colors[index];
        index = index + 1;
        // console.log("index-------", index);
      }
      check2 = 1;
    });
    check = check + 1;
  });
  console.log("dictionary", ids);
  return (
    <div>
      {props.param.map((element) => {
        // console.log("=================", element);
        return (
          <div
            style={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
              // border: "1px solid #42D8DD",
            }}
          >
            {element.map((x) => {
              // console.log("abc", x);

              const y = x.split(/\n/);
              const listOf = x.split(" ");
              var temp = "";
              for (let j = 0; j < listOf.length; j++) {
                if (listOf[j] !== " ") {
                  temp = temp + listOf[j];
                }
              }
              // console.log("abc", temp);
              return (
                <div
                  style={{
                    display: "flex",
                    paddingRight: "5%",
                    paddingLeft: "0.5px",
                    width: "20px",
                    fontSize:"55%",
                    // height: "100vh",
                    paddingTop: "5px",
                    // paddingBottom: "2px",
                    border: "1px solid #42D8DD",
                    flexDirection: "column",
                    backgroundColor: ids[temp],
                    // overflow: "scroll",
                  }}
                >
                  {y.map((val) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <p
                          style={{
                            display: "flex",
                            whiteSpace: "pre",
                          }}
                        >
                          {val}
                        </p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TableData;

// import React from "react";
// import { makeStyles, createStyles, Theme } from "@material-ui/core";

// import { Grid } from "@mui/material";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

// // import Paper from "@mui/material/Paper";
// // or
// import { Paper } from "@mui/material";

// const useStyles = makeStyles((Theme) =>
//   createStyles({
//     paper: {
//       padding: Theme.spacing(2),
//       textAlign: "center",
//       color: Theme.palette.text.secondary,
//     },
//     root: {
//       flexGrow: 1,
//     },
//   })
// );

// export default function FullWidthGrid() {
//   const classes = useStyles();

//   return (
//     <div style={{ width: "90%", backgroundColor: "green", padding: "10px" }}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>
//             {/* GEEKSFORGEEKS ---> GRID COMPONENT DEMO */}
//           </Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>1/4 Size</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>1/4 Size</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>1/4 Size</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>1/4 Size</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>1/2 Size</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>1/2 Size</Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>Full Size</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
