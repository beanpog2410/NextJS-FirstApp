import { Button, CircularProgress, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { red } from "@material-ui/core/colors";

const PDFViewer = dynamic(() => import("./PDFViewer"), {
    ssr: false,
  });

export default function PDFDialog({ handleClose, open }) {
  console.log("chạy đi");
  const currentLec = useSelector(state => state.lecturer.currentLecturer)

  if (!currentLec) {
      return (
        <></>
      );    
  } else {
    return (
        <Dialog
        fullScreen={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"LÝ LỊCH KHOA HỌC: " + currentLec.degrees + "." + currentLec.name}
            <Button onClick={handleClose} style={{float: "right", background:"red", color:"white"}}>X</Button>
          </DialogTitle>
          <DialogContent>
              <PDFViewer filePath={currentLec.resume} post={true} />
        </DialogContent>
        </Dialog>
      );     
  }
}
