import React, { useState } from "react";
import ReactSelect from "react-select";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../components/ui/Common-section/CommonSection";
import DropZone from "../components/ui/DropZone";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchCategoriesAction } from "../redux/actions/categoryAction";
import "../styles/create-item.css";
import { createDonationAction } from "../redux/actions/donationAction";

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

const Create = (props) => {
  const dispatch = useDispatch();

  const [pickedCategory, setPickedCategory] = useState([]);
  const [items, setItems] = useState([{ placeholder: 'Item 1', name: '', quantity: 1, description: "" }]);

  const { categories = [], currentUser = null } = props

  useEffect(() => {
    if (categories.length == 0) {
      dispatch(fetchCategoriesAction());
    }
  }, [])
  const onHandleChange = selectedOptions => setPickedCategory(selectedOptions);

  const donateMoreHandler = () => {
    const item = { placeholder: 'Item ' + (items.length + 1), name: '', description: '', quantity: 1, }
    setItems(state => [...state, item])
  }

  const removeItemHandler = (index) => setItems(state => [...state.filter((_, idx) => idx !== index)]);

  const inputChangeHandler = ({ field, value, index }) => {
    let item = items.at(index)
    if (item) {
      item = { ...item, [field]: value };
      setItems(state => [...state.map((el, idx) => index === idx ? item : el)])
    }
  }

  const postDonation = () => {
    // debugger
    const validItems = items.filter(el => el.name !== '');
    const donation = {
      profile:currentUser ,
      items : validItems ,
      category: pickedCategory ,
    }
    dispatch( createDonationAction(donation) )
  }

  return (
    <>
      <CommonSection title="Donate Something and make SomeOne Happy" />
      <section>
        <Container fluid={true} >
          <Row>
            <Col lg="3" md="4" sm="6">
              <h6 className=" text-light">Preview Images (5 max) </h6>
              <DropZone />
            </Col>

            <Col lg="6" md="4" sm="6">
              <div className="create__item">
                <div className="table-responsive">
                  {items.map((item, index) =>
                    <table className="table shoping-cart-table" key={index} >
                      <tbody>
                        <tr>
                          <td className="desc">
                            <h4 className="text-navy"> <input type="text" className="form-control" placeholder={item.placeholder} value={item.name} onChange={(ev) => inputChangeHandler({ field: 'name', value: ev.target.value, index })} /> </h4>
                            <p className="small text-muted">
                              <input type="text" className="form-control" placeholder={'Add Description (optional)'} value={item.description} onChange={(ev) => inputChangeHandler({ field: 'description', value: ev.target.value, index })} />
                            </p>
                            {items.length !== 1 &&
                              <div className="m-t-sm">
                                <i className="text-danger ri-delete-bin-line" onClick={() => removeItemHandler(index)} ></i>
                              </div>
                            }
                          </td>
                          <td width="60">
                            <input type="text" className="form-control" value={item.quantity} onChange={(ev) => inputChangeHandler({ field: 'quantity', value: ev.target.value, index })} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )
                  }
                </div>
                <div className="float-end" >
                  <button className="btn btn-sm btn-primary d-flex gap-2 align-items-center" onClick={() => donateMoreHandler()}  >
                    Donate More
                  </button>
                </div>
              </div>
            </Col>

            <Col lg="3" md="4" sm="6">
              <div className="form__input">
                <label htmlFor="">Description</label>
                <textarea
                  name="description"
                  rows="10"
                  placeholder="Enter description"
                  className="w-100"
                ></textarea>
              </div>
              <div className="mt-2 form__input">
                <label> Category </label>
                <ReactSelect
                  value={pickedCategory}
                  isMulti={false}
                  isClearable={true}
                  styles={customStyles}
                  options={[...categories]}
                  onChange={onHandleChange}
                  name={'category'}
                />
              </div>
              <div>
              <button className="btn btn-sm btn-primary d-flex gap-2 align-items-center" onClick={() => postDonation()}  >
                    Save
                  </button> 
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  categories: state.category.categories || [],
  currentUser: state.auth.user,
})

export default connect(mapStateToProps)(Create);
