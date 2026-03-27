const uploadController = (req, res) => {
    res.send(
        {
            success: true,
            message: "File uploaded successfully",
            files: req.files
        }
    );
};

module.exports =  uploadController