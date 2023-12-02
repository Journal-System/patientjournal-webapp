import React, { useEffect, useState, useRef } from "react";
import { ImagesMainContainer } from "./ImageStyles";
import { Typography, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { getImageById, uploadImage } from "../../api/FetchImages";
import Canvas from '../../components/Canvas/Canvas'

export function Images() {
    const [imageId, setImageId] = useState("");
    const [openDialog, setOpenDialog] = useState(false);
    const [imageData, setImageData] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const canvasRef = useRef(null);
    const userEmail = localStorage.getItem("userEmail");

    useEffect(() => {
        const userRole = localStorage.getItem("userRole");
        if (userRole === "DOCTOR") {
            setIsAuthorized(true);
        }
    }, []);

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
        try {
            const dataUrl = await getImageById(imageId);
            setImageData(dataUrl);
            handleDialogClose(); // Close the dialog after fetching the image
        } catch (error) {
            console.error(error);
            // Handle error (e.g., display an error message to the user)
        }
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        try {
            if (selectedFile) {
                await uploadImage(selectedFile);
                // Optionally, you can do something after successful upload
                console.log('Image uploaded successfully!');
                // Clear the selected file after upload
                setSelectedFile(null);
                handleDialogClose();
            } else {
                console.log('No file selected');
            }
        } catch (error) {
            console.error('Image upload failed:', error.message);
        }
    };

    return (
        <ImagesMainContainer>
            {!isAuthorized && (
                <div style={{ fontSize: "100px", textAlign: "center", marginTop: "200px" }}>
                    Access denied.
                </div>
            )}
            {isAuthorized && (
                <>
                    <Typography variant="h4" gutterBottom>
                        Welcome, {userEmail}!
                    </Typography>

                    {/* Pop-up window button */}
                    <div style={{ padding: '10px' }}>
                        <Button variant="outlined" onClick={handleDialogOpen}>
                            Get or upload an image
                        </Button>
                    </div>

                    {/* Get image section*/}
                    <Dialog open={openDialog} onClose={handleDialogClose}>
                        <div style={{ top: '10px', left: '10px', border: '1px solid black', padding: '10px' }}>
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
                        <div style={{ top: '10px', left: '10px', border: '1px solid black', padding: '10px' }}>
                            <Typography variant="subtitle1" gutterBottom>
                                Upload Image to Database
                            </Typography>
                            <input type="file" onChange={handleFileChange} />
                            {selectedFile && (
                                <p>Selected File: {selectedFile.name}</p>
                            )}
                            <DialogActions>
                                {(selectedFile && !selectedFile.name.includes(".png")) ? (
                                    <Typography>
                                        Must be a .png file
                                    </Typography>
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
                        <div
                            style={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100vh',
                                border: '10px solid black',
                                boxSizing: 'border-box',
                                overflow: 'hidden', // Ensure that the canvas won't overflow the image
                            }}
                        >
                        
                 
                        
                            {/* Image */}
                            <img
                                src={imageData}
                                alt="Fetched Image"
                                style={{
                                    objectFit: 'contain',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }}
                            />

                            {/* Canvas overlay */}

                                <Canvas canvasRef={canvasRef} />
                            
                        </div>
                    )}
                </>
            )}
        </ImagesMainContainer>
    );
}
