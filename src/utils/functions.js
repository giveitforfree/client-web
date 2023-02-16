// import { JPGIcon } from "../assets/icons";

export const extension = (filename = "", fullWith, height = "100%") => {
    const ext = filename?.split(".")[1];

    // switch (ext) {
    //     case "jpg":
    //     case "jpeg":
    //         return (
    //             <JPGIcon
    //                 className={`file-ext ${fullWith ? "full-width" : ""}`}
    //                 title={filename}
    //             />
    //         );

    // case "doc":
    // case "docx":
    // case "docm":
    //     return (
    //         <DOCIcon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //         />
    //     );

    // case "xlsx":
    // case "xlsm":
    // case "xlsb":
    // case "xltx":
    //     return (
    //         <XLSIcon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //             style={{ height: height }}
    //         />
    //     );

    // case "csv":
    //     return (
    //         <CSVIcon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //             style={{ height: height }}
    //         />
    //     );

    // case "pdf":
    //     return (
    //         <PDFIcon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //         />
    //     );

    // case "svg":
    //     return (
    //         <SVGIcon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //         />
    //     );

    // case "png":
    //     return (
    //         <PNGIcon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //         />
    //     );

    // case "mp3":
    //     return (
    //         <MP3Icon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //         />
    //     );

    // case "mp4":
    //     return (
    //         <VideoIcon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //         />
    //     );
    // case "pptx":
    // case "pptm":
    // case "ppt":
    //     return (
    //         <PowerPointIcon
    //             className={`file-ext ${fullWith ? "full-width" : ""}`}
    //             title={filename}
    //         />
    //     );

    // default:
    // }
    return (
        <p>  file {filename} </p>
    );
};