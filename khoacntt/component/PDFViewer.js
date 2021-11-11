import { Grid, makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import style from "../styles/jss/component/PDFViewerStyle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyle = makeStyles(style);

export default function PDFViewer({ filePath, post }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const classes = useStyle();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleChange = (event, value) => {
    setPageNumber(value);
  };

  const checkBreakPoint = (post) => {
    let width = 0;
    if (post) {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        width = 800;
      } else if (window.matchMedia("(min-width: 900px)").matches) {
        width = 600;
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        width = 440;
      } else {
        width = 480;
      }
    } else {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        width = 1000;
      } else if (window.matchMedia("(min-width: 900px)").matches) {
        width = 800;
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        width = 500;
      } else {
        width = 450;
      }
    }

    return width;
  };

  return (
    <Document
      file={filePath}
      onLoadSuccess={onDocumentLoadSuccess}
      className={classes.root}
    >
      <Grid container justifyContent="center">
        <Grid item>
          <Page
            pageNumber={pageNumber}
            canvasBackground="transparent"
            className={classes.page}
            width={checkBreakPoint(post)}
          />
          <Pagination
            count={numPages}
            page={pageNumber}
            onChange={handleChange}
            classes={{
              root: classes.pagination,
              ul: classes.ul,
            }}
          />
        </Grid>
      </Grid>
    </Document>
  );
}
