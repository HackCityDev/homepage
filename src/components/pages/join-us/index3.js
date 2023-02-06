import React, { useEffect, useMemo, useRef, useState } from "react";
import Icons from "./icons";
import countryList from "react-select-country-list";
import Select from "react-select";

import "./index.scss";
import { useNavigate } from "react-router-dom";
import { FileDrop } from "react-file-drop";
import * as EmailValidator from "email-validator";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DefaultContent = (props) => {
  const fields = ["email", "fullName", "experience", "country"];

  const [value, setValue] = useState({ skills: [] });
  const [file, setFile] = useState({});
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const errors = useRef(false);

  const fileInputRef = useRef(null);

  const options = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();

  const changeHandler = (value) => {
    setValue((d) => ({ ...d, country: value }));
  };

  const onFileInputChange = (event) => {
    if (event) {
      const { files } = event.target;
      setFile(files[0]);
      console.log(event);
    }
  };

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  const submit = async () => {
    console.log(value);
    setLoading(true);
    errors.current = false;
    for (const field of fields) {
      if (!Object.keys(value).includes(field) || !value?.[field]) {
        // setErrors(d => ({...d, [field]: true}))
        errors.current = true;
        toast(`${field} Can Not Be Empty`);
      }

      if (field === "email" && !EmailValidator.validate(value[field])) {
        // setErrors(d => ({...d, [field]: true}))
        errors.current = true;
        toast(`${field.toUpperCase()} Is Not Correct`);
      }
    }

    if (!fileInputRef.current.value) {
      // setErrors(d => ({...d, file: true}))
      errors.current = true;
      toast(`Kindly Upload your resume`);
    }

    if(!value.skills.length){
        errors.current = true;
        toast(`Kindly Pick One or More skills`);
    }

    if (!errors.current) {
        console.log('clean')

        const form = new FormData();
        
        form.append('resume', file)
        form.append('data', JSON.stringify(value))

        console.log(form.get('data'));
        console.log(form.get('resume'));
    }

    setTimeout(() => {
        setLoading(false);
    }, 2000);

  };

  const action = (e) => {
    setValue((d) => {
      let data = {};
      if (e.value) {
        data = { ...d, skills: [...d.skills, e] };
      } else {
        let skills = [];
        // let newSkill = {};
        for (let skill of d.skills) {
          if (!e.value && skill.label == e.label) {
            console.log(e);
            continue;
          } else {
            skills = [...skills, skill];
          }
        }
        data = { ...d, skills };
      }
      return data;
    });
  };

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <>
      <div className="join-us-container-tracks">
        <h3>Based on your Skills</h3>
        <p>You can select multiple skills</p>
        <div className="join-us-container-tracks-list">
          {Object.keys(Icons).map((key, index) => {
            const Component = Icons[key];
            return (
              <Component
                action={action}
                value={key.toLowerCase()}
                classNam={
                  index >= Object.keys(Icons).length / 2
                    ? showMore
                      ? "show"
                      : "hide"
                    : "show"
                }
              />
            );
          })}
        </div>
        <div
          className="join-us-container-tracks-limit"
          onClick={() => setShowMore(!showMore)}
        >
          View {showMore ? "less" : "more"} skills
        </div>
      </div>
      <div className="join-us-container-form">
        <div className="join-us-container-form-info">
          <h4>Your Details</h4>
          <span>
            <span style={{ color: "#FF0000" }}>*</span> All fields are required
          </span>
        </div>
        {/* <div className="join-us-container-form-components"> */}
        <div className="form-group">
          <div className="form-group-element" id="fullName">
            <p>Full name</p>
            <input
              type={"text"}
              placeholder="John Doe"
              value={value.fullName}
              onChange={(e) =>
                setValue((d) => ({ ...d, fullName: e.target.value }))
              }
              disabled={loading}
            />
          </div>
          <div className="form-group-element" id="email">
            <p>Email</p>
            <input
              type={"text"}
              placeholder="johndoe@example.com"
              value={value.email}
              onChange={(e) =>
                setValue((d) => ({ ...d, email: e.target.value }))
              }
              disabled={loading}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-group-element" id="country">
            <p>Country</p>
            <Select
              options={options}
              value={value.country}
              onChange={changeHandler}
              placeholder="----- Select Country -----"
              disabled={loading}
            />
            {/* <input type={'text'} placeholder='----- Select Country -----'/> */}
          </div>
          <div className="form-group-element" id="experience">
            <p>Years of Experience</p>
            <input
              type={"text"}
              placeholder="5+ years"
              value={value.experience}
              onChange={(e) =>
                setValue((d) => ({ ...d, experience: e.target.value }))
              }
              disabled={loading}
            />
          </div>
        </div>
        <div className="form-group-upload">
          <div className="form-group-upload-element" id="file">
            <p>Upload Resume</p>
            <input
              onChange={(e) => onFileInputChange(e)}
              ref={fileInputRef}
              type="file"
              className="hidden"
              disabled={loading}
            />
            <div
              className="drag-drop"
              style={{ cursor: loading ? "not-allowed" : "pointer" }}
              onClick={onTargetClick}
              dropable
              onDrop={() => null}
              onDragOver={() => null}
            >
              <svg
                width="60"
                height="54"
                viewBox="0 0 60 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.4062 39.3936H13.5938C6.48586 39.3936 0.703125 33.7072 0.703125 26.7178C0.703125 19.7283 6.48586 14.042 13.5938 14.042H14.8102C15.4106 6.31806 21.994 0.213867 30 0.213867C38.006 0.213867 44.5894 6.31806 45.1898 14.042H46.4062C53.5141 14.042 59.2969 19.7283 59.2969 26.7178C59.2969 33.7072 53.5141 39.3936 46.4062 39.3936ZM13.5938 16.3467C7.7782 16.3467 3.04688 20.9992 3.04688 26.7178C3.04688 32.4364 7.7782 37.0889 13.5938 37.0889H46.4062C52.2218 37.0889 56.9531 32.4364 56.9531 26.7178C56.9531 20.9992 52.2218 16.3467 46.4062 16.3467H42.8906V15.1943C42.8906 8.20491 37.1079 2.51855 30 2.51855C22.8921 2.51855 17.1094 8.20491 17.1094 15.1943V16.3467H13.5938Z"
                  fill="black"
                />
                <path
                  d="M37.0312 42.8506H22.9688V52.0693H37.0312V42.8506Z"
                  fill="#C0C0C0"
                />
                <path
                  d="M38.2031 53.2217H21.7969V41.6982H38.2031V53.2217ZM24.1406 50.917H35.8594V44.0029H24.1406V50.917Z"
                  fill="black"
                />
                <path
                  d="M30 15.1943L17.1094 29.0225H22.9688V38.2412H37.0312V29.0225H42.8906L30 15.1943Z"
                  fill="#C0C0C0"
                />
                <path
                  d="M38.2032 39.3936H21.797V30.1748H14.4456L30.0001 13.4891L45.5546 30.1748H38.2032V39.3936ZM24.1407 37.0889H35.8595V27.8702H40.2268L30.0001 16.8998L19.7734 27.8704H24.1407V37.0889Z"
                  fill="black"
                />
              </svg>
              <p>
                {/* You can also drag and<br></br> drop your file here */}
                click here to upload your file<br></br>
                {file?.name ? (
                  <span
                    style={{
                      diplay: "block",
                      fontSize: 15,
                      fontStyle: "italic",
                      textDecoration: "wavy",
                    }}
                  >
                    {file.name?.toLowerCase()}
                  </span>
                ) : null}
              </p>
            </div>
          </div>
          <div className="form-group-upload-submit">
            <button
              type="submit"
              className="btn btn-solid"
              onClick={submit}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit your details"}
            </button>
            {/* <span onClick={() => navigate('/join-us/sign-in')} style={{color: 'red', margin: 20, cursor: 'pointer'}}>Alternatively</span> */}
          </div>
        </div>
        {/* </div> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default DefaultContent;
