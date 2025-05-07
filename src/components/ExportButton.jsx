import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function ExportButton() {
  const downloadPdf = () => {
    // Get the element with class 'exportthissection'
    const element = document.querySelector(".exportthissection");

    if (element) {
      // Capture the content inside the exportthissection div
      html2canvas(element).then((canvas) => {
        const pdf = new jsPDF();

        // Add the captured image to the PDF
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 0, 0);

        // Save the PDF file
        pdf.save("live-preview.pdf");
      });
    } else {
      console.error("Section with class 'exportthissection' not found.");
    }
  };

  return (
    <div>
      <button
        onClick={downloadPdf}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Export as PDF
      </button>
    </div>
  );
}
