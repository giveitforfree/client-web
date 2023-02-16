import React, { useState } from "react";
import ReactSelect from "react-select";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import DropZone from "../components/ui/DropZone";
import "../styles/create-item.css";

const customStyles = {
  control: base => ({
    ...base,
    height: "auto",
    border: "1px solid #cccccc80",
    borderRadius: "2px",
    fontSize: "14px",
    maxWidth: "100%",
    boxShadow: "none",
    position: "relative",
    background: 'transparent',
  }),
  menu: base => ({
    ...base,
    maxWidth: "100%",
    position: "absolute",
    zIndex: 9999,
    fontSize: "14px",
    background: 'transparent',
    color: 'white',
  }),
  input: base => ({
    ...base,
    width: "200px",
    fontSize: "14px",
  }),
  option: base => ({ ...base, display: "flex", gap: "5px", }),
  menuPortal: base => ({ ...base, zIndex: 9999 }),
};

const $options = [
  { value: "value1", label: "label1" },
  { value: "value2", label: "label2" },
  { value: "value3", label: "label3" },
  { value: "value4", label: "label4" }
]



const Create = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([...$options]);


  const onHandleChange = selectedOptions => {
    setSelectedOptions(selectedOptions);
  }


  return (
    <>
      <CommonSection title="Donate Something and make happiness to Someone " />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <h6 className=" text-light">Preview Images (5 max) </h6>
              <DropZone />

            </Col>

            <Col lg="9" md="8" sm="6">
              <div className="create__item">

                {/* <div className="form__input">
                    <label htmlFor="">Upload File</label>
                    <input type="file" multiple={true} className="upload__input" />
                  </div> */}

                <div className="form__input">
                  <label htmlFor="">Title</label>
                  <input type="text" placeholder="Enter title" />
                </div>

                <div className="form__input">
                  <label htmlFor="">Description</label>
                  <textarea
                    name="description"
                    rows="7"
                    placeholder="Enter description"
                    className="w-100"
                  ></textarea>
                </div>

                <div className="form__input">
                  <label htmlFor=""> Items </label>
                  <ReactSelect
                    // defaultMenuIsOpen={true}
                    value={selectedOptions}
                    isMulti={true}
                    isClearable={true}
                    styles={customStyles}
                    options={[...options]}
                    onChange={onHandleChange}
                    isOptionDisabled={() => selectedOptions.length >= 3}
                    name={'category'}
                  />
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Create;
