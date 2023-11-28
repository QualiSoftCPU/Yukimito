import { Button } from "@mui/material"

export default function UploadFile() {
  return (
    <>
      <Button className="button-color"
        variant="contained"
        component="label"
      >
        Upload Vaccine
        <input
          type="file"
          hidden
        />
      </Button>
    </>
  )
}