import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Projects/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const resumeLink =
// "https://github.com/vishnuGuptha/MyPortfolio/blob/main/src/Assets/Projects/resume.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth - window.innerWidth / 5);
  }, [width]);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <div className="d-flex justify-content-center">
            <object
              data={pdf}
              type="application/pdf"
              width={width}
              height={width}
            >
              <p>
                Your web browser doesn't have a PDF plugin.
                <a href={pdf}>click here to download the PDF file.</a>
              </p>
            </object>
          </div>
        </Row>

        <div class="container mt-5">
          <div class="row">
            <div class="col-md-9">
              <div
                class="modal fade bd-example-modal-xl"
                tabindex="-1"
                role="dialog"
                aria-labelledby="myExtraLargeModalLabel"
                id="myExtraLargeModalLabel"
              >
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-12">
                          <iframe
                            title="bc"
                            src="https://classics.berkeley.edu/sites/default/files/2020-01/sample.pdf"
                            // style={{
                            //   width: "560px",
                            //   height: "560px",
                            //   border: "none",
                            // }}
                            width="560px"
                            height="560px"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
