import React, { useEffect, useState, useRef } from "react";
import { ImagesMainContainer, CanvasContainer } from "./ImageStyles";
import {
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  getImageById,
  uploadImage,
  saveImagewithId,
} from "../../api/FetchImages";

export function Images() {
  const [imageId, setImageId] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [text, setText] = useState("");
  const [isTextInput, setIsTextInput] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const canvasRef = useRef(null);
  const drawingRef = useRef(false);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole === "DOCTOR") {
      setIsAuthorized(true);
    }

    if (imageData) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const img = new Image();
      img.src = imageData;
      context.clearRect(0, 0, canvas.width, canvas.height);

      img.onload = () => {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }, [imageData]);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleImageIdChange = (event) => {
    setImageId(event.target.value);
  };

  const handleFetchImage = async () => {
    setIsImageLoading(true)
    try {
      const dataUrl = await getImageById(imageId, localStorage.getItem("access_token"));
      setImageData(dataUrl);
      handleDialogClose(); // Close the dialog after fetching the image
    } catch (error) {
      console.error(error);
      // Handle error (e.g., display an error message to the user)
    } finally {
      setIsImageLoading(false);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setIsImageLoading(true);
    try {
      if (selectedFile) {
        await uploadImage(selectedFile, localStorage.getItem("access_token"));
        console.log("Image uploaded successfully!");
        setSelectedFile(null);
        handleDialogClose();
      } else {
        console.log("No file selected");
      }
    } catch (error) {
      console.error("Image upload failed:", error.message);
    } finally {
      setIsImageLoading(false);
    }
  };

  const saveCanvasAsImage = async () => {
    const canvas = canvasRef.current;

    // Get the data URL of the canvas content
    const dataUrl = canvas.toDataURL();

    // Convert the data URL to a Blob
    const blob = await (await fetch(dataUrl)).blob();

    // Create a File from the Blob
    const file = new File([blob], "canvas_image.png", { type: "image/png" });

    try {
      // Use the saveImageWithId function to save the canvas image to the database
      await saveImagewithId(imageId, file, localStorage.getItem("access_token"));
      console.log("Canvas image saved successfully");
    } catch (error) {
      console.error("Error saving canvas image:", error.message);
    }
  };

  const handleMouseDown = (e) => {
    if (isTextInput) {
      // Ignore drawing lines when text input is active
      return;
    }

    drawingRef.current = true;
    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    );
  };

  const handleMouseMove = (e) => {
    if (!drawingRef.current || isTextInput) return;
    const context = canvasRef.current.getContext("2d");
    context.lineTo(
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    );
    context.stroke();
  };

  const handleMouseUp = () => {
    drawingRef.current = false;
  };

  const handleTextInput = () => {
    setIsTextInput(!isTextInput);
    setText(""); // Clear text when toggling text input
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTextDraw = (e) => {
    const context = canvasRef.current.getContext("2d");
    context.font = "20px Arial"; // Set the font style
    context.fillStyle = "black"; // Set the text color
    context.fillText(
      text,
      e.clientX - canvasRef.current.offsetLeft,
      e.clientY - canvasRef.current.offsetTop
    );
  };

  return (
    <ImagesMainContainer>
      {(!isAuthorized && isImageLoading) && (
        <div
          style={{ fontSize: "100px", textAlign: "center", marginTop: "200px" }}
        >
          Access denied.
        </div>
      )}
      {isAuthorized && (
        <>
          {/* Pop-up window button */}
          <div style={{ padding: "10px" }}>
            <Button variant="outlined" onClick={handleDialogOpen}>
              Get or upload an image
            </Button>
          </div>

          {/* Get/Upload image section*/}
          <Dialog open={openDialog} onClose={handleDialogClose}>
            {/* Get Image Section*/}
            <div
              style={{
                top: "10px",
                left: "10px",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Get Image from Database
              </Typography>
              <TextField
                label="Image ID"
                variant="outlined"
                value={imageId}
                onChange={handleImageIdChange}
              />
              <DialogActions>
                <Button onClick={handleFetchImage}>Fetch Image</Button>
              </DialogActions>
            </div>

            {/* Image Upload Section */}
            <div
              style={{
                top: "10px",
                left: "10px",
                border: "1px solid black",
                padding: "10px",
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Upload Image to Database
              </Typography>
              <input type="file" onChange={handleFileChange} />
              {selectedFile && <p>Selected File: {selectedFile.name}</p>}
              <DialogActions>
                {selectedFile && !selectedFile.name.includes(".png") ? (
                  <Typography>Must be a .png file</Typography>
                ) : (
                  <Button onClick={handleUpload} disabled={!selectedFile}>
                    Upload Image
                  </Button>
                )}
              </DialogActions>
            </div>
            <Button onClick={handleDialogClose}>Cancel</Button>
          </Dialog>

          {imageData && (
            <CanvasContainer>
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                style={{ border: "10px solid black", overflow: "hidden" }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onClick={isTextInput ? handleTextDraw : null}
              />
              <div>
                <Button variant="outlined" onClick={handleTextInput}>
                  {isTextInput ? "Finish adding text" : "Add Text"}
                </Button>
                {isTextInput && (
                  <TextField
                    label="Enter Text"
                    variant="outlined"
                    value={text}
                    onChange={handleTextChange}
                  />
                )}
                <Button variant="outlined" onClick={saveCanvasAsImage}>
                  Save Image
                </Button>
              </div>
            </CanvasContainer>
          )}
        </>
      )}
    </ImagesMainContainer>
  );
}