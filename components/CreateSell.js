// Render Prop
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import { useAccount, useSigner, useContract } from "wagmi";

import { toast } from "react-toastify";
import Preview from "./Preview";
import RadioButtons from "./RadioButton";
// import { CirclesWithBar, Circles } from "react-loader-spinner";


const CreateSell = () => {
  const { address, isConnecting, isDisconnected , isConnected} = useAccount()
  const { data: signer, isError, isLoading } = useSigner();

  const options = [
    { key: 'ERC721', value: 'ERC721' },
    { key: 'EIP712', value: 'EIP712' }
  ]
  const FILE_SIZE = 160 * 1024;
  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
  ];
  

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    symbol: Yup.string().required("Required"),
    premint: Yup.number().required().positive().integer(),
    file: Yup
    .mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      value => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
  });

  return (
    <div className="flex flex-col justify-center items-center m-5">
      <h1>Generate Free Basic ERC20 Token!</h1>
      <Formik
        initialValues={{ name: "", symbol: "", premint: "",file:null,mint:'' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting }) => {
          
             console.log(values)
         

          //
        }}
      >
        {({ values,setFieldValue,isSubmitting }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  flex flex-col gap-4 md:w-1/2 w-full items-center">
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name="name" component={TextError} className="" />
            <Field
              type="text"
              name="symbol"
              placeholder="Symbol"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name="symbol" component={TextError} />
            <Field
              type="nubmer"
              name="premint"
              placeholder="Premint"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage name="premint" component={TextError} />
            <RadioButtons  label='Mint Type'
              name='mint'
              className="self-start ml-7"
              options={options}/>
           
            <label htmlFor="file" className="bg-green-500 hover:cursor-pointer rounded-sm px-3 py-1 text-white">Upload File</label>
            <input
              id="file"
              type="file"
            //   name="file"
              placeholder="file"
              className="hidden"
              onChange={(e)=>{
                console.log(e.target.files[0])
                // console.log(typeof e.target.files[0])
                setFieldValue("file",e.target.files[0])}}
            />
            {values.file && <Preview file={values.file}/>}
            <ErrorMessage name="file" component={TextError} />
            <button type="submit" className="bg-black text-white w-20">
              Deploy
            </button>
          </Form>
        )}
      </Formik>

      
      
    </div>
  );
};

export default CreateSell;